import {
  CLIENT_STATISTICS_REPORTING_RATE,
  SUPPORTED_NETWORKS,
  WEBSOCKET_SERVER_PING_RATE,
  WEBSOCKET_SERVER_PORT,
} from "config";
import { IncomingMessage } from "http";
import { createServer } from "https";
import { formatMirrorStateResponse, getNetworkStates, log } from "./helpers";
import WebSocket from "isomorphic-ws";
import fs from "fs";

const DEFLATION_OPTIONS = {
  zlibDeflateOptions: {
    chunkSize: 1024,
    memLevel: 7,
    level: 3,
  },
  zlibInflateOptions: {
    chunkSize: 10 * 1024,
  },
  clientNoContextTakeover: true,
  serverNoContextTakeover: true,
  serverMaxWindowBits: 10,
  concurrencyLimit: 10,
  threshold: 1024,
};

// Track usage via reporting statistics.
export const clientStatistics = {
  totalConnections: 0,
  totalErrors: 0,
  totalMirrorsSent: 0,
};

// Set up a collection of client connections.
export const clientToIpLookup = new WeakMap<WebSocket, string>();
export const ipToClientLookup: Record<string, WebSocket> = {};
export const connections: WebSocket[] = [];

/**
 * Creates a WebSocket server that provides quick updates to connected clients.
 */
export function setupClientHandling() {
  if (process.env.NODE_ENV === "development") {
    const socketServer = new WebSocket.Server(
      {
        port: WEBSOCKET_SERVER_PORT,
        perMessageDeflate: DEFLATION_OPTIONS,
      },
      () => log("Local socket server listening...")
    );

    socketServer.on("connection", handleConnection);
    socketServer.on("close", handleClose);
    socketServer.on("error", handleError);

    process.on('SIGTERM', () => {
      console.info('SIGTERM signal received.');
      console.log('Removing all listeners from socket server...')
      socketServer.removeAllListeners()
      console.log('Removed all listeners from socket server')
      console.log('Killing socket server...');
      socketServer.close(() => {
        console.log('Socket server killed.')
        process.exit(0)
      })
    })
  } else {
    const API_CERT_PATH = process.env.API_CERT_PATH;
    const API_KEY_PATH = process.env.API_KEY_PATH;

    if (!(API_CERT_PATH && API_KEY_PATH)) {
      throw new Error(
        "Server requires environment variables API_CERT_PATH and API_KEY_PATH"
      );
    }

    const key = fs.readFileSync(API_KEY_PATH, "utf8");
    const cert = fs.readFileSync(API_CERT_PATH, "utf8");
    const credentials = { key, cert };
    const server = createServer(credentials);
    const socketServer = new WebSocket.Server(
      {
        server,
        perMessageDeflate: DEFLATION_OPTIONS,
      },
      () => log("Production socket server listening...")
    );

    socketServer.on("connection", handleConnection);
    socketServer.on("close", handleClose);
    socketServer.on("error", handleError);

    server.listen(443, () => "Server listening on 443...");

    process.on('SIGTERM', () => {
      console.info('SIGTERM signal received.');
      console.log('Removing all listeners from socket server...')
      socketServer.removeAllListeners()
      console.log('Removed all listeners from socket server')
      console.log('Killing socket server...');
      socketServer.close(() => {
        console.log('Socket server killed.');
        console.log('Killing https server...');
        server.close(() => {
          console.log('Https server killed.');
          process.exit(0);
        })
      })
    })
  }

  continuouslyCheckForInactivity();
  continuouslyReportStatistics();
}

setInterval(sendUpdates, 5000);

// #region Helpers
function handleConnection(client: WebSocket, incoming: IncomingMessage) {
  const ip = incoming.headers.origin ?? "";
  
  if (!ipToClientLookup[ip]) {
    log("A client has connected.", ip);

    clientStatistics.totalConnections++;

    clientToIpLookup.set(client, ip);

    // Prune previous clients with the same IP.
    for (const connection of connections) {
      const connectionIp = clientToIpLookup.get(connection);

      if (connectionIp === ip) {
        connections.splice(connections.indexOf(connection, 1));
      }
    }

    connections.push(client);

    const networkStates = getNetworkStates();
    client.send(formatMirrorStateResponse(networkStates));

    clientStatistics.totalMirrorsSent++;
  }
}

function handleClose(client: WebSocket) {
  log("A client closed their connection.", clientToIpLookup.get(client));
  pruneClient(client);
}

function handleError(client: WebSocket) {
  log("A client experienced an error.", clientToIpLookup.get(client));
  pruneClient(client);
  clientStatistics.totalErrors++;
}

const lastBlockNumbers: Record<number, number> = {};

function initializeBlockNumbers() {
  const networkStates = getNetworkStates()
  for (const chainId of SUPPORTED_NETWORKS) {
    const networkState = networkStates[chainId];
    if (networkState) {
      lastBlockNumbers[chainId] = networkState.batcher.blockNumber;
    } else {
      lastBlockNumbers[chainId] = -1;
    }
  }
}

initializeBlockNumbers()

function sendUpdates() {
  const networkStates = getNetworkStates();
  let anyChanges = false;
  for (const chainId of SUPPORTED_NETWORKS) {
    const lastBlockNumber = lastBlockNumbers[chainId];
    const currentBlockNumber = networkStates[chainId]?.batcher?.blockNumber ?? -1;
    if (currentBlockNumber !== lastBlockNumber) {
      anyChanges = true;
      lastBlockNumbers[chainId] = currentBlockNumber;
    }
  }

  if (anyChanges && connections.length > 0) {
    log(`Updating ${connections.length} clients.`);

    for (const client of connections) {
      client.send(formatMirrorStateResponse(networkStates));
    }

    clientStatistics.totalMirrorsSent++;
  }
}

function continuouslyCheckForInactivity() {
  setTimeout(async () => {
    for (const connection of connections) {
      const ping = (): Promise<any> =>
        new Promise((resolve, reject) =>
          connection.ping(null, false, (err) =>
            err ? reject(err) : resolve(true)
          )
        );

      try {
        if (connection.readyState === connection.OPEN) {
          log(`Checking for inactivity for ${connection.url}`);
          await ping();
          log("All good.");
        }
      } catch (error) {
        log(
          "Pruning disconnected connection.",
          clientToIpLookup.get(connection)
        );
        pruneClient(connection);
      }
    }

    continuouslyCheckForInactivity();
  }, WEBSOCKET_SERVER_PING_RATE);
}

function continuouslyReportStatistics() {
  setTimeout(() => {
    log("Client statistics:", {
      currenctConnections: connections.length,
      ...clientStatistics,
    });
    continuouslyReportStatistics();
  }, CLIENT_STATISTICS_REPORTING_RATE);
}

function pruneClient(client: WebSocket) {
  const droppedIp = clientToIpLookup.get(client) ?? "";
  connections.splice(connections.lastIndexOf(client, 1));
  delete ipToClientLookup[droppedIp];
}
// #endregion
