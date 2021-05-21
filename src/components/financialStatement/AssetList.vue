<template>
  <section>
    <AssetListSummary :assets="assets" :title="title" />
    <AssetListItem
      v-for="asset in assetsByName"
      :key="asset.identifier"
      :asset="asset"
    />
  </section>
</template>

<script lang="ts">
import { FinancialProduct } from "@/models";
import { defineComponent, PropType } from "vue";
import AssetListItem from "./AssetListItem.vue";
import AssetListSummary from "./AssetListSummary.vue";

export default defineComponent({
  name: "AssetList",

  components: {
    AssetListItem,
    AssetListSummary,
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

  computed: {
    assetsByName(): FinancialProduct[] {
      return this.assets
        .map((asset) => ({ ...asset }))
        .sort((a, b) =>
          a.name.toLowerCase().localeCompare(b.name.toLowerCase())
        );
    },
  },
});
</script>

<style lang="scss" scoped>
section {
  border-top: 0.1rem solid var(--color-primary);
  margin-top: var(--padding-y);
  padding: var(--padding-y) var(--padding-x);
  text-align: left;
}

.summary {
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  .title {
    color: var(--color-primary);
    font-weight: var(--font-weight-bold);
  }
}
</style>
