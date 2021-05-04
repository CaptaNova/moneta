import { Document, DocumentMeta, FinancialProduct } from "@/models";

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
    description: asset.description,
    identifier: asset.identifier,
    loanRepaymentForm: asset.loanRepaymentForm
      ? {
          "@type": "RepaymentSpecification",
          loanPaymentAmount: {
            currency: asset.loanRepaymentForm.loanPaymentAmount.currency,
            value: asset.loanRepaymentForm.loanPaymentAmount.value.toString(10),
          },
          loanPaymentFrequency: asset.loanRepaymentForm.loanPaymentFrequency,
        }
      : undefined,
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
