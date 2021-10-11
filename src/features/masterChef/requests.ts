import { MasterChefSubgraphClient } from "@indexed-finance/subgraph-clients";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { getActiveNetworkInformation } from "helpers";

export const fetchMasterChefData = createAsyncThunk(
  "masterChef/fetch",
  async (provider: any) => {
    const {
      name,
      features: { staking },
    } = getActiveNetworkInformation(provider);

    if (staking) {
      const client = MasterChefSubgraphClient.forNetwork(name);

      try {
        const data = await client.getStakingInfo();
        const { pools, ...meta } = data;

        return {
          meta,
          pools: pools.map(({ balance, ...pool }) => ({
            ...pool,
            totalStaked: balance,
          })),
        };
      } catch (error) {
        return null;
      }
    }
  }
);
