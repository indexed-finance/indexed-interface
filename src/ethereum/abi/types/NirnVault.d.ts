/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
  BaseContract,
  ContractTransaction,
  Overrides,
  CallOverrides,
} from "ethers";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";
import { TypedEventFilter, TypedEvent, TypedListener } from "./commons";

interface NirnVaultInterface extends ethers.utils.Interface {
  functions: {
    "balance()": FunctionFragment;
    "canChangeCompositionAfter()": FunctionFragment;
    "currentDistribution()": FunctionFragment;
    "decimals()": FunctionFragment;
    "deposit(uint256)": FunctionFragment;
    "depositTo(uint256,address)": FunctionFragment;
    "eoaSafeCaller()": FunctionFragment;
    "feeRecipient()": FunctionFragment;
    "getAPR()": FunctionFragment;
    "getAdaptersAndWeights()": FunctionFragment;
    "getBalances()": FunctionFragment;
    "getCurrentLiquidityDeltas()": FunctionFragment;
    "getPendingFees()": FunctionFragment;
    "getPricePerFullShare()": FunctionFragment;
    "getPricePerFullShareWithFee()": FunctionFragment;
    "initialize(address,address,address,address)": FunctionFragment;
    "lockedTokens(address)": FunctionFragment;
    "maximumUnderlying()": FunctionFragment;
    "minimumAPRImprovement()": FunctionFragment;
    "minimumCompositionChangeDelay()": FunctionFragment;
    "name()": FunctionFragment;
    "performanceFee()": FunctionFragment;
    "priceAtLastFee()": FunctionFragment;
    "rebalance()": FunctionFragment;
    "rebalanceWithNewAdapters(address[],uint256[])": FunctionFragment;
    "rebalanceWithNewWeights(uint256[])": FunctionFragment;
    "registry()": FunctionFragment;
    "reserveBalance()": FunctionFragment;
    "reserveRatio()": FunctionFragment;
    "rewardsSeller()": FunctionFragment;
    "sellRewards(address,bytes)": FunctionFragment;
    "setFeeRecipient(address)": FunctionFragment;
    "setMaximumUnderlying(uint256)": FunctionFragment;
    "setPerformanceFee(uint64)": FunctionFragment;
    "setReserveRatio(uint64)": FunctionFragment;
    "setRewardsSeller(address)": FunctionFragment;
    "symbol()": FunctionFragment;
    "underlying()": FunctionFragment;
    "withdraw(uint256)": FunctionFragment;
    "withdrawUnderlying(uint256)": FunctionFragment;
  };

  encodeFunctionData(functionFragment: "balance", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "canChangeCompositionAfter",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "currentDistribution",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "decimals", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "deposit",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "depositTo",
    values: [BigNumberish, string]
  ): string;
  encodeFunctionData(
    functionFragment: "eoaSafeCaller",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "feeRecipient",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "getAPR", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "getAdaptersAndWeights",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getBalances",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getCurrentLiquidityDeltas",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getPendingFees",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getPricePerFullShare",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getPricePerFullShareWithFee",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "initialize",
    values: [string, string, string, string]
  ): string;
  encodeFunctionData(
    functionFragment: "lockedTokens",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "maximumUnderlying",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "minimumAPRImprovement",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "minimumCompositionChangeDelay",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "name", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "performanceFee",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "priceAtLastFee",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "rebalance", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "rebalanceWithNewAdapters",
    values: [string[], BigNumberish[]]
  ): string;
  encodeFunctionData(
    functionFragment: "rebalanceWithNewWeights",
    values: [BigNumberish[]]
  ): string;
  encodeFunctionData(functionFragment: "registry", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "reserveBalance",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "reserveRatio",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "rewardsSeller",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "sellRewards",
    values: [string, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "setFeeRecipient",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "setMaximumUnderlying",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "setPerformanceFee",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "setReserveRatio",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "setRewardsSeller",
    values: [string]
  ): string;
  encodeFunctionData(functionFragment: "symbol", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "underlying",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "withdraw",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "withdrawUnderlying",
    values: [BigNumberish]
  ): string;

  decodeFunctionResult(functionFragment: "balance", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "canChangeCompositionAfter",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "currentDistribution",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "decimals", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "deposit", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "depositTo", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "eoaSafeCaller",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "feeRecipient",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "getAPR", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getAdaptersAndWeights",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getBalances",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getCurrentLiquidityDeltas",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getPendingFees",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getPricePerFullShare",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getPricePerFullShareWithFee",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "lockedTokens",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "maximumUnderlying",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "minimumAPRImprovement",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "minimumCompositionChangeDelay",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "name", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "performanceFee",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "priceAtLastFee",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "rebalance", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "rebalanceWithNewAdapters",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "rebalanceWithNewWeights",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "registry", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "reserveBalance",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "reserveRatio",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "rewardsSeller",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "sellRewards",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setFeeRecipient",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setMaximumUnderlying",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setPerformanceFee",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setReserveRatio",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setRewardsSeller",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "symbol", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "underlying", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "withdraw", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "withdrawUnderlying",
    data: BytesLike
  ): Result;

  events: {
    "AdapterRemoved(address)": EventFragment;
    "AllocationsUpdated(address[],uint256[])": EventFragment;
    "Deposit(uint256,uint256)": EventFragment;
    "FeesClaimed(uint256,uint256)": EventFragment;
    "Rebalanced()": EventFragment;
    "SetFeeRecipient(address)": EventFragment;
    "SetMaximumUnderlying(uint256)": EventFragment;
    "SetPerformanceFee(uint256)": EventFragment;
    "SetReserveRatio(uint256)": EventFragment;
    "SetRewardsSeller(address)": EventFragment;
    "Withdrawal(uint256,uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "AdapterRemoved"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "AllocationsUpdated"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Deposit"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "FeesClaimed"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Rebalanced"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "SetFeeRecipient"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "SetMaximumUnderlying"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "SetPerformanceFee"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "SetReserveRatio"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "SetRewardsSeller"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Withdrawal"): EventFragment;
}

export class NirnVault extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  listeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter?: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): Array<TypedListener<EventArgsArray, EventArgsObject>>;
  off<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  on<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  once<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeListener<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeAllListeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): this;

  listeners(eventName?: string): Array<Listener>;
  off(eventName: string, listener: Listener): this;
  on(eventName: string, listener: Listener): this;
  once(eventName: string, listener: Listener): this;
  removeListener(eventName: string, listener: Listener): this;
  removeAllListeners(eventName?: string): this;

  queryFilter<EventArgsArray extends Array<any>, EventArgsObject>(
    event: TypedEventFilter<EventArgsArray, EventArgsObject>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEvent<EventArgsArray & EventArgsObject>>>;

  interface: NirnVaultInterface;

  functions: {
    balance(
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { sum: BigNumber }>;

    canChangeCompositionAfter(overrides?: CallOverrides): Promise<[BigNumber]>;

    currentDistribution(
      overrides?: CallOverrides
    ): Promise<
      [
        [string[], BigNumber[], BigNumber[], BigNumber[], BigNumber] & {
          adapters: string[];
          weights: BigNumber[];
          balances: BigNumber[];
          liquidityDeltas: BigNumber[];
          netAPR: BigNumber;
        },
        BigNumber,
        BigNumber
      ] & {
        params: [string[], BigNumber[], BigNumber[], BigNumber[], BigNumber] & {
          adapters: string[];
          weights: BigNumber[];
          balances: BigNumber[];
          liquidityDeltas: BigNumber[];
          netAPR: BigNumber;
        };
        totalProductiveBalance: BigNumber;
        _reserveBalance: BigNumber;
      }
    >;

    decimals(overrides?: CallOverrides): Promise<[number]>;

    deposit(
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    depositTo(
      amount: BigNumberish,
      to: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    eoaSafeCaller(overrides?: CallOverrides): Promise<[string]>;

    feeRecipient(overrides?: CallOverrides): Promise<[string]>;

    getAPR(overrides?: CallOverrides): Promise<[BigNumber]>;

    getAdaptersAndWeights(
      overrides?: CallOverrides
    ): Promise<
      [string[], BigNumber[]] & { adapters: string[]; weights: BigNumber[] }
    >;

    getBalances(
      overrides?: CallOverrides
    ): Promise<[BigNumber[]] & { balances: BigNumber[] }>;

    getCurrentLiquidityDeltas(
      overrides?: CallOverrides
    ): Promise<[BigNumber[]] & { liquidityDeltas: BigNumber[] }>;

    getPendingFees(overrides?: CallOverrides): Promise<[BigNumber]>;

    getPricePerFullShare(overrides?: CallOverrides): Promise<[BigNumber]>;

    getPricePerFullShareWithFee(
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    initialize(
      _underlying: string,
      _rewardsSeller: string,
      _feeRecipient: string,
      _owner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    lockedTokens(arg0: string, overrides?: CallOverrides): Promise<[boolean]>;

    maximumUnderlying(overrides?: CallOverrides): Promise<[BigNumber]>;

    minimumAPRImprovement(overrides?: CallOverrides): Promise<[BigNumber]>;

    minimumCompositionChangeDelay(
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    name(overrides?: CallOverrides): Promise<[string]>;

    performanceFee(overrides?: CallOverrides): Promise<[BigNumber]>;

    priceAtLastFee(overrides?: CallOverrides): Promise<[BigNumber]>;

    rebalance(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    rebalanceWithNewAdapters(
      proposedAdapters: string[],
      proposedWeights: BigNumberish[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    rebalanceWithNewWeights(
      proposedWeights: BigNumberish[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    registry(overrides?: CallOverrides): Promise<[string]>;

    reserveBalance(overrides?: CallOverrides): Promise<[BigNumber]>;

    reserveRatio(overrides?: CallOverrides): Promise<[BigNumber]>;

    rewardsSeller(overrides?: CallOverrides): Promise<[string]>;

    sellRewards(
      rewardsToken: string,
      params: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setFeeRecipient(
      _feeRecipient: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setMaximumUnderlying(
      _maximumUnderlying: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setPerformanceFee(
      _performanceFee: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setReserveRatio(
      _reserveRatio: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setRewardsSeller(
      _rewardsSeller: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    symbol(overrides?: CallOverrides): Promise<[string]>;

    underlying(overrides?: CallOverrides): Promise<[string]>;

    withdraw(
      shares: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    withdrawUnderlying(
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  balance(overrides?: CallOverrides): Promise<BigNumber>;

  canChangeCompositionAfter(overrides?: CallOverrides): Promise<BigNumber>;

  currentDistribution(
    overrides?: CallOverrides
  ): Promise<
    [
      [string[], BigNumber[], BigNumber[], BigNumber[], BigNumber] & {
        adapters: string[];
        weights: BigNumber[];
        balances: BigNumber[];
        liquidityDeltas: BigNumber[];
        netAPR: BigNumber;
      },
      BigNumber,
      BigNumber
    ] & {
      params: [string[], BigNumber[], BigNumber[], BigNumber[], BigNumber] & {
        adapters: string[];
        weights: BigNumber[];
        balances: BigNumber[];
        liquidityDeltas: BigNumber[];
        netAPR: BigNumber;
      };
      totalProductiveBalance: BigNumber;
      _reserveBalance: BigNumber;
    }
  >;

  decimals(overrides?: CallOverrides): Promise<number>;

  deposit(
    amount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  depositTo(
    amount: BigNumberish,
    to: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  eoaSafeCaller(overrides?: CallOverrides): Promise<string>;

  feeRecipient(overrides?: CallOverrides): Promise<string>;

  getAPR(overrides?: CallOverrides): Promise<BigNumber>;

  getAdaptersAndWeights(
    overrides?: CallOverrides
  ): Promise<
    [string[], BigNumber[]] & { adapters: string[]; weights: BigNumber[] }
  >;

  getBalances(overrides?: CallOverrides): Promise<BigNumber[]>;

  getCurrentLiquidityDeltas(overrides?: CallOverrides): Promise<BigNumber[]>;

  getPendingFees(overrides?: CallOverrides): Promise<BigNumber>;

  getPricePerFullShare(overrides?: CallOverrides): Promise<BigNumber>;

  getPricePerFullShareWithFee(overrides?: CallOverrides): Promise<BigNumber>;

  initialize(
    _underlying: string,
    _rewardsSeller: string,
    _feeRecipient: string,
    _owner: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  lockedTokens(arg0: string, overrides?: CallOverrides): Promise<boolean>;

  maximumUnderlying(overrides?: CallOverrides): Promise<BigNumber>;

  minimumAPRImprovement(overrides?: CallOverrides): Promise<BigNumber>;

  minimumCompositionChangeDelay(overrides?: CallOverrides): Promise<BigNumber>;

  name(overrides?: CallOverrides): Promise<string>;

  performanceFee(overrides?: CallOverrides): Promise<BigNumber>;

  priceAtLastFee(overrides?: CallOverrides): Promise<BigNumber>;

  rebalance(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  rebalanceWithNewAdapters(
    proposedAdapters: string[],
    proposedWeights: BigNumberish[],
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  rebalanceWithNewWeights(
    proposedWeights: BigNumberish[],
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  registry(overrides?: CallOverrides): Promise<string>;

  reserveBalance(overrides?: CallOverrides): Promise<BigNumber>;

  reserveRatio(overrides?: CallOverrides): Promise<BigNumber>;

  rewardsSeller(overrides?: CallOverrides): Promise<string>;

  sellRewards(
    rewardsToken: string,
    params: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setFeeRecipient(
    _feeRecipient: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setMaximumUnderlying(
    _maximumUnderlying: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setPerformanceFee(
    _performanceFee: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setReserveRatio(
    _reserveRatio: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setRewardsSeller(
    _rewardsSeller: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  symbol(overrides?: CallOverrides): Promise<string>;

  underlying(overrides?: CallOverrides): Promise<string>;

  withdraw(
    shares: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  withdrawUnderlying(
    amount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    balance(overrides?: CallOverrides): Promise<BigNumber>;

    canChangeCompositionAfter(overrides?: CallOverrides): Promise<BigNumber>;

    currentDistribution(
      overrides?: CallOverrides
    ): Promise<
      [
        [string[], BigNumber[], BigNumber[], BigNumber[], BigNumber] & {
          adapters: string[];
          weights: BigNumber[];
          balances: BigNumber[];
          liquidityDeltas: BigNumber[];
          netAPR: BigNumber;
        },
        BigNumber,
        BigNumber
      ] & {
        params: [string[], BigNumber[], BigNumber[], BigNumber[], BigNumber] & {
          adapters: string[];
          weights: BigNumber[];
          balances: BigNumber[];
          liquidityDeltas: BigNumber[];
          netAPR: BigNumber;
        };
        totalProductiveBalance: BigNumber;
        _reserveBalance: BigNumber;
      }
    >;

    decimals(overrides?: CallOverrides): Promise<number>;

    deposit(
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    depositTo(
      amount: BigNumberish,
      to: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    eoaSafeCaller(overrides?: CallOverrides): Promise<string>;

    feeRecipient(overrides?: CallOverrides): Promise<string>;

    getAPR(overrides?: CallOverrides): Promise<BigNumber>;

    getAdaptersAndWeights(
      overrides?: CallOverrides
    ): Promise<
      [string[], BigNumber[]] & { adapters: string[]; weights: BigNumber[] }
    >;

    getBalances(overrides?: CallOverrides): Promise<BigNumber[]>;

    getCurrentLiquidityDeltas(overrides?: CallOverrides): Promise<BigNumber[]>;

    getPendingFees(overrides?: CallOverrides): Promise<BigNumber>;

    getPricePerFullShare(overrides?: CallOverrides): Promise<BigNumber>;

    getPricePerFullShareWithFee(overrides?: CallOverrides): Promise<BigNumber>;

    initialize(
      _underlying: string,
      _rewardsSeller: string,
      _feeRecipient: string,
      _owner: string,
      overrides?: CallOverrides
    ): Promise<void>;

    lockedTokens(arg0: string, overrides?: CallOverrides): Promise<boolean>;

    maximumUnderlying(overrides?: CallOverrides): Promise<BigNumber>;

    minimumAPRImprovement(overrides?: CallOverrides): Promise<BigNumber>;

    minimumCompositionChangeDelay(
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    name(overrides?: CallOverrides): Promise<string>;

    performanceFee(overrides?: CallOverrides): Promise<BigNumber>;

    priceAtLastFee(overrides?: CallOverrides): Promise<BigNumber>;

    rebalance(overrides?: CallOverrides): Promise<void>;

    rebalanceWithNewAdapters(
      proposedAdapters: string[],
      proposedWeights: BigNumberish[],
      overrides?: CallOverrides
    ): Promise<void>;

    rebalanceWithNewWeights(
      proposedWeights: BigNumberish[],
      overrides?: CallOverrides
    ): Promise<void>;

    registry(overrides?: CallOverrides): Promise<string>;

    reserveBalance(overrides?: CallOverrides): Promise<BigNumber>;

    reserveRatio(overrides?: CallOverrides): Promise<BigNumber>;

    rewardsSeller(overrides?: CallOverrides): Promise<string>;

    sellRewards(
      rewardsToken: string,
      params: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    setFeeRecipient(
      _feeRecipient: string,
      overrides?: CallOverrides
    ): Promise<void>;

    setMaximumUnderlying(
      _maximumUnderlying: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    setPerformanceFee(
      _performanceFee: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    setReserveRatio(
      _reserveRatio: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    setRewardsSeller(
      _rewardsSeller: string,
      overrides?: CallOverrides
    ): Promise<void>;

    symbol(overrides?: CallOverrides): Promise<string>;

    underlying(overrides?: CallOverrides): Promise<string>;

    withdraw(
      shares: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    withdrawUnderlying(
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  filters: {
    AdapterRemoved(
      adapter?: null
    ): TypedEventFilter<[string], { adapter: string }>;

    AllocationsUpdated(
      adapters?: null,
      weights?: null
    ): TypedEventFilter<
      [string[], BigNumber[]],
      { adapters: string[]; weights: BigNumber[] }
    >;

    Deposit(
      shares?: null,
      underlying?: null
    ): TypedEventFilter<
      [BigNumber, BigNumber],
      { shares: BigNumber; underlying: BigNumber }
    >;

    FeesClaimed(
      underlyingAmount?: null,
      sharesMinted?: null
    ): TypedEventFilter<
      [BigNumber, BigNumber],
      { underlyingAmount: BigNumber; sharesMinted: BigNumber }
    >;

    Rebalanced(): TypedEventFilter<[], {}>;

    SetFeeRecipient(
      feeRecipient?: null
    ): TypedEventFilter<[string], { feeRecipient: string }>;

    SetMaximumUnderlying(
      maxBalance?: null
    ): TypedEventFilter<[BigNumber], { maxBalance: BigNumber }>;

    SetPerformanceFee(
      performanceFee?: null
    ): TypedEventFilter<[BigNumber], { performanceFee: BigNumber }>;

    SetReserveRatio(
      reserveRatio?: null
    ): TypedEventFilter<[BigNumber], { reserveRatio: BigNumber }>;

    SetRewardsSeller(
      rewardsSeller?: null
    ): TypedEventFilter<[string], { rewardsSeller: string }>;

    Withdrawal(
      shares?: null,
      underlying?: null
    ): TypedEventFilter<
      [BigNumber, BigNumber],
      { shares: BigNumber; underlying: BigNumber }
    >;
  };

  estimateGas: {
    balance(overrides?: CallOverrides): Promise<BigNumber>;

    canChangeCompositionAfter(overrides?: CallOverrides): Promise<BigNumber>;

    currentDistribution(overrides?: CallOverrides): Promise<BigNumber>;

    decimals(overrides?: CallOverrides): Promise<BigNumber>;

    deposit(
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    depositTo(
      amount: BigNumberish,
      to: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    eoaSafeCaller(overrides?: CallOverrides): Promise<BigNumber>;

    feeRecipient(overrides?: CallOverrides): Promise<BigNumber>;

    getAPR(overrides?: CallOverrides): Promise<BigNumber>;

    getAdaptersAndWeights(overrides?: CallOverrides): Promise<BigNumber>;

    getBalances(overrides?: CallOverrides): Promise<BigNumber>;

    getCurrentLiquidityDeltas(overrides?: CallOverrides): Promise<BigNumber>;

    getPendingFees(overrides?: CallOverrides): Promise<BigNumber>;

    getPricePerFullShare(overrides?: CallOverrides): Promise<BigNumber>;

    getPricePerFullShareWithFee(overrides?: CallOverrides): Promise<BigNumber>;

    initialize(
      _underlying: string,
      _rewardsSeller: string,
      _feeRecipient: string,
      _owner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    lockedTokens(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

    maximumUnderlying(overrides?: CallOverrides): Promise<BigNumber>;

    minimumAPRImprovement(overrides?: CallOverrides): Promise<BigNumber>;

    minimumCompositionChangeDelay(
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    name(overrides?: CallOverrides): Promise<BigNumber>;

    performanceFee(overrides?: CallOverrides): Promise<BigNumber>;

    priceAtLastFee(overrides?: CallOverrides): Promise<BigNumber>;

    rebalance(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    rebalanceWithNewAdapters(
      proposedAdapters: string[],
      proposedWeights: BigNumberish[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    rebalanceWithNewWeights(
      proposedWeights: BigNumberish[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    registry(overrides?: CallOverrides): Promise<BigNumber>;

    reserveBalance(overrides?: CallOverrides): Promise<BigNumber>;

    reserveRatio(overrides?: CallOverrides): Promise<BigNumber>;

    rewardsSeller(overrides?: CallOverrides): Promise<BigNumber>;

    sellRewards(
      rewardsToken: string,
      params: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setFeeRecipient(
      _feeRecipient: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setMaximumUnderlying(
      _maximumUnderlying: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setPerformanceFee(
      _performanceFee: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setReserveRatio(
      _reserveRatio: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setRewardsSeller(
      _rewardsSeller: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    symbol(overrides?: CallOverrides): Promise<BigNumber>;

    underlying(overrides?: CallOverrides): Promise<BigNumber>;

    withdraw(
      shares: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    withdrawUnderlying(
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    balance(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    canChangeCompositionAfter(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    currentDistribution(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    decimals(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    deposit(
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    depositTo(
      amount: BigNumberish,
      to: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    eoaSafeCaller(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    feeRecipient(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getAPR(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getAdaptersAndWeights(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getBalances(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getCurrentLiquidityDeltas(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getPendingFees(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getPricePerFullShare(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getPricePerFullShareWithFee(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    initialize(
      _underlying: string,
      _rewardsSeller: string,
      _feeRecipient: string,
      _owner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    lockedTokens(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    maximumUnderlying(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    minimumAPRImprovement(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    minimumCompositionChangeDelay(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    name(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    performanceFee(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    priceAtLastFee(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    rebalance(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    rebalanceWithNewAdapters(
      proposedAdapters: string[],
      proposedWeights: BigNumberish[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    rebalanceWithNewWeights(
      proposedWeights: BigNumberish[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    registry(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    reserveBalance(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    reserveRatio(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    rewardsSeller(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    sellRewards(
      rewardsToken: string,
      params: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setFeeRecipient(
      _feeRecipient: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setMaximumUnderlying(
      _maximumUnderlying: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setPerformanceFee(
      _performanceFee: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setReserveRatio(
      _reserveRatio: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setRewardsSeller(
      _rewardsSeller: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    symbol(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    underlying(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    withdraw(
      shares: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    withdrawUnderlying(
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}
