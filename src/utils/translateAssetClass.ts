import { AssetClass } from "@/types";

export function translateAssetClass(assetClass: AssetClass): string {
  switch (assetClass) {
    case AssetClass.Alternative:
      return "Alternative";
    case AssetClass.Bond:
      return "Anleihen";
    case AssetClass.Cash:
      return "Liquidität";
    case AssetClass.Commodity:
      return "Rohstoffe";
    case AssetClass.Equity:
      return "Wertpapiere";
    case AssetClass.Insurance:
      return "Versicherungen";
    case AssetClass.RealEstate:
      return "Immobilien";
  }
}
