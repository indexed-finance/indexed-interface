import { AppState, TIMELOCKS_CALLER, selectors } from "features";
import {
  BigNumber,
  FormattedDividendsLock,
  convert,
  formatAmount,
  formatDividendsLock,
} from "helpers";
import { useAddTransactionCallback } from "./transaction-hooks";
import {
  useBalancesRegistrar,
  useTokenBalance,
  useUserAddress,
} from "./user-hooks";
import { useCallRegistrar } from "./use-call-registrar";
import { useCallback } from "react";
import { useNetworkAddresses } from "./contract-hooks";
import { useSelector } from "react-redux";
import { useTimelockContract } from "./contract-hooks";

export function useCreateTimelockCallback() {
  const contract = useTimelockContract();
  const addTransaction = useAddTransactionCallback();
  const createTimelock = useCallback(
    (ndxAmount: BigNumber, duration: BigNumber) => {
      if (!contract) throw new Error();

      const tx = contract.deposit(
        convert.toHex(ndxAmount),
        duration.toString()
      );

      addTransaction(tx);
    },
    [contract, addTransaction]
  );

  return createTimelock;
}

export function useTimelockWithdrawCallbacks(id: string) {
  const contract = useTimelockContract();
  const addTransaction = useAddTransactionCallback();
  const destroy = useCallback(() => {
    if (!contract) throw new Error();

    const tx = contract.destroyLock(id);

    addTransaction(tx);
  }, [contract, id, addTransaction]);
  const withdraw = useCallback(
    (ndxAmount: BigNumber) => {
      if (!contract) throw new Error();

      const tx = contract.withdraw(id, convert.toHex(ndxAmount));

      addTransaction(tx);
    },
    [contract, id, addTransaction]
  );
  return { destroy, withdraw };
}

export const useDndxBalance = () => {
  const { dndx } = useNetworkAddresses();
  const balance = useTokenBalance(dndx);
  return formatAmount(balance);
};

export function useUserTimelock(
  id: string
): FormattedDividendsLock | undefined {
  const userTimelock = useSelector((state: AppState) =>
    selectors.selectUserTimelock(state, id)
  );

  return userTimelock && formatDividendsLock(userTimelock);
}

export function useUserTimelocks() {
  const userTimelocks = useSelector(selectors.selectUserTimelocks);

  return userTimelocks;
}

export function useTimelocksRegistrar(timelockIds: string[]) {
  const { dndx, dndxTimelock } = useNetworkAddresses();
  const userAddress = useUserAddress();
  const caller = TIMELOCKS_CALLER;
  useBalancesRegistrar([dndx]);
  const onChainCalls = [
    ...timelockIds.map((id) => ({
      caller,
      target: dndxTimelock,
      interfaceKind: "SharesTimeLock" as any,
      function: "locks",
      args: [id],
    })),
    {
      caller,
      target: dndx,
      interfaceKind: "IERC20" as any,
      function: "balanceOf",
      args: [userAddress],
    },
    {
      caller,
      target: dndx,
      interfaceKind: "ERC20DividendsOwned" as any,
      function: "withdrawableDividendsOf",
      args: [userAddress],
    },
    {
      caller,
      target: dndx,
      interfaceKind: "ERC20DividendsOwned" as any,
      function: "withdrawnDividendsOf",
      args: [userAddress],
    },
  ];

  useCallRegistrar({ caller, onChainCalls, offChainCalls: [] });
}
