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

interface SimpleFlopperInterface extends Interface {
  functions: {
    isEnabled: TypedFunctionDescription<{ encode([]: []): string }>;

    getTotalNumberOfAuctions: TypedFunctionDescription<{
      encode([]: []): string;
    }>;

    getFlopperAddress: TypedFunctionDescription<{ encode([]: []): string }>;

    getAuctionInformation: TypedFunctionDescription<{ encode([]: []): string }>;

    getCurrentBid: TypedFunctionDescription<{
      encode([auctionID]: [BigNumberish]): string;
    }>;
  };

  events: {};
}

export class SimpleFlopper extends Contract {
  connect(signerOrProvider: Signer | Provider | string): SimpleFlopper;
  attach(addressOrName: string): SimpleFlopper;
  deployed(): Promise<SimpleFlopper>;

  on(event: EventFilter | string, listener: Listener): SimpleFlopper;
  once(event: EventFilter | string, listener: Listener): SimpleFlopper;
  addListener(
    eventName: EventFilter | string,
    listener: Listener
  ): SimpleFlopper;
  removeAllListeners(eventName: EventFilter | string): SimpleFlopper;
  removeListener(eventName: any, listener: Listener): SimpleFlopper;

  interface: SimpleFlopperInterface;

  functions: {
    isEnabled(): Promise<boolean>;

    getTotalNumberOfAuctions(): Promise<BigNumber>;

    getFlopperAddress(): Promise<string>;

    getAuctionInformation(): Promise<{
      bidIncrement: BigNumber;
      repriceIncrement: BigNumber;
      bidDuration: BigNumber;
      auctionDuration: BigNumber;
      0: BigNumber;
      1: BigNumber;
      2: BigNumber;
      3: BigNumber;
    }>;

    getCurrentBid(
      auctionID: BigNumberish
    ): Promise<{
      amountDAI: BigNumber;
      amountMKR: BigNumber;
      bidder: string;
      bidDeadline: number;
      auctionDeadline: number;
      0: BigNumber;
      1: BigNumber;
      2: string;
      3: number;
      4: number;
    }>;
  };

  isEnabled(): Promise<boolean>;

  getTotalNumberOfAuctions(): Promise<BigNumber>;

  getFlopperAddress(): Promise<string>;

  getAuctionInformation(): Promise<{
    bidIncrement: BigNumber;
    repriceIncrement: BigNumber;
    bidDuration: BigNumber;
    auctionDuration: BigNumber;
    0: BigNumber;
    1: BigNumber;
    2: BigNumber;
    3: BigNumber;
  }>;

  getCurrentBid(
    auctionID: BigNumberish
  ): Promise<{
    amountDAI: BigNumber;
    amountMKR: BigNumber;
    bidder: string;
    bidDeadline: number;
    auctionDeadline: number;
    0: BigNumber;
    1: BigNumber;
    2: string;
    3: number;
    4: number;
  }>;

  filters: {};

  estimate: {
    isEnabled(): Promise<BigNumber>;

    getTotalNumberOfAuctions(): Promise<BigNumber>;

    getFlopperAddress(): Promise<BigNumber>;

    getAuctionInformation(): Promise<BigNumber>;

    getCurrentBid(auctionID: BigNumberish): Promise<BigNumber>;
  };
}
