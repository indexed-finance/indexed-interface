import { RegisteredCall } from "helpers";
import { constants } from "ethers";
import { selectors } from "features";
import { useCallRegistrar } from "./use-call-registrar";
import { useMemo } from "react";
import { useNetworkAddresses } from "./contract-hooks";
import { useSelector } from "react-redux";
import type { AppState } from "features/store";

export const useTranslator = () => useSelector(selectors.selectTranslator);

export const useTokenBalances = (tokenIds: string[]) => {
  useBalancesRegistrar(tokenIds);

  return useSelector((state: AppState) =>
    selectors.selectTokenBalances(state, tokenIds)
  );
};

export const useApprovalStatus = (
  tokenId: string,
  spender: string,
  amount: string
) =>
  useSelector((state: AppState) =>
    selectors.selectApprovalStatus(state, spender, tokenId, amount)
  );

export const useTokenBalance = (tokenId: string) =>
  useSelector((state: AppState) =>
    selectors.selectTokenBalance(state, tokenId)
  );

export const useTokenAllowance = (tokenId: string, spender: string) =>
  useSelector((state: AppState) =>
    selectors.selectTokenAllowance(state, spender, tokenId)
  );

export const useUserAddress = () => useSelector(selectors.selectUserAddress);
export const useNdxBalance = () => useSelector(selectors.selectNdxBalance);

export const USER_CALLER = "User";

function buildBalanceCalls(
  userAddress: string,
  tokens: string[],
  ethBalanceGetter: string
): RegisteredCall[] {
  const interfaceKind = "IERC20";
  return tokens.map((tokenId) => ({
    interfaceKind,
    target: tokenId === constants.AddressZero ? ethBalanceGetter : tokenId,
    function: "balanceOf",
    args: [userAddress],
  }));
}

function buildAllowanceCalls(
  userAddress: string,
  spender: string,
  tokens: string[]
): RegisteredCall[] {
  const interfaceKind = "IERC20";
  return tokens
    .filter((t) => t !== constants.AddressZero)
    .map((tokenId) => ({
      interfaceKind,
      target: tokenId,
      function: "allowance",
      args: [userAddress, spender],
    }));
}

export function useBalanceAndApprovalRegistrar(
  spender: string,
  _tokens: string | string[]
) {
  const { ndx, ethBalanceGetter } = useNetworkAddresses();
  const userAddress = useUserAddress();
  const userDataCalls: RegisteredCall[] = useMemo(() => {
    const tokens = Array.isArray(_tokens) ? _tokens : [_tokens];
    return userAddress
      ? [
          ...buildBalanceCalls(userAddress, [...tokens, ndx], ethBalanceGetter),
          ...buildAllowanceCalls(userAddress, spender, tokens),
        ]
      : [];
  }, [userAddress, spender, _tokens, ethBalanceGetter, ndx]);

  useCallRegistrar({
    caller: USER_CALLER,
    onChainCalls: userDataCalls,
  });
}

export function useBalancesRegistrar(tokenIds: string[]) {
  const { ethBalanceGetter } = useNetworkAddresses();
  const userAddress = useUserAddress();
  const userDataCalls: RegisteredCall[] = useMemo(() => {
    return userAddress
      ? buildBalanceCalls(userAddress, tokenIds, ethBalanceGetter)
      : [];
  }, [userAddress, tokenIds, ethBalanceGetter]);

  useCallRegistrar({
    caller: USER_CALLER,
    onChainCalls: userDataCalls,
  });
}

export function useBalancesAndApprovalsRegistrar(
  spenders: string[],
  tokens: string[]
) {
  const { ethBalanceGetter } = useNetworkAddresses();
  const userAddress = useUserAddress();
  const userDataCalls: RegisteredCall[] = useMemo(() => {
    return userAddress
      ? [
          ...buildBalanceCalls(userAddress, tokens, ethBalanceGetter),
          ...tokens.reduce(
            (arr, token, i) => [
              ...arr,
              ...buildAllowanceCalls(userAddress, spenders[i], [token]),
            ],
            [] as RegisteredCall[]
          ),
        ]
      : [];
  }, [userAddress, spenders, tokens, ethBalanceGetter]);

  useCallRegistrar({
    caller: USER_CALLER,
    onChainCalls: userDataCalls,
  });
}
