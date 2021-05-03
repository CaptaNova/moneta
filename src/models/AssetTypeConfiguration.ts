import { AssetType } from "./AssetType";
import { FinancialProductConfiguration } from "./FinancialProductConfiguration";

export const AssetTypeConfiguration: Record<
  AssetType,
  FinancialProductConfiguration
> = {
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
