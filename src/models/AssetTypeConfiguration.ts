import { AssetType } from "./AssetType";
import { FinancialProductConfiguration } from "./FinancialProductConfiguration";

export const AssetTypeConfiguration: Record<
  AssetType,
  FinancialProductConfiguration
> = {
  BankSavingsPlan: {
    translation: { de: "Banksparplan" },
  },
  Bond: {
    translation: { de: "Anleihe" },
  },
  BondFund: {
    translation: { de: "Rentenfonds" },
  },
  CheckingAccount: {
    translation: { de: "Girokonto" },
  },
  ConstructionLoan: {
    translation: { de: "Bausparvertrag" },
  },
  EndowmentPolicy: {
    translation: { de: "Kapitallebensversicherung" },
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
  MoneyMarketFund: {
    translation: { de: "Geldmarktfonds" },
  },
  OccupationalPensionScheme: {
    translation: { de: "Betriebliche Altersvorsorge" },
  },
  OtherAssets: {
    translation: { de: "Sonstige" },
  },
  RealEstateFund: {
    translation: { de: "Immobilienfonds" },
  },
  RiesterPension: {
    translation: { de: "Riester-Rente" },
  },
  RuerupPension: {
    translation: { de: "Rürup-Rente" },
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
  UnitLinkedPensionInsurance: {
    translation: { de: "Fondsgebundene Rentenversicherung" },
  },
};
