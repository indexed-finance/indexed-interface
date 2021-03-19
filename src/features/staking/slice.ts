import {
  PayloadAction,
  createEntityAdapter,
  createSlice,
} from "@reduxjs/toolkit";
import type { AppState } from "features/store";
import type { NdxStakingPool } from "indexed-types";

const adapter = createEntityAdapter<NdxStakingPool>();

const slice = createSlice({
  name: "staking",
  initialState: adapter.getInitialState(),
  reducers: {
    stakingDataLoaded(state, action: PayloadAction<NdxStakingPool[]>) {
      adapter.addMany(state, action.payload);
    },
  },
});

export const { actions } = slice;

export const selectors = {
  ...adapter.getSelectors((state: AppState) => state.staking),
  selectAllStakingPools(state: AppState) {
    return selectors.selectAll(state);
  },
};

export default slice.reducer;