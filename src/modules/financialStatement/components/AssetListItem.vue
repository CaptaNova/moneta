<template>
  <div class="asset container">
    <div class="row">
      <div class="column name">{{ asset.name }}</div>
      <div class="column provider">
        {{ asset.provider && asset.provider.name ? asset.provider.name : "--" }}
      </div>
      <div
        class="column amount"
        :class="{
          positive: asset.amount.value > 0,
          negative: asset.amount.value < 0,
        }"
      >
        {{ asset.amount.value.toFixed(2) }} {{ asset.amount.currency }}
      </div>
    </div>
    <div class="row">
      <div class="column serviceType">
        {{ translateAssetType(asset.serviceType, "de") }}
      </div>
      <div class="column identifier">
        {{ asset.identifier }}
      </div>
      <div class="column"></div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import { FinancialProduct } from "@/models/FinancialProduct";
import { translateAssetType } from "@/utils/translateAssetType";

export default defineComponent({
  name: "AssetListItem",

  methods: {
    translateAssetType,
  },

  props: {
    asset: {
      type: Object as PropType<FinancialProduct>,
      required: true,
    },
  },
});
</script>

<style lang="scss" scoped>
.asset {
  border-bottom: 0.1rem solid #e1e1e1;
  padding: 1.2rem 0;
}
.actions {
  margin-top: 3rem;
}
.amount {
  font-weight: 700;
  text-align: right;

  &.negative {
    color: firebrick;
  }
  &.positive {
    color: forestgreen;
  }
}
.name {
  font-weight: 700;
}
.serviceType {
  font-style: italic;
}
</style>
