import { NETWORKS } from "config";

let activeNetwork = 1;

let hasDone = false;

export function getActiveNetwork(provider: any) {
  if (provider) {
    if (!hasDone) {
      hasDone = true;
      provider.send("net_version", []).then((rawNetworkId: number) => {
        activeNetwork = rawNetworkId;
      });
    }

    return activeNetwork;
  } else {
    return null;
  }
}

export function getActiveNetworkInformation(provider: any) {
  const networkId = getActiveNetwork(provider);
  const networkInformation = (NETWORKS as any)[networkId ?? -1];

  if (networkInformation) {
    return networkInformation;
  } else {
    return null;
  }
}
