import { Interface } from "ethers/lib/utils";

import type {
	IERC20,
	IIndexedUniswapV2Oracle,
	IPool,
	IPoolInitializer,
	IndexedUniswapRouterBurner,
	IndexedUniswapRouterMinter,
	MultiTokenStaking,
	Pair,
	RewardsSchedule,
	StakingRewards,
	StakingRewardsFactory,
	UniswapV2Router,
} from "./types";

import IERC20_ABI from "./IERC20.json";
import IIndexedUniswapV2Oracle_ABI from "./IIndexedUniswapV2Oracle.json";
import IPoolInitializer_ABI from "./IPoolInitializer.json";
import IPool_ABI from "./IPool.json";
import IndexedUniswapRouterBurner_ABI from "./IndexedUniswapRouterBurner.json";
import IndexedUniswapRouterMinter_ABI from "./IndexedUniswapRouterMinter.json";
import MultiTokenStaking_ABI from "./MultiTokenStaking.json";
import Pair_ABI from "./Pair.json";
import RewardsSchedule_ABI from "./RewardsSchedule.json";
import StakingRewardsFactory_ABI from "./StakingRewardsFactory.json";
import StakingRewards_ABI from "./StakingRewards.json";
import UniswapV2Router_ABI from "./UniswapV2Router.json";

export const IERC20Interface = new Interface(IERC20_ABI) as IERC20["interface"];
export const IIndexedUniswapV2OracleInterface = new Interface(IIndexedUniswapV2Oracle_ABI) as IIndexedUniswapV2Oracle["interface"];
export const IndexedUniswapRouterBurnerInterface = new Interface(IndexedUniswapRouterBurner_ABI) as IndexedUniswapRouterBurner["interface"];
export const IndexedUniswapRouterMinterInterface = new Interface(IndexedUniswapRouterMinter_ABI) as IndexedUniswapRouterMinter["interface"];
export const IPoolInterface = new Interface(IPool_ABI) as IPool["interface"];
export const IPoolInitializerInterface = new Interface(IPoolInitializer_ABI) as IPoolInitializer["interface"];
export const MultiTokenStakingInterface = new Interface(MultiTokenStaking_ABI) as MultiTokenStaking["interface"];
export const PairInterface = new Interface(Pair_ABI) as Pair["interface"];
export const RewardsScheduleInterface = new Interface(RewardsSchedule_ABI) as RewardsSchedule["interface"];
export const StakingRewardsInterface = new Interface(StakingRewards_ABI) as StakingRewards["interface"];
export const StakingRewardsFactoryInterface = new Interface(StakingRewardsFactory_ABI) as StakingRewardsFactory["interface"];
export const UniswapV2RouterInterface = new Interface(UniswapV2Router_ABI) as UniswapV2Router["interface"];

export {
	IERC20_ABI,
	IIndexedUniswapV2Oracle_ABI,
	IndexedUniswapRouterBurner_ABI,
	IndexedUniswapRouterMinter_ABI,
	IPool_ABI,
	IPoolInitializer_ABI,
	MultiTokenStaking_ABI,
	Pair_ABI,
	RewardsSchedule_ABI,
	StakingRewards_ABI,
	StakingRewardsFactory_ABI,
	UniswapV2Router_ABI,
}

export const interfaceLookup = {
	IERC20: IERC20Interface,
	IIndexedUniswapV2Oracle: IIndexedUniswapV2OracleInterface,
	IndexedUniswapRouterBurner: IndexedUniswapRouterBurnerInterface,
	IndexedUniswapRouterMinter: IndexedUniswapRouterMinterInterface,
	IPool: IPoolInterface,
	IPoolInitializer: IPoolInitializerInterface,
	MultiTokenStaking: MultiTokenStakingInterface,
	Pair: PairInterface,
	RewardsSchedule: RewardsScheduleInterface,
	StakingRewards: StakingRewardsInterface,
	StakingRewardsFactory: StakingRewardsFactoryInterface,
	UniswapV2Router: UniswapV2RouterInterface,
}

export type InterfaceKind = keyof typeof interfaceLookup;