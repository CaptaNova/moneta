<template>
  <div class="container">
    <div class="row">
      <div class="column title">{{ title }}</div>
      <div
        class="column column-offset-50 total"
        :class="{
          positive: total >= 0,
          negative: total < 0,
        }"
      >
        {{ total.toFixed(2) }} EUR
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { FinancialProduct } from "@/models/FinancialProduct";
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
  },
});
</script>

<style lang="scss" scoped>
.container {
  border-top: 0.1rem solid #9b4dca;
  max-width: 120rem;
  padding: 1.2rem 4rem 1.2rem 0;
}
.title {
  font-weight: 700;
}
.total {
  font-weight: 700;
  text-align: right;

  &.negative {
    color: firebrick;
  }
  &.positive {
    color: forestgreen;
  }
}
</style>
