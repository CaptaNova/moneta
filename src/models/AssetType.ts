interface FinancialProductConfiguration {
  translation: {
    de: string;
  };
}

interface IAssetTypeConfiguration {
  BankSavingsPlan: FinancialProductConfiguration;
  BondFund: FinancialProductConfiguration;
  CheckingAccount: FinancialProductConfiguration;
  IndexCertificate: FinancialProductConfiguration;
  MixedFund: FinancialProductConfiguration;
  MoneyMarketAccount: FinancialProductConfiguration;
  OtherAssets: FinancialProductConfiguration;
  RealEstateFund: FinancialProductConfiguration;
  SecuritiesAccount: FinancialProductConfiguration;
  Share: FinancialProductConfiguration;
  StockFund: FinancialProductConfiguration;
  SubordinatedDebt: FinancialProductConfiguration;
  TimeDeposit: FinancialProductConfiguration;
}

export const AssetTypeConfiguration: IAssetTypeConfiguration = {
  BankSavingsPlan: {
    translation: { de: "Banksparplan" },
  },
  BondFund: {
    translation: { de: "Rentenfonds" },
  },
  CheckingAccount: {
    translation: { de: "Girokonto" },
  },
  IndexCertificate: {
    translation: { de: "Indexzertifikat" },
  },
  MixedFund: {
    translation: { de: "Mischfonds" },
  },
  MoneyMarketAccount: {
    translation: { de: "Tagesgeldkonto" },
  },
  OtherAssets: {
    translation: { de: "Sonstige" },
  },
  RealEstateFund: {
    translation: { de: "Immobilienfonds" },
  },
  SecuritiesAccount: {
    translation: { de: "Wertpapierdepot" },
  },
  Share: {
    translation: { de: "Aktie" },
  },
  StockFund: {
    translation: { de: "Aktienfonds" },
  },
  SubordinatedDebt: {
    translation: { de: "Nachrangdarlehen" },
  },
  TimeDeposit: {
    translation: { de: "Festgeldkonto" },
  },
};

export type AssetType = keyof IAssetTypeConfiguration;
