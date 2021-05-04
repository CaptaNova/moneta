import { AssetType } from "./AssetType";
import { Currency } from "./Currency";

// see https://schema.org/Thing
interface Thing {
  description?: string;
  identifier: string; // IBAN or ISIN or uuid; <iban|isin|uuid>:<1234567890>
  name: string; // Name
}

// see https://schema.org/Service
interface Service extends Thing {
  //   offers: {
  //     // "@type": "Offer"
  //     validThrough: string; // Laufzeit
  //   };
  provider?: {
    name: string; // Finanzinstitut
  };
  serviceType: AssetType; // Girokonto, ...
}

// see https://schema.org/FinancialProduct
export interface FinancialProduct extends Service {
  amount: {
    currency: Currency;
    value: number; // Betrag
  };

  //   interestRate: number; // Verzinsung

  // borrowed from https://schema.org/LoanOrCredit
  loanRepaymentForm?: {
    loanPaymentAmount: {
      currency: Currency;
      value: number; // Betrag
    };
    loanPaymentFrequency: number;
  };
}
