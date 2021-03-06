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

interface SharesTimeLockInterface extends ethers.utils.Interface {
  functions: {
    "baseEarlyWithdrawalFee()": FunctionFragment;
    "delegate(address)": FunctionFragment;
    "deposit(uint256,uint32)": FunctionFragment;
    "depositToken()": FunctionFragment;
    "destroyLock(uint256)": FunctionFragment;
    "distributeFees()": FunctionFragment;
    "dividendsToken()": FunctionFragment;
    "emergencyUnlockTriggered()": FunctionFragment;
    "feeRecipient()": FunctionFragment;
    "getDividendsMultiplier(uint256)": FunctionFragment;
    "getLocksLength()": FunctionFragment;
    "getWithdrawalParameters(uint256,uint256,uint256)": FunctionFragment;
    "locks(uint256)": FunctionFragment;
    "maxDividendsBonusMultiplier()": FunctionFragment;
    "maxLockDuration()": FunctionFragment;
    "minEarlyWithdrawalFee()": FunctionFragment;
    "minLockDuration()": FunctionFragment;
    "minimumDeposit()": FunctionFragment;
    "moduleImplementation()": FunctionFragment;
    "owner()": FunctionFragment;
    "pendingFees()": FunctionFragment;
    "renounceOwnership()": FunctionFragment;
    "setFeeRecipient(address)": FunctionFragment;
    "setMinimumDeposit(uint96)": FunctionFragment;
    "subDelegationModuleForUser(address)": FunctionFragment;
    "transferOwnership(address)": FunctionFragment;
    "triggerEmergencyUnlock()": FunctionFragment;
    "withdraw(uint256,uint256)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "baseEarlyWithdrawalFee",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "delegate", values: [string]): string;
  encodeFunctionData(
    functionFragment: "deposit",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "depositToken",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "destroyLock",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "distributeFees",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "dividendsToken",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "emergencyUnlockTriggered",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "feeRecipient",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getDividendsMultiplier",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getLocksLength",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getWithdrawalParameters",
    values: [BigNumberish, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "locks", values: [BigNumberish]): string;
  encodeFunctionData(
    functionFragment: "maxDividendsBonusMultiplier",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "maxLockDuration",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "minEarlyWithdrawalFee",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "minLockDuration",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "minimumDeposit",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "moduleImplementation",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "pendingFees",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "renounceOwnership",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "setFeeRecipient",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "setMinimumDeposit",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "subDelegationModuleForUser",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "triggerEmergencyUnlock",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "withdraw",
    values: [BigNumberish, BigNumberish]
  ): string;

  decodeFunctionResult(
    functionFragment: "baseEarlyWithdrawalFee",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "delegate", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "deposit", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "depositToken",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "destroyLock",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "distributeFees",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "dividendsToken",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "emergencyUnlockTriggered",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "feeRecipient",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getDividendsMultiplier",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getLocksLength",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getWithdrawalParameters",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "locks", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "maxDividendsBonusMultiplier",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "maxLockDuration",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "minEarlyWithdrawalFee",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "minLockDuration",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "minimumDeposit",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "moduleImplementation",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "pendingFees",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "renounceOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setFeeRecipient",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setMinimumDeposit",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "subDelegationModuleForUser",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "triggerEmergencyUnlock",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "withdraw", data: BytesLike): Result;

  events: {
    "EmergencyUnlockTriggered()": EventFragment;
    "FeeRecipientSet(address)": EventFragment;
    "FeesReceived(uint256)": EventFragment;
    "FeesTransferred(uint256)": EventFragment;
    "LockCreated(uint256,address,uint256,uint256,uint32)": EventFragment;
    "LockDestroyed(uint256,address,uint256,uint256)": EventFragment;
    "MinimumDepositSet(uint256)": EventFragment;
    "OwnershipTransferred(address,address)": EventFragment;
    "PartialWithdrawal(uint256,address,uint256,uint256)": EventFragment;
    "SubDelegationModuleCreated(address,address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "EmergencyUnlockTriggered"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "FeeRecipientSet"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "FeesReceived"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "FeesTransferred"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "LockCreated"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "LockDestroyed"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "MinimumDepositSet"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "PartialWithdrawal"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "SubDelegationModuleCreated"): EventFragment;
}

export class SharesTimeLock extends BaseContract {
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

  interface: SharesTimeLockInterface;

  functions: {
    baseEarlyWithdrawalFee(overrides?: CallOverrides): Promise<[BigNumber]>;

    delegate(
      delegatee: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    deposit(
      amount: BigNumberish,
      duration: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    depositToken(overrides?: CallOverrides): Promise<[string]>;

    destroyLock(
      lockId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    distributeFees(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    dividendsToken(overrides?: CallOverrides): Promise<[string]>;

    emergencyUnlockTriggered(overrides?: CallOverrides): Promise<[boolean]>;

    feeRecipient(overrides?: CallOverrides): Promise<[string]>;

    getDividendsMultiplier(
      duration: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { multiplier: BigNumber }>;

    getLocksLength(overrides?: CallOverrides): Promise<[BigNumber]>;

    getWithdrawalParameters(
      amount: BigNumberish,
      lockedAt: BigNumberish,
      lockDuration: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber] & {
        dividendShares: BigNumber;
        earlyWithdrawalFee: BigNumber;
      }
    >;

    locks(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, number, number, string] & {
        amount: BigNumber;
        lockedAt: number;
        lockDuration: number;
        owner: string;
      }
    >;

    maxDividendsBonusMultiplier(
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    maxLockDuration(overrides?: CallOverrides): Promise<[number]>;

    minEarlyWithdrawalFee(overrides?: CallOverrides): Promise<[BigNumber]>;

    minLockDuration(overrides?: CallOverrides): Promise<[number]>;

    minimumDeposit(overrides?: CallOverrides): Promise<[BigNumber]>;

    moduleImplementation(overrides?: CallOverrides): Promise<[string]>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    pendingFees(overrides?: CallOverrides): Promise<[BigNumber]>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setFeeRecipient(
      feeRecipient_: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setMinimumDeposit(
      minimumDeposit_: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    subDelegationModuleForUser(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<[string]>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    triggerEmergencyUnlock(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    withdraw(
      lockId: BigNumberish,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  baseEarlyWithdrawalFee(overrides?: CallOverrides): Promise<BigNumber>;

  delegate(
    delegatee: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  deposit(
    amount: BigNumberish,
    duration: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  depositToken(overrides?: CallOverrides): Promise<string>;

  destroyLock(
    lockId: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  distributeFees(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  dividendsToken(overrides?: CallOverrides): Promise<string>;

  emergencyUnlockTriggered(overrides?: CallOverrides): Promise<boolean>;

  feeRecipient(overrides?: CallOverrides): Promise<string>;

  getDividendsMultiplier(
    duration: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  getLocksLength(overrides?: CallOverrides): Promise<BigNumber>;

  getWithdrawalParameters(
    amount: BigNumberish,
    lockedAt: BigNumberish,
    lockDuration: BigNumberish,
    overrides?: CallOverrides
  ): Promise<
    [BigNumber, BigNumber] & {
      dividendShares: BigNumber;
      earlyWithdrawalFee: BigNumber;
    }
  >;

  locks(
    arg0: BigNumberish,
    overrides?: CallOverrides
  ): Promise<
    [BigNumber, number, number, string] & {
      amount: BigNumber;
      lockedAt: number;
      lockDuration: number;
      owner: string;
    }
  >;

  maxDividendsBonusMultiplier(overrides?: CallOverrides): Promise<BigNumber>;

  maxLockDuration(overrides?: CallOverrides): Promise<number>;

  minEarlyWithdrawalFee(overrides?: CallOverrides): Promise<BigNumber>;

  minLockDuration(overrides?: CallOverrides): Promise<number>;

  minimumDeposit(overrides?: CallOverrides): Promise<BigNumber>;

  moduleImplementation(overrides?: CallOverrides): Promise<string>;

  owner(overrides?: CallOverrides): Promise<string>;

  pendingFees(overrides?: CallOverrides): Promise<BigNumber>;

  renounceOwnership(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setFeeRecipient(
    feeRecipient_: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setMinimumDeposit(
    minimumDeposit_: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  subDelegationModuleForUser(
    arg0: string,
    overrides?: CallOverrides
  ): Promise<string>;

  transferOwnership(
    newOwner: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  triggerEmergencyUnlock(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  withdraw(
    lockId: BigNumberish,
    amount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    baseEarlyWithdrawalFee(overrides?: CallOverrides): Promise<BigNumber>;

    delegate(delegatee: string, overrides?: CallOverrides): Promise<void>;

    deposit(
      amount: BigNumberish,
      duration: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    depositToken(overrides?: CallOverrides): Promise<string>;

    destroyLock(lockId: BigNumberish, overrides?: CallOverrides): Promise<void>;

    distributeFees(overrides?: CallOverrides): Promise<void>;

    dividendsToken(overrides?: CallOverrides): Promise<string>;

    emergencyUnlockTriggered(overrides?: CallOverrides): Promise<boolean>;

    feeRecipient(overrides?: CallOverrides): Promise<string>;

    getDividendsMultiplier(
      duration: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getLocksLength(overrides?: CallOverrides): Promise<BigNumber>;

    getWithdrawalParameters(
      amount: BigNumberish,
      lockedAt: BigNumberish,
      lockDuration: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber] & {
        dividendShares: BigNumber;
        earlyWithdrawalFee: BigNumber;
      }
    >;

    locks(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, number, number, string] & {
        amount: BigNumber;
        lockedAt: number;
        lockDuration: number;
        owner: string;
      }
    >;

    maxDividendsBonusMultiplier(overrides?: CallOverrides): Promise<BigNumber>;

    maxLockDuration(overrides?: CallOverrides): Promise<number>;

    minEarlyWithdrawalFee(overrides?: CallOverrides): Promise<BigNumber>;

    minLockDuration(overrides?: CallOverrides): Promise<number>;

    minimumDeposit(overrides?: CallOverrides): Promise<BigNumber>;

    moduleImplementation(overrides?: CallOverrides): Promise<string>;

    owner(overrides?: CallOverrides): Promise<string>;

    pendingFees(overrides?: CallOverrides): Promise<BigNumber>;

    renounceOwnership(overrides?: CallOverrides): Promise<void>;

    setFeeRecipient(
      feeRecipient_: string,
      overrides?: CallOverrides
    ): Promise<void>;

    setMinimumDeposit(
      minimumDeposit_: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    subDelegationModuleForUser(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<string>;

    transferOwnership(
      newOwner: string,
      overrides?: CallOverrides
    ): Promise<void>;

    triggerEmergencyUnlock(overrides?: CallOverrides): Promise<void>;

    withdraw(
      lockId: BigNumberish,
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    EmergencyUnlockTriggered(): TypedEventFilter<[], {}>;

    FeeRecipientSet(
      feeRecipient?: null
    ): TypedEventFilter<[string], { feeRecipient: string }>;

    FeesReceived(
      amount?: null
    ): TypedEventFilter<[BigNumber], { amount: BigNumber }>;

    FeesTransferred(
      amount?: null
    ): TypedEventFilter<[BigNumber], { amount: BigNumber }>;

    LockCreated(
      lockId?: BigNumberish | null,
      account?: string | null,
      amountLocked?: null,
      dividendShares?: null,
      duration?: null
    ): TypedEventFilter<
      [BigNumber, string, BigNumber, BigNumber, number],
      {
        lockId: BigNumber;
        account: string;
        amountLocked: BigNumber;
        dividendShares: BigNumber;
        duration: number;
      }
    >;

    LockDestroyed(
      lockId?: BigNumberish | null,
      account?: string | null,
      amount?: null,
      dividendShares?: null
    ): TypedEventFilter<
      [BigNumber, string, BigNumber, BigNumber],
      {
        lockId: BigNumber;
        account: string;
        amount: BigNumber;
        dividendShares: BigNumber;
      }
    >;

    MinimumDepositSet(
      minimumDeposit?: null
    ): TypedEventFilter<[BigNumber], { minimumDeposit: BigNumber }>;

    OwnershipTransferred(
      previousOwner?: string | null,
      newOwner?: string | null
    ): TypedEventFilter<
      [string, string],
      { previousOwner: string; newOwner: string }
    >;

    PartialWithdrawal(
      lockId?: BigNumberish | null,
      account?: string | null,
      amount?: null,
      dividendShares?: null
    ): TypedEventFilter<
      [BigNumber, string, BigNumber, BigNumber],
      {
        lockId: BigNumber;
        account: string;
        amount: BigNumber;
        dividendShares: BigNumber;
      }
    >;

    SubDelegationModuleCreated(
      account?: string | null,
      module?: null
    ): TypedEventFilter<[string, string], { account: string; module: string }>;
  };

  estimateGas: {
    baseEarlyWithdrawalFee(overrides?: CallOverrides): Promise<BigNumber>;

    delegate(
      delegatee: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    deposit(
      amount: BigNumberish,
      duration: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    depositToken(overrides?: CallOverrides): Promise<BigNumber>;

    destroyLock(
      lockId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    distributeFees(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    dividendsToken(overrides?: CallOverrides): Promise<BigNumber>;

    emergencyUnlockTriggered(overrides?: CallOverrides): Promise<BigNumber>;

    feeRecipient(overrides?: CallOverrides): Promise<BigNumber>;

    getDividendsMultiplier(
      duration: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getLocksLength(overrides?: CallOverrides): Promise<BigNumber>;

    getWithdrawalParameters(
      amount: BigNumberish,
      lockedAt: BigNumberish,
      lockDuration: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    locks(arg0: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;

    maxDividendsBonusMultiplier(overrides?: CallOverrides): Promise<BigNumber>;

    maxLockDuration(overrides?: CallOverrides): Promise<BigNumber>;

    minEarlyWithdrawalFee(overrides?: CallOverrides): Promise<BigNumber>;

    minLockDuration(overrides?: CallOverrides): Promise<BigNumber>;

    minimumDeposit(overrides?: CallOverrides): Promise<BigNumber>;

    moduleImplementation(overrides?: CallOverrides): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    pendingFees(overrides?: CallOverrides): Promise<BigNumber>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setFeeRecipient(
      feeRecipient_: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setMinimumDeposit(
      minimumDeposit_: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    subDelegationModuleForUser(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    triggerEmergencyUnlock(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    withdraw(
      lockId: BigNumberish,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    baseEarlyWithdrawalFee(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    delegate(
      delegatee: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    deposit(
      amount: BigNumberish,
      duration: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    depositToken(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    destroyLock(
      lockId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    distributeFees(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    dividendsToken(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    emergencyUnlockTriggered(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    feeRecipient(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getDividendsMultiplier(
      duration: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getLocksLength(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getWithdrawalParameters(
      amount: BigNumberish,
      lockedAt: BigNumberish,
      lockDuration: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    locks(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    maxDividendsBonusMultiplier(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    maxLockDuration(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    minEarlyWithdrawalFee(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    minLockDuration(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    minimumDeposit(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    moduleImplementation(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    pendingFees(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setFeeRecipient(
      feeRecipient_: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setMinimumDeposit(
      minimumDeposit_: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    subDelegationModuleForUser(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    triggerEmergencyUnlock(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    withdraw(
      lockId: BigNumberish,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}
