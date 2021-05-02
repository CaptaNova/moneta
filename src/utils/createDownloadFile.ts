import { Document, DocumentMeta } from "@/models/Document";
import { FinancialProduct } from "@/models/FinancialProduct";

export function createDownloadFile(assets: FinancialProduct[]): string {
  const meta: DocumentMeta = { version: "1.0" };

  const document: Document = {
    meta,
    data: {
      assets: assets.map(mapToSchema),
    },
  };

  return JSON.stringify(document, null, 2);
}

function mapToSchema(asset: FinancialProduct): unknown {
  return {
    "@context": "https://schema.org",
    "@type": "FinancialProduct",
    amount: {
      "@type": "MonetaryAmount",
      currency: asset.amount.currency,
      value: asset.amount.value.toString(10),
    },
    identifier: asset.identifier,
    name: asset.name,
    provider: asset.provider
      ? {
          "@type": "Organization",
          name: asset.provider.name,
        }
      : undefined,
    serviceType: asset.serviceType,
  };
}
