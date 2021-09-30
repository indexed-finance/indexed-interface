import { ContractTypeLookup, InterfaceKind, getContract } from "ethereum";
import { selectors, useSigner } from "features";
import { useSelector } from "react-redux";

// Networks
export const useNetworkAddresses = () => {
  return useSelector(selectors.selectNetworkAddresses);
};

export const useCommonBaseTokens = () => {
  return useSelector(selectors.selectCommonBaseTokens);
};

// Contracts
export function useContractWithSigner<T extends InterfaceKind>(
  address: string,
  name: T
): ContractTypeLookup[T] | undefined {
  const signer = useSigner();
  if (signer && address) {
    return getContract(address, name, signer);
  }
}

export function useAdapterRegistryContract() {
  const { adapterRegistry } = useNetworkAddresses();

  return useContractWithSigner(adapterRegistry, "AdapterRegistry");
}

export function useErc20AdapterContract(address: string) {
  return useContractWithSigner(address, "Erc20Adapter");
}

export function useDNDXContract() {
  const { dndx } = useNetworkAddresses();

  return useContractWithSigner(dndx, "ERC20DividendsOwned");
}

export function useTimelockContract() {
  const { dndxTimelock } = useNetworkAddresses();

  return useContractWithSigner(dndxTimelock.toLowerCase(), "SharesTimeLock");
}

export function useTokenContract(address: string) {
  return useContractWithSigner(address, "IERC20");
}

export function useIIndexedUniswapV2OracleContract(address: string) {
  return useContractWithSigner(address, "IIndexedUniswapV2Oracle");
}

export function useIndexedNarwhalRouterContract() {
  const { narwhalRouter } = useNetworkAddresses();

  return useContractWithSigner(narwhalRouter, "IndexedNarwhalRouter");
}

export function useBurnRouterContract() {
  const { burnRouter } = useNetworkAddresses();

  return useContractWithSigner(burnRouter, "IndexedUniswapRouterBurner");
}

export function useMintRouterContract() {
  const { mintRouter } = useNetworkAddresses();

  return useContractWithSigner(mintRouter, "IndexedUniswapRouterMinter");
}

export function useIndexPoolContract(address: string) {
  return useContractWithSigner(address, "IPool");
}

export function useIPoolInitializerContract(address: string) {
  return useContractWithSigner(address, "IPoolInitializer");
}

export function useMasterChefContract() {
  const { masterchef } = useNetworkAddresses();

  return useContractWithSigner(masterchef, "MasterChef");
}

export function useMultiCall2Contract() {
  const { multicall2 } = useNetworkAddresses();

  return useContractWithSigner(multicall2, "MultiCall2");
}

export function useMultiTokenStakingContract() {
  const { multiTokenStaking } = useNetworkAddresses();

  return useContractWithSigner(multiTokenStaking, "MultiTokenStaking");
}

export function useNirnVaultContract(address: string) {
  return useContractWithSigner(address, "NirnVault");
}

export function usePairContract(address: string) {
  return useContractWithSigner(address, "Pair");
}

export function useRewardsScheduleContract(address: string) {
  return useContractWithSigner(address, "RewardsSchedule");
}

export function useSharesTimeLockContract() {
  const { dndxTimelock } = useNetworkAddresses();

  return useContractWithSigner(dndxTimelock, "SharesTimeLock");
}

export function useStakingRewardsContract(address: string) {
  return useContractWithSigner(address, "StakingRewards");
}

export function useStakingRewardsFactoryContract(address: string) {
  return useContractWithSigner(address, "StakingRewardsFactory");
}

export function useUniswapRouterContract() {
  const { uniswapRouter } = useNetworkAddresses();

  return useContractWithSigner(uniswapRouter, "UniswapV2Router");
}
