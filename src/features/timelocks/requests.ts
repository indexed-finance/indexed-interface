import { IndexedDividendsSubgraphClient } from "@indexed-finance/subgraph-clients";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { getActiveNetworkInformation } from "helpers";
import type { TimeLockData } from "./slice";

export const fetchTimelocksMetadata = createAsyncThunk(
  "timelocks/metadata/fetch",
  async (provider: any) => {
    const {
      name,
      features: { timelocks },
    } = getActiveNetworkInformation(provider);

    if (timelocks) {
      const client = IndexedDividendsSubgraphClient.forNetwork(name);

      try {
        const metadata = await client.getData();

        return metadata;
      } catch (error) {
        console.error({ error });

        return null;
      }
    }
  }
);

export const fetchTimelockData = createAsyncThunk(
  "timelocks/fetch",
  async ({ provider, timelockId }: any) => {
    const {
      name,
      features: { timelocks },
    } = getActiveNetworkInformation(provider);

    if (timelocks) {
      const client = IndexedDividendsSubgraphClient.forNetwork(name);

      try {
        const timelock = await client.getLock(timelockId);

        return timelock;
      } catch (error) {
        console.error({ error });

        return null;
      }
    }
  }
);

export const fetchUserTimelocks = createAsyncThunk(
  "timelocks/user/fetch",
  async ({ provider, userId }: any) => {
    const {
      name,
      features: { timelocks },
    } = getActiveNetworkInformation(provider);

    if (timelocks) {
      const client = IndexedDividendsSubgraphClient.forNetwork(name);

      try {
        const timelocks = (await (client.getLocksByOwner(
          userId
        ) as unknown)) as TimeLockData[];

        return timelocks;
      } catch (error) {
        console.error({ error });

        return [];
      }
    }
  }
);
