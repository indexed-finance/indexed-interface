import { createSlice } from "@reduxjs/toolkit";
import type { AppState } from "features";

const initialState = {
  current: 1,
  byId: {
    1: {
      id: 1,
      name: "mainnet",
      commonBaseTokens: [
        {
          id: "0x0000000000000000000000000000000000000000",
          symbol: "ETH",
          name: "Ether",
          decimals: 18,
        },
        {
          id: "0x6b175474e89094c44da98b954eedeac495271d0f",
          symbol: "DAI",
          name: "Dai Stablecoin",
          decimals: 18,
        },
        {
          id: "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2",
          symbol: "WETH",
          name: "Wrapped Ether",
          decimals: 18,
        },
        {
          id: "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48",
          symbol: "USDC",
          name: "USD Coin",
          decimals: 6,
        },
        {
          id: "0x6b3595068778dd592e39a122f4f5a5cf09c90fe2",
          symbol: "SUSHI",
          name: "SushiToken",
          decimals: 18,
        },
      ],
      addresses: {
        // Universal
        dndx: "0x262cd9ADCE436B6827C01291B84f1871FB8b95A3",
        dndxTimelock: "0xEE285F0Ef0cb1d103A64A85E5A0EDFEdcB53900f",
        ndx: "0x86772b1409b61c639EaAc9Ba0AcfBb6E238e5F83",
        narwhalRouter: "0x429302C74a0350410fC8B43E4839D459dEC4D050",
        wethContract: "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2",
        mintRouter: "0xfb6ac20d38a1f0c4f90747ca0745e140bc17e4c3",
        burnRouter: "0x348ab9b021fff6016d3eb07d3171bdef0022cfa8",
        ethBalanceGetter: "0xfF1c691C3DB6fA065B6499A5c93264a6e5cb8ed2",
        multicall2: "0x5BA1e12693Dc8F9c48aAD8770482f4739bEeD696",
        masterchef: "0xc2EdaD668740f1aA35E4D8f227fB8E17dcA888Cd",

        // Specific
        uniswapFactory: "0x5c69bee701ef814a2b6a3edd4b1652cb9cc5aa6f",
        uniswapRouter: "0x7a250d5630b4cf539739df2c5dacb4c659f2488d",
        sushiswapFactory: "0xC0AEe478e3658e2610c5F7A4A2E1777cE9e4f2Ac",
        sushi: "0x6b3595068778dd592e39a122f4f5a5cf09c90fe2",
        adapterRegistry: "0x5F2945604013Ee9f80aE2eDDb384462B681859C4",
        multiTokenStaking: "0xc46e0e7ecb3efcc417f6f89b940ffaff72556382",
        rewardsSchedule: "0x131ba0fc3e4e866e5daf3d16526846fdd3e67623",
      },
    },
  },
};

type Network = typeof initialState.byId[1];
type NetworkState = {
  current: number;
  byId: Record<number, Network>;
};

const slice = createSlice<NetworkState, any, "networks">({
  name: "networks",
  initialState,
  reducers: {},
});

export const { actions: networksActions, reducer: networksReducer } = slice;

export const networksSelectors = {
  selectCurrentNetwork: (state: AppState) =>
    state.networks.byId[state.networks.current],
  selectNetworkAddresses: (state: AppState) =>
    networksSelectors.selectCurrentNetwork(state).addresses,
  selectCommonBaseTokens: (state: AppState) =>
    networksSelectors.selectCurrentNetwork(state).commonBaseTokens,
  selectDisplayedCommonBaseTokens: (state: AppState) => {
    const common = networksSelectors.selectCommonBaseTokens(state);
    const { wethContract, sushi } =
      networksSelectors.selectNetworkAddresses(state);

    return common.filter(
      (token) =>
        token.id !== wethContract.toLowerCase() &&
        token.id !== sushi.toLowerCase()
    );
  },
};
