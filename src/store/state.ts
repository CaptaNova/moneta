import { FinancialProduct } from "@/models";

export type IRootState = {
  accounts: FinancialProduct[];
  dirty: boolean;
};
