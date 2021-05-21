import { AssetType } from "@/models";
import { AssetTypeConfiguration, LanguageCode } from "@/types";

export function translateAssetType(
  assetType: AssetType,
  language: LanguageCode
): string {
  return AssetTypeConfiguration[assetType].translation[language];
}
