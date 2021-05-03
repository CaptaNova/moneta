import { AssetType, AssetTypeConfiguration, LanguageCode } from "@/models";

export function translateAssetType(
  assetType: AssetType,
  language: LanguageCode
): string {
  return AssetTypeConfiguration[assetType].translation[language];
}
