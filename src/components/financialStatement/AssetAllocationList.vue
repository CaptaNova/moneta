<template>
  <ul>
    <li v-for="item in sortedAllocation" :key="item.assetClass">
      <AssetAllocationListItem
        :assetClass="item.assetClass"
        :amount="item.amount"
        :percentage="item.percentage"
      />
    </li>
  </ul>
</template>

<script lang="ts">
import { AssetAllocation } from "@/types";
import { defineComponent, PropType } from "vue";
import AssetAllocationListItem from "./AssetAllocationListItem.vue";

export default defineComponent({
  name: "AssetAllocationList",

  components: {
    AssetAllocationListItem,
  },

  props: {
    assetAllocation: {
      type: Array as PropType<AssetAllocation[]>,
      required: true,
    },
  },

  computed: {
    sortedAllocation(): AssetAllocation[] {
      return [...this.assetAllocation].sort((a, b) => b.amount - a.amount);
    },
  },
});
</script>

<style lang="scss" scoped>
li {
  border-top: 0.1rem solid #e1e1e1;
  margin: 0;
}

ul {
  list-style: none;
  margin: 0;
  text-align: left;
}
</style>
