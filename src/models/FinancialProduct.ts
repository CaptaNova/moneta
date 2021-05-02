import { AssetType } from "./AssetType";

export interface FinancialProduct {
  // "@context": "https://schema.org"
  // "@type": "FinancialProduct"

  amount: {
    // Betrag
    // "@type": "MonetaryAmount"
    currency: "EUR" | "USD";
    value: number;
  };

  //   interestRate: number; // Verzinsung

  //   offers: {
  //     // "@type": "Offer"
  //     validThrough: string; // Laufzeit
  //   };
  provider?: {
    // "@type": "Organization"
    name: string; // Finanzinstitut
  };
  serviceType: AssetType; // Girokonto, ...

  name: string; // Name
  identifier: string; // IBAN or ISIN or uuid; <iban|isin|uuid>:<1234567890>
}
