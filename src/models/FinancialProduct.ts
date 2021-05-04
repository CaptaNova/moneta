import { AssetType } from "./AssetType";

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
    currency: "EUR" | "USD";
    value: number; // Betrag
  };

  //   interestRate: number; // Verzinsung
}
