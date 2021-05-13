import { AssetClassDin77230 } from "./AssetClass";
import { AssetType } from "./AssetType";
import { FinancialProductConfiguration } from "./FinancialProductConfiguration";

export const AssetTypeConfiguration: Record<
  AssetType,
  FinancialProductConfiguration
> = {
  BankSavingsPlan: {
    assetClass: { din77230: AssetClassDin77230.Cash },
    translation: { de: "Banksparplan" },
  },
  Bond: {
    assetClass: { din77230: AssetClassDin77230.Other },
    translation: { de: "Anleihe" },
  },
  BondFund: {
    assetClass: { din77230: AssetClassDin77230.Capital },
    translation: { de: "Rentenfonds" },
  },
  CheckingAccount: {
    assetClass: { din77230: AssetClassDin77230.Cash },
    translation: { de: "Girokonto" },
  },
  ConstructionLoan: {
    assetClass: { din77230: AssetClassDin77230.Cash },
    translation: { de: "Bausparvertrag" },
  },
  EndowmentPolicy: {
    assetClass: { din77230: AssetClassDin77230.Capital },
    translation: { de: "Kapitallebensversicherung" },
  },
  IndexCertificate: {
    assetClass: { din77230: AssetClassDin77230.Capital },
    translation: { de: "Indexzertifikat" },
  },
  MixedFund: {
    assetClass: { din77230: AssetClassDin77230.Capital },
    translation: { de: "Mischfonds" },
  },
  MoneyMarketAccount: {
    assetClass: { din77230: AssetClassDin77230.Cash },
    translation: { de: "Tagesgeldkonto" },
  },
  MoneyMarketFund: {
    assetClass: { din77230: AssetClassDin77230.Capital },
    translation: { de: "Geldmarktfonds" },
  },
  OccupationalPensionScheme: {
    assetClass: { din77230: AssetClassDin77230.Capital },
    translation: { de: "Betriebliche Altersvorsorge" },
  },
  OtherAssets: {
    assetClass: { din77230: AssetClassDin77230.Other },
    translation: { de: "Sonstige" },
  },
  RealEstateFund: {
    assetClass: { din77230: AssetClassDin77230.Capital },
    translation: { de: "Immobilienfonds" },
  },
  RiesterPension: {
    assetClass: { din77230: AssetClassDin77230.Capital },
    translation: { de: "Riester-Rente" },
  },
  RuerupPension: {
    assetClass: { din77230: AssetClassDin77230.NonBalanceable },
    translation: { de: "Rürup-Rente" },
  },
  SecuritiesAccount: {
    assetClass: { din77230: AssetClassDin77230.Capital },
    translation: { de: "Wertpapierdepot" },
  },
  Share: {
    assetClass: { din77230: AssetClassDin77230.Capital },
    translation: { de: "Aktie" },
  },
  StockFund: {
    assetClass: { din77230: AssetClassDin77230.Capital },
    translation: { de: "Aktienfonds" },
  },
  SubordinatedDebt: {
    assetClass: { din77230: AssetClassDin77230.Other },
    translation: { de: "Nachrangdarlehen" },
  },
  TimeDeposit: {
    assetClass: { din77230: AssetClassDin77230.Cash },
    translation: { de: "Festgeldkonto" },
  },
  UnitLinkedPensionInsurance: {
    assetClass: { din77230: AssetClassDin77230.Capital },
    translation: { de: "Fondsgebundene Rentenversicherung" },
  },
};
