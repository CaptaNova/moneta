<template>
  <Award v-if="icon === 'Award'" :color="color" :size="size" />
  <Bitcoin v-else-if="icon === 'Bitcoin'" :color="color" :size="size" />
  <Calendar v-else-if="icon === 'Calendar'" :color="color" :size="size" />
  <Coins v-else-if="icon === 'Coins'" :color="color" :size="size" />
  <CreditCard v-else-if="icon === 'CreditCard'" :color="color" :size="size" />
  <!-- Diamond instead of Crown -->
  <Crown v-else-if="icon === 'Diamond'" :color="color" :size="size" />
  <!-- Landmark -->
  <Home v-else-if="icon === 'Home'" :color="color" :size="size" />
  <TrendingUp v-else-if="icon === 'LineChartUp'" :color="color" :size="size" />
  <Percent v-else-if="icon === 'Percent'" :color="color" :size="size" />
  <PieChart v-else-if="icon === 'PieChart'" :color="color" :size="size" />
  <!-- PiggiBank -->
  <!-- RockingChair instead of Coffee -->
  <Coffee v-else-if="icon === 'RockingChair'" :color="color" :size="size" />
  <Umbrella v-else-if="icon === 'Umbrella'" :color="color" :size="size" />
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
    icon: {
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
