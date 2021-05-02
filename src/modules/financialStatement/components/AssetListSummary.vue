<template>
  <div class="container">
    <div class="row">
      <div class="column title">{{ title }}</div>
      <div class="column column-offset-50 total">
        {{ total.toFixed(2) }} EUR
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import { FinancialProduct } from "@/models/FinancialProduct";

export default defineComponent({
  name: "AssetListSummary",

  computed: {
    total(): number {
      const reducer = (accumulator: number, currentValue: FinancialProduct) =>
        accumulator + currentValue.amount.value;

      return this.assets.reduce(reducer, 0);
    },
  },

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
});
</script>

<style lang="scss" scoped>
.container {
  padding: 1.2rem 0;
}
.title {
  font-weight: 700;
}
.total {
  font-weight: 700;
  text-align: right;
}
</style>
