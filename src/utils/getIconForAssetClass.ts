import { AssetClass, AssetTypeIcon } from "@/types";

export function getIconForAssetClass(assetClass: AssetClass): AssetTypeIcon {
  switch (assetClass) {
    case AssetClass.Alternative:
      return "Default";
    case AssetClass.Bond:
      return "Landmark";
    case AssetClass.Cash:
      return "Coins";
    case AssetClass.Commodity:
      return "Diamond";
    case AssetClass.Equity:
      return "LineChartUp";
    case AssetClass.Insurance:
      return "Umbrella";
    case AssetClass.RealEstate:
      return "Home";
  }
}
