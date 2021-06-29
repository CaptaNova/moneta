import { AssetClass, AssetClassDin77230 } from "./AssetClass";
import { AssetTypeIcon } from "./AssetTypeIcon";

export interface FinancialProductConfiguration {
  assetClass: {
    default: AssetClass;
    din77230: AssetClassDin77230;
  };
  icon: AssetTypeIcon;
  translation: {
    de: string;
  };
}
