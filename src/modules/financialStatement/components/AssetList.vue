<template>
  <template v-if="assets.length > 0">
    <AssetListItem
      v-for="asset in assetsByName"
      :key="asset.identifier"
      :asset="asset"
    />
  </template>
  <template v-else>
    <div class="container no-asset">Du hast noch keine Anlagen angelegt.</div>
  </template>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import { FinancialProduct } from "@/models/FinancialProduct";
import AssetListItem from "@/modules/financialStatement/components/AssetListItem.vue";

export default defineComponent({
  name: "AssetList",

  components: {
    AssetListItem,
  },

  props: {
    assets: {
      type: Array as PropType<FinancialProduct[]>,
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
.no-asset {
  padding-top: 6rem;
  padding-bottom: 6rem;
  text-align: center;
}
</style>
