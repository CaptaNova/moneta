import { AssetType } from "@/models";
import { AssetClassDin77230 } from "./AssetClass";
import { FinancialProductConfiguration } from "./FinancialProductConfiguration";

export const AssetTypeConfiguration: Record<
  AssetType,
  FinancialProductConfiguration
> = {
  BankSavingsPlan: {
    assetClass: { din77230: AssetClassDin77230.Cash },
    icon: "PiggiBank",
    translation: { de: "Banksparplan" },
  },
  Bond: {
    assetClass: { din77230: AssetClassDin77230.Capital },
    icon: "Landmark",
    translation: { de: "Anleihe" },
  },
  BondFund: {
    assetClass: { din77230: AssetClassDin77230.Capital },
    icon: "PieChart",
    translation: { de: "Rentenfonds" },
  },
  CheckingAccount: {
    assetClass: { din77230: AssetClassDin77230.Cash },
    icon: "CreditCard",
    translation: { de: "Girokonto" },
  },
  ConstructionLoan: {
    assetClass: { din77230: AssetClassDin77230.Cash },
    icon: "Home",
    translation: { de: "Bausparvertrag" },
  },
  Cryptocurrency: {
    assetClass: { din77230: AssetClassDin77230.Other },
    icon: "Bitcoin",
    translation: { de: "Kryptowährung" },
  },
  EndowmentPolicy: {
    assetClass: { din77230: AssetClassDin77230.Capital },
    icon: "Umbrella",
    translation: { de: "Kapitallebensversicherung" },
  },
  IndexCertificate: {
    assetClass: { din77230: AssetClassDin77230.Capital },
    icon: "Award",
    translation: { de: "Indexzertifikat" },
  },
  MixedFund: {
    assetClass: { din77230: AssetClassDin77230.Capital },
    icon: "PieChart",
    translation: { de: "Mischfonds" },
  },
  MoneyMarketAccount: {
    assetClass: { din77230: AssetClassDin77230.Cash },
    icon: "Coins",
    translation: { de: "Tagesgeldkonto" },
  },
  MoneyMarketFund: {
    assetClass: { din77230: AssetClassDin77230.Capital },
    icon: "PieChart",
    translation: { de: "Geldmarktfonds" },
  },
  OccupationalPensionScheme: {
    assetClass: { din77230: AssetClassDin77230.Capital },
    icon: "RockingChair",
    translation: { de: "Betriebliche Altersvorsorge" },
  },
  OtherAssets: {
    assetClass: { din77230: AssetClassDin77230.Other },
    icon: "Default",
    translation: { de: "Sonstige" },
  },
  PeerToPeerLending: {
    assetClass: { din77230: AssetClassDin77230.Other },
    icon: "Percent",
    translation: { de: "P2P-Kredit" },
  },
  PreciousMetal: {
    assetClass: { din77230: AssetClassDin77230.Other },
    icon: "Diamond",
    translation: { de: "Edelmetall" },
  },
  RealEstateFund: {
    assetClass: { din77230: AssetClassDin77230.Capital },
    icon: "PieChart",
    translation: { de: "Immobilienfonds" },
  },
  RiesterPension: {
    assetClass: { din77230: AssetClassDin77230.Capital },
    icon: "RockingChair",
    translation: { de: "Riester-Rente" },
  },
  RuerupPension: {
    assetClass: { din77230: AssetClassDin77230.NonBalanceable },
    icon: "RockingChair",
    translation: { de: "Rürup-Rente" },
  },
  SecuritiesAccount: {
    assetClass: { din77230: AssetClassDin77230.Capital },
    icon: "LineChartUp",
    translation: { de: "Wertpapierdepot" },
  },
  Share: {
    assetClass: { din77230: AssetClassDin77230.Capital },
    icon: "LineChartUp",
    translation: { de: "Aktie" },
  },
  StockFund: {
    assetClass: { din77230: AssetClassDin77230.Capital },
    icon: "PieChart",
    translation: { de: "Aktienfonds" },
  },
  SubordinatedDebt: {
    assetClass: { din77230: AssetClassDin77230.Other },
    icon: "Percent",
    translation: { de: "Nachrangdarlehen" },
  },
  TimeDeposit: {
    assetClass: { din77230: AssetClassDin77230.Cash },
    icon: "Calendar",
    translation: { de: "Festgeldkonto" },
  },
  UnitLinkedPensionInsurance: {
    assetClass: { din77230: AssetClassDin77230.Capital },
    icon: "RockingChair",
    translation: { de: "Fondsgebundene Rentenversicherung" },
  },
};
