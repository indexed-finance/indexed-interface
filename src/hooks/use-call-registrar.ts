import { DataReceiverConfig, actions, selectors } from "features";
import { isEqual } from "lodash";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useMemo, useState } from "react";

export function useCallRegistrar(calls: DataReceiverConfig) {
  const dispatch = useDispatch();
  const [cachedCalls, setCachedCalls] = useState(calls);
  const isConnected = useSelector(selectors.selectConnected);
  const [haveRegistered, setHaveRegistered] = useState(false)

  // Effect:
  // Handle updates "gracefully" in a McJanky way.
  useEffect(() => {
    if (!isEqual(calls, cachedCalls)) {
      setCachedCalls(calls);
    }
  }, [calls, cachedCalls]);

  // Effect:
  // Register a multicall listener that queries certain functions every update.
  // Note: if the user is connected, defer all updates to the server.
  useEffect(() => {
    // console.log(`Running useEffect for cachedCalls`)
    if (!isConnected && cachedCalls) {
      const allCalls = {
        caller: cachedCalls.caller,
        onChainCalls: cachedCalls.onChainCalls ?? [],
        offChainCalls: cachedCalls.offChainCalls ?? [],
      };

      dispatch(actions.callsRegistered(allCalls));
      setHaveRegistered(true)

      return () => {
        dispatch(actions.callsUnregistered(allCalls));
      };
    }
  }, [dispatch, isConnected, cachedCalls]);

  const haveAnyCalls = useMemo(() => {
    return ((calls.onChainCalls || []).length > 0 || (calls.onChainCalls || []).length > 0) || false;
  }, [calls])

  // Effect:
  // To get data to the user as quickly as possible,
  // we can trigger a changeBlockNumber thunk with the current block number.
  // As the batch is being selected, it will ignore any calls for which it already has data.
  useEffect(() => {
    if (
      !isConnected && haveAnyCalls && haveRegistered
    ) {
      dispatch(actions.sendBatch());
    }
  }, [dispatch, isConnected, haveAnyCalls, haveRegistered]);
}
