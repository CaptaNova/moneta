import { FinancialProduct } from "@/models";

export function getAssetId(asset: FinancialProduct): string {
  return asset.identifier.replaceAll(" ", "").toLowerCase();
}
