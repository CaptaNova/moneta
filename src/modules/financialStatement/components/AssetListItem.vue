<template>
  <div class="asset" @click="editAsset">
    <div class="info">
      <div class="name">{{ asset.name }}</div>
      <div>{{ translateAssetType(asset.serviceType, "de") }}</div>
    </div>
    <div class="amount">
      <span>{{ amountFormatted }} EUR</span>
    </div>
  </div>
</template>

<script lang="ts">
import { FinancialProduct } from "@/models";
import { translateAssetType } from "@/utils";
import { defineComponent, PropType } from "vue";
import { getAssetId } from "../getAssetId";

export default defineComponent({
  name: "AssetListItem",

  props: {
    asset: {
      type: Object as PropType<FinancialProduct>,
      required: true,
    },
  },

  computed: {
    amountFormatted(): string {
      const value = this.asset?.amount?.value ?? 0;
      return Number(value).toLocaleString("de", {
        maximumFractionDigits: 0,
      });
    },
  },

  methods: {
    editAsset() {
      const id = getAssetId(this.asset.identifier);
      this.$router.push(`/financial-statement/asset/${id}`);
    },

    translateAssetType,
  },
});
</script>

<style lang="scss" scoped>
.asset {
  border-top: 0.1rem solid #e1e1e1;
  cursor: pointer;
  padding: 1rem 0 1rem var(--padding-x);

  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;

  &:hover {
    background-color: rgba(96, 108, 118, 0.15);
  }
}

.amount {
  text-align: right;
  white-space: nowrap;
}

.info {
  font-size: 1.2rem;
  min-width: 0; /* https://css-tricks.com/flexbox-truncated-text/ */
  padding-right: 1rem;

  .name {
    font-weight: var(--font-weight-bold);
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
}
</style>
