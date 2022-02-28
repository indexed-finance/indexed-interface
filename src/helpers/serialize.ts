import { debugConsole } from "helpers/logger";
import { interfaceLookup } from "ethereum/abi";
import type { InterfaceKind } from "ethereum/abi";

export type CallRegistration = {
  caller: string;
  onChainCalls: RegisteredCall[];
  offChainCalls: RegisteredCall[];
  chainId: number;
};

export type RegisteredCall = {
  chainId?: number;
  interfaceKind?: InterfaceKind;
  target: string;
  function: string;
  args?: string[];
  canBeMerged?: boolean;
};

export type RegisteredCaller = {
  caller: string;
  chainId: number;
  onChainCalls: RegisteredCall[];
  offChainCalls: RegisteredCall[];
};

export type CallWithResult = Omit<RegisteredCall, "interface" | "args"> & {
  result?: string[];
  args?: string[];
};

export function serializeOnChainCall(call: RegisteredCall): string {
  return `${call.chainId}/${call.interfaceKind}/${call.target}/${call.function}/${(
    call.args ?? []
  ).join("_")}`;
}

export function deserializeOnChainCall(callId: string): null | RegisteredCall {
  try {
    const [chainId, interfaceKind, target, fn, args] = callId.split("/");
    const abi = interfaceLookup[interfaceKind as InterfaceKind];
    if (!abi) {
      return null;
    }
    const common = {
      target,
      interface: abi,
      function: fn,
      chainId: +chainId
    };

    if (args) {
      return {
        ...common,
        args: args.split("_"),
      };
    } else {
      return common;
    }
  } catch (error: any) {
    debugConsole.error("Bad on-chain call ID", callId, error);
    return null;
  }
}

export function serializeOffChainCall(call: RegisteredCall): string {
  return `${call.chainId}/${call.function}/${(call.args ?? []).join("_")}${
    call.canBeMerged ? "/merge" : ""
  }`;
}
