import { AssetType } from "@/models";
import { AssetClass, AssetClassDin77230 } from "./AssetClass";
import { FinancialProductConfiguration } from "./FinancialProductConfiguration";

export const AssetTypeConfiguration: Record<
  AssetType,
  FinancialProductConfiguration
> = {
  BankSavingsPlan: {
    assetClass: {
      default: AssetClass.Cash,
      din77230: AssetClassDin77230.Cash,
    },
    icon: "PiggiBank",
    translation: { de: "Banksparplan" },
  },
  Bond: {
    assetClass: {
      default: AssetClass.Bond,
      din77230: AssetClassDin77230.Capital,
    },
    icon: "Landmark",
    translation: { de: "Anleihe" },
  },
  BondFund: {
    assetClass: {
      default: AssetClass.Bond,
      din77230: AssetClassDin77230.Capital,
    },
    icon: "PieChart",
    translation: { de: "Rentenfonds" },
  },
  CheckingAccount: {
    assetClass: {
      default: AssetClass.Cash,
      din77230: AssetClassDin77230.Cash,
    },
    icon: "CreditCard",
    translation: { de: "Girokonto" },
  },
  ConstructionLoan: {
    assetClass: {
      default: AssetClass.Cash,
      din77230: AssetClassDin77230.Cash,
    },
    icon: "Home",
    translation: { de: "Bausparvertrag" },
  },
  Cryptocurrency: {
    assetClass: {
      default: AssetClass.Alternative,
      din77230: AssetClassDin77230.Other,
    },
    icon: "Bitcoin",
    translation: { de: "Kryptowährung" },
  },
  EndowmentPolicy: {
    assetClass: {
      default: AssetClass.Insurance,
      din77230: AssetClassDin77230.Capital,
    },
    icon: "Umbrella",
    translation: { de: "Kapitallebensversicherung" },
  },
  IndexCertificate: {
    assetClass: {
      default: AssetClass.Equity,
      din77230: AssetClassDin77230.Capital,
    },
    icon: "Award",
    translation: { de: "Indexzertifikat" },
  },
  MixedFund: {
    assetClass: {
      default: AssetClass.Equity,
      din77230: AssetClassDin77230.Capital,
    },
    icon: "PieChart",
    translation: { de: "Mischfonds" },
  },
  MoneyMarketAccount: {
    assetClass: {
      default: AssetClass.Cash,
      din77230: AssetClassDin77230.Cash,
    },
    icon: "Coins",
    translation: { de: "Tagesgeldkonto" },
  },
  MoneyMarketFund: {
    assetClass: {
      default: AssetClass.Cash,
      din77230: AssetClassDin77230.Capital,
    },
    icon: "PieChart",
    translation: { de: "Geldmarktfonds" },
  },
  OccupationalPensionScheme: {
    assetClass: {
      default: AssetClass.Insurance,
      din77230: AssetClassDin77230.Capital,
    },
    icon: "RockingChair",
    translation: { de: "Betriebliche Altersvorsorge" },
  },
  OtherAssets: {
    assetClass: {
      default: AssetClass.Alternative,
      din77230: AssetClassDin77230.Other,
    },
    icon: "Default",
    translation: { de: "Sonstige" },
  },
  PeerToPeerLending: {
    assetClass: {
      default: AssetClass.Alternative,
      din77230: AssetClassDin77230.Other,
    },
    icon: "Percent",
    translation: { de: "P2P-Kredit" },
  },
  PreciousMetal: {
    assetClass: {
      default: AssetClass.Commodity,
      din77230: AssetClassDin77230.Other,
    },
    icon: "Diamond",
    translation: { de: "Edelmetall" },
  },
  RealEstateFund: {
    assetClass: {
      default: AssetClass.RealEstate,
      din77230: AssetClassDin77230.Capital,
    },
    icon: "PieChart",
    translation: { de: "Immobilienfonds" },
  },
  RiesterPension: {
    assetClass: {
      default: AssetClass.Insurance,
      din77230: AssetClassDin77230.Capital,
    },
    icon: "RockingChair",
    translation: { de: "Riester-Rente" },
  },
  RuerupPension: {
    assetClass: {
      default: AssetClass.Insurance,
      din77230: AssetClassDin77230.NonBalanceable,
    },
    icon: "RockingChair",
    translation: { de: "Rürup-Rente" },
  },
  SecuritiesAccount: {
    assetClass: {
      default: AssetClass.Equity,
      din77230: AssetClassDin77230.Capital,
    },
    icon: "LineChartUp",
    translation: { de: "Wertpapierdepot" },
  },
  Share: {
    assetClass: {
      default: AssetClass.Equity,
      din77230: AssetClassDin77230.Capital,
    },
    icon: "LineChartUp",
    translation: { de: "Aktie" },
  },
  StockFund: {
    assetClass: {
      default: AssetClass.Equity,
      din77230: AssetClassDin77230.Capital,
    },
    icon: "PieChart",
    translation: { de: "Aktienfonds" },
  },
  SubordinatedDebt: {
    assetClass: {
      default: AssetClass.Alternative,
      din77230: AssetClassDin77230.Other,
    },
    icon: "Percent",
    translation: { de: "Nachrangdarlehen" },
  },
  TimeDeposit: {
    assetClass: {
      default: AssetClass.Cash,
      din77230: AssetClassDin77230.Cash,
    },
    icon: "Calendar",
    translation: { de: "Festgeldkonto" },
  },
  UnitLinkedPensionInsurance: {
    assetClass: {
      default: AssetClass.Insurance,
      din77230: AssetClassDin77230.Capital,
    },
    icon: "RockingChair",
    translation: { de: "Fondsgebundene Rentenversicherung" },
  },
};
