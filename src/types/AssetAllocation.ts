import { AssetClass } from "./AssetClass";

export type AssetAllocation = {
  assetClass: AssetClass;
  amount: number;
  percentage: number;
};
