import { abiLookup } from "ethereum/abi";
import type { AppThunk } from "features/store";
import type { InterfaceKind } from "ethereum/abi";

export type RegisteredCall = {
  interfaceKind?: InterfaceKind;
  target: string;
  function: string;
  args?: string[];
  canBeMerged?: boolean;
};

export type RegisteredCaller = {
  caller: string;
  onChainCalls: RegisteredCall[];
  offChainCalls: RegisteredCall[];
};

export type CallWithResult = Omit<RegisteredCall, "interface" | "args"> & {
  result?: string[];
  args?: string[];
};

export function serializeOnChainCall(call: RegisteredCall): string {
  return `${call.interfaceKind}/${call.target}/${call.function}/${(
    call.args ?? []
  ).join("_")}`;
}

export function deserializeOnChainCall(callId: string): null | RegisteredCall {
  try {
    const [interfaceKind, target, fn, args] = callId.split("/");
    const abi = abiLookup[interfaceKind as InterfaceKind];
    const common = {
      target,
      interface: abi,
      function: fn,
    };

    if (args) {
      return {
        ...common,
        args: args.split("_"),
      };
    } else {
      return common;
    }
  } catch (error) {
    console.error("Bad on-chain call ID", callId, error);
    return null;
  }
}

export function serializeOffChainCall(call: RegisteredCall): string {
  return `${call.function}/${(call.args ?? []).join("_")}${
    call.canBeMerged ? "/merge" : ""
  }`;
}

export function deserializeOffChainCall(
  callId: string,
  actions: Record<string, (...params: any[]) => AppThunk>
) {
  try {
    const [fn, args] = callId.split("/");
    const action = actions[fn];

    if (args) {
      const split = args.split("_");

      return action.bind(null, split[0], split[1]);
    } else {
      return action;
    }
  } catch (error) {
    console.error("Bad off-chain call ID", callId, error);
    return null;
  }
}
