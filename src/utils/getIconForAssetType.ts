import { AssetType } from "@/models";
import { AssetTypeConfiguration } from "@/types";

export function getIconForAssetType(assetType: AssetType): string {
  return AssetTypeConfiguration[assetType].icon;
}
