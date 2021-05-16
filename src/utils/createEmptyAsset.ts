import { AssetType, FinancialProduct } from "@/models";

export function createEmptyAsset(): FinancialProduct {
  return {
    amount: {
      currency: "EUR",
      value: undefined as unknown as number,
    },
    description: undefined,
    identifier: "",
    loanRepaymentForm: undefined,
    name: "",
    provider: undefined,
    serviceType: "" as unknown as AssetType,
  };
}
