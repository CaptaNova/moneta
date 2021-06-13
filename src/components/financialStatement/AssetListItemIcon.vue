<template>
  <!-- <Coins v-if="assetType === 'BankSavingsPlan'" :color="color" :size="size" /> -->
  <!-- <Coins v-else-if="assetType === 'Bond'" :color="color" :size="size" /> -->
  <PieChart v-if="assetType === 'BondFund'" :color="color" :size="size" />
  <CreditCard
    v-else-if="assetType === 'CheckingAccount'"
    :color="color"
    :size="size"
  />
  <Home
    v-else-if="assetType === 'ConstructionLoan'"
    :color="color"
    :size="size"
  />
  <Bitcoin
    v-else-if="assetType === 'Cryptocurrency'"
    :color="color"
    :size="size"
  />
  <Umbrella
    v-else-if="assetType === 'EndowmentPolicy'"
    :color="color"
    :size="size"
  />
  <Award
    v-else-if="assetType === 'IndexCertificate'"
    :color="color"
    :size="size"
  />
  <PieChart v-else-if="assetType === 'MixedFund'" :color="color" :size="size" />
  <Coins
    v-else-if="assetType === 'MoneyMarketAccount'"
    :color="color"
    :size="size"
  />
  <PieChart
    v-else-if="assetType === 'MoneyMarketFund'"
    :color="color"
    :size="size"
  />
  <Coffee
    v-else-if="assetType === 'OccupationalPensionScheme'"
    :color="color"
    :size="size"
  />
  <Percent
    v-else-if="assetType === 'PeerToPeerLending'"
    :color="color"
    :size="size"
  />
  <Crown
    v-else-if="assetType === 'PreciousMetal'"
    :color="color"
    :size="size"
  />
  <PieChart
    v-else-if="assetType === 'RealEstateFund'"
    :color="color"
    :size="size"
  />
  <Coffee
    v-else-if="assetType === 'RiesterPension'"
    :color="color"
    :size="size"
  />
  <Coffee
    v-else-if="assetType === 'RuerupPension'"
    :color="color"
    :size="size"
  />
  <TrendingUp
    v-else-if="assetType === 'SecuritiesAccount'"
    :color="color"
    :size="size"
  />
  <TrendingUp v-else-if="assetType === 'Share'" :color="color" :size="size" />
  <PieChart v-else-if="assetType === 'StockFund'" :color="color" :size="size" />
  <Percent
    v-else-if="assetType === 'SubordinatedDebt'"
    :color="color"
    :size="size"
  />
  <Calendar
    v-else-if="assetType === 'TimeDeposit'"
    :color="color"
    :size="size"
  />
  <Coffee
    v-else-if="assetType === 'UnitLinkedPensionInsurance'"
    :color="color"
    :size="size"
  />
  <Euro v-else :color="color" :size="size" />
</template>

<script lang="ts">
import {
  Award,
  Bitcoin,
  Calendar,
  Coffee,
  Coins,
  CreditCard,
  Crown,
  Euro,
  Home,
  Percent,
  PieChart,
  TrendingUp,
  Umbrella,
} from "lucide-vue-next";
import { defineComponent } from "vue";

export default defineComponent({
  name: "AssetListItemIcon",

  components: {
    Award,
    Bitcoin,
    Calendar,
    Coffee,
    Coins,
    CreditCard,
    Crown,
    Euro,
    Home,
    Percent,
    PieChart,
    TrendingUp,
    Umbrella,
  },

  props: {
    assetType: {
      type: String,
      required: true,
    },
  },

  data() {
    return {
      color: "#9b4dca",
      size: 16,
    };
  },
});
</script>
