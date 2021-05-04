import { Document, FinancialProduct } from "@/models";

export function parseAssets(document: Document): FinancialProduct[] {
  if (document.meta.version === "1.0") {
    return parseAssetsV1(
      (document.data.assets as unknown) as Partial<FinancialProduct>[]
    );
  }
  return [];
}

function parseAssetsV1(data: Partial<FinancialProduct>[]): FinancialProduct[] {
  return data.map((item) => ({
    amount: {
      currency: item.amount?.currency || "EUR",
      value: Number.parseFloat(
        ((item.amount?.value as unknown) as string) ?? "0"
      ),
    },
    description: item.description,
    identifier: item.identifier ?? `error:${Date.now()}`,
    name: item.name ?? "UNNAMED ASSET",
    provider: item.provider
      ? {
          name: item.provider.name,
        }
      : undefined,
    serviceType: item.serviceType ?? "OtherAssets",
  }));
}
