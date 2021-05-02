import { AssetType, AssetTypeConfiguration } from "@/models/AssetType";
import { LanguageCode } from "@/models/LanguageCode";

export function translateAssetType(
  assetType: AssetType,
  language: LanguageCode
): string {
  return AssetTypeConfiguration[assetType].translation[language];
}
