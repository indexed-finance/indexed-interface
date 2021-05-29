import { INFURA_ID } from "config";
import { actions, requests, selectors, store } from "features";
import {
  buildUniswapPairs,
  createPairDataCalls,
  createPoolDetailCalls,
  createStakingCalls,
  createTotalSuppliesCalls,
} from "hooks";
import { createNewStakingCalls } from "hooks/new-staking-hooks";
import { log } from "./helpers";
import { providers } from "ethers";
import type { RegisteredCall, RegisteredCaller } from "helpers";

// The same provider is used for the lifetime of the server.
const { dispatch, getState, subscribe } = store;
const provider = new providers.InfuraProvider("mainnet", INFURA_ID);

/**
 * After creating the connection, allow it to update before initializing the store.
 */
export async function setupStateHandling() {
  log("Waiting for provider.");

  await provider.ready;

  log("Provider ready. Initializing.");

  dispatch(
    actions.initialize({
      provider,
      withSigner: false,
    })
  );
}

/**
 * As soon as the store has all relevant symbols,
 * pass the symbols to the CoinAPI connection to begin receiving updates.
 */
const unsubscribeFromWaitingForSymbols = subscribe(() => {
  const state = getState();
  const indexPools = selectors.selectAllPools(state);
  const stakingPools = selectors.selectAllStakingPools(state);
  const symbols = selectors.selectTokenSymbols(state);

  if (indexPools.length > 0 && stakingPools.length > 0 && symbols.length > 0) {
    unsubscribeFromWaitingForSymbols();
    setupRegistrants();
  }
});

const BLOCKS_PER_DAY = 86400 / 13.5;

function setupRegistrants() {
  const state = getState();
  const indexPools = selectors.selectAllPools(state);
  const stakingPools = selectors.selectAllStakingPools(state);
  const newStakingPools = selectors.selectAllNewStakingPools(state);
  const newStakingMeta = selectors.selectNewStakingMeta(state);
  const { pairDataCalls, poolDetailCalls, totalSuppliesCalls } =
    indexPools.reduce(
      (prev, next) => {
        const { id } = next;
        const tokenIds = selectors.selectPoolTokenIds(state, id);
        const pairs = buildUniswapPairs(tokenIds);
        const pairDataCalls = createPairDataCalls(pairs);
        prev.pairDataCalls.onChainCalls.push(...pairDataCalls);

        const poolDetailCalls = createPoolDetailCalls(id, tokenIds);
        prev.poolDetailCalls.onChainCalls.push(...poolDetailCalls.onChainCalls);
        prev.poolDetailCalls.offChainCalls.push(
          ...(poolDetailCalls.offChainCalls as RegisteredCall[])
        );

        const totalSuppliesCalls = createTotalSuppliesCalls(tokenIds);
        prev.totalSuppliesCalls.onChainCalls.push(...totalSuppliesCalls);

        return prev;
      },
      {
        pairDataCalls: {
          caller: "Pair Data",
          onChainCalls: [],
          offChainCalls: [],
        },
        poolDetailCalls: {
          caller: "Pool Data",
          onChainCalls: [],
          offChainCalls: [],
        },
        totalSuppliesCalls: {
          caller: "Total Supplies",
          onChainCalls: [],
          offChainCalls: [],
        },
      } as {
        pairDataCalls: RegisteredCaller;
        poolDetailCalls: RegisteredCaller;
        totalSuppliesCalls: RegisteredCaller;
      }
    );
  const fromBlock = newStakingPools.sort((a, b) => b.lastRewardBlock - a.lastRewardBlock)[0].lastRewardBlock;
  const stakingCalls = stakingPools.reduce(
    (prev, next) => {
      const { id, stakingToken } = next;
      const stakingCalls = createStakingCalls(id, stakingToken);

      prev.onChainCalls.push(...stakingCalls.onChainCalls);
      prev.offChainCalls.push(
        ...(stakingCalls.offChainCalls as RegisteredCall[])
      );

      return prev;
    },
    {
      caller: "Staking",
      onChainCalls: [],
      offChainCalls: [],
    } as RegisteredCaller
  );
  const newStakingCalls = newStakingPools.reduce(
    (prev, next) => {
      const { id, token } = next;
      const newStakingCalls = createNewStakingCalls(newStakingMeta.id, id, token);
      prev.onChainCalls.push(...newStakingCalls.offChainCalls);
      prev.offChainCalls.push(...newStakingCalls.offChainCalls);
      return prev;
    },
    {
      caller: "NewStaking",
      onChainCalls: [
        {
          target: newStakingMeta.rewardsSchedule,
          function: 'getRewardsForBlockRange',
          interfaceKind: 'RewardsSchedule',
          args: [fromBlock.toString(), Math.floor(fromBlock + BLOCKS_PER_DAY).toString()]
        }
      ],
      offChainCalls: [],
    } as RegisteredCaller
  );

  dispatch(
    actions.callsRegistered([
      pairDataCalls,
      poolDetailCalls,
      totalSuppliesCalls,
      stakingCalls,
      newStakingCalls
    ])
  );
  dispatch(
    requests.fetchStakingData({
      provider,
    })
  )
  dispatch(
    requests.fetchNewStakingData({
      provider
    })
  )
}
