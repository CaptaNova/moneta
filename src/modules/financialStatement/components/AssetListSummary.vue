<template>
  <div class="summary">
    <span class="title">{{ title }}</span>
    <span class="amount">{{ totalFormatted }} EUR</span>
  </div>
</template>

<script lang="ts">
import { FinancialProduct } from "@/models";
import { defineComponent, PropType } from "vue";

export default defineComponent({
  name: "AssetListSummary",

  props: {
    assets: {
      type: Array as PropType<FinancialProduct[]>,
      required: true,
    },

    title: {
      type: String,
      required: true,
    },
  },

  computed: {
    total(): number {
      const reducer = (accumulator: number, currentValue: FinancialProduct) =>
        accumulator + currentValue.amount.value;

      return this.assets.reduce(reducer, 0);
    },

    totalFormatted(): string {
      return Number(this.total).toLocaleString("de", {
        maximumFractionDigits: 0,
      });
    },
  },
});
</script>

<style lang="scss" scoped>
.summary {
  padding-bottom: 1rem;
}

.title {
  font-weight: var(--font-weight-bold);
}
</style>
