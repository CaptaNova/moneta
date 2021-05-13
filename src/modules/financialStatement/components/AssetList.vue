<template>
  <AssetListSummary :assets="assets" :title="title" />
  <AssetListItem
    v-for="asset in assetsByName"
    :key="asset.identifier"
    :asset="asset"
  />
</template>

<script lang="ts">
import { FinancialProduct } from "@/models/FinancialProduct";
import AssetListItem from "@/modules/financialStatement/components/AssetListItem.vue";
import AssetListSummary from "@/modules/financialStatement/components/AssetListSummary.vue";
import { defineComponent, PropType } from "vue";

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
