/* Generated by ts-generator ver. 0.0.8 */
/* tslint:disable */

import { Contract, ContractTransaction, EventFilter, Signer } from "ethers";
import { Listener, Provider } from "ethers/providers";
import { Arrayish, BigNumber, BigNumberish, Interface } from "ethers/utils";
import {
  TransactionOverrides,
  TypedEventDescription,
  TypedFunctionDescription
} from ".";

interface IDaiBackstopSyndicateInterface extends Interface {
  functions: {
    enlist: TypedFunctionDescription<{
      encode([daiAmount]: [BigNumberish]): string;
    }>;

    defect: TypedFunctionDescription<{
      encode([backstopTokenAmount]: [BigNumberish]): string;
    }>;

    enterAuction: TypedFunctionDescription<{
      encode([auctionId]: [BigNumberish]): string;
    }>;

    finalizeAuction: TypedFunctionDescription<{
      encode([auctionId]: [BigNumberish]): string;
    }>;

    getStatus: TypedFunctionDescription<{ encode([]: []): string }>;

    getActiveAuctions: TypedFunctionDescription<{ encode([]: []): string }>;
  };

  events: {
    AuctionEntered: TypedEventDescription<{
      encodeTopics([auctionId, bidder]: [null, null]): string[];
    }>;

    AuctionFinalized: TypedEventDescription<{
      encodeTopics([auctionId, bidder]: [null, null]): string[];
    }>;
  };
}

export class IDaiBackstopSyndicate extends Contract {
  connect(signerOrProvider: Signer | Provider | string): IDaiBackstopSyndicate;
  attach(addressOrName: string): IDaiBackstopSyndicate;
  deployed(): Promise<IDaiBackstopSyndicate>;

  on(event: EventFilter | string, listener: Listener): IDaiBackstopSyndicate;
  once(event: EventFilter | string, listener: Listener): IDaiBackstopSyndicate;
  addListener(
    eventName: EventFilter | string,
    listener: Listener
  ): IDaiBackstopSyndicate;
  removeAllListeners(eventName: EventFilter | string): IDaiBackstopSyndicate;
  removeListener(eventName: any, listener: Listener): IDaiBackstopSyndicate;

  interface: IDaiBackstopSyndicateInterface;

  functions: {
    enlist(
      daiAmount: BigNumberish,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    defect(
      backstopTokenAmount: BigNumberish,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    enterAuction(
      auctionId: BigNumberish,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    finalizeAuction(
      auctionId: BigNumberish,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    getStatus(): Promise<number>;

    getActiveAuctions(): Promise<BigNumber[]>;
  };

  enlist(
    daiAmount: BigNumberish,
    overrides?: TransactionOverrides
  ): Promise<ContractTransaction>;

  defect(
    backstopTokenAmount: BigNumberish,
    overrides?: TransactionOverrides
  ): Promise<ContractTransaction>;

  enterAuction(
    auctionId: BigNumberish,
    overrides?: TransactionOverrides
  ): Promise<ContractTransaction>;

  finalizeAuction(
    auctionId: BigNumberish,
    overrides?: TransactionOverrides
  ): Promise<ContractTransaction>;

  getStatus(): Promise<number>;

  getActiveAuctions(): Promise<BigNumber[]>;

  filters: {
    AuctionEntered(auctionId: null, bidder: null): EventFilter;

    AuctionFinalized(auctionId: null, bidder: null): EventFilter;
  };

  estimate: {
    enlist(daiAmount: BigNumberish): Promise<BigNumber>;

    defect(backstopTokenAmount: BigNumberish): Promise<BigNumber>;

    enterAuction(auctionId: BigNumberish): Promise<BigNumber>;

    finalizeAuction(auctionId: BigNumberish): Promise<BigNumber>;

    getStatus(): Promise<BigNumber>;

    getActiveAuctions(): Promise<BigNumber>;
  };
}
