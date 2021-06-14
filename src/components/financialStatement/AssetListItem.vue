<template>
  <router-link class="list-item" :to="editPath">
    <CircleBadge
      ><AssetListItemIcon :icon="getIconForAssetType(asset.serviceType)"
    /></CircleBadge>
    <div class="info">
      <div class="name">{{ asset.name }}</div>
      <div class="type">{{ translateAssetType(asset.serviceType, "de") }}</div>
    </div>
    <div class="amount">
      <span>{{ amountFormatted }} EUR</span>
    </div>
  </router-link>
</template>

<script lang="ts">
import CircleBadge from "@/components/common/CircleBadge.vue";
import { FinancialProduct } from "@/models";
import { getAssetId, getIconForAssetType, translateAssetType } from "@/utils";
import { defineComponent, PropType } from "vue";
import AssetListItemIcon from "./AssetListItemIcon.vue";

export default defineComponent({
  name: "AssetListItem",

  components: {
    CircleBadge,
    AssetListItemIcon,
  },

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

    editPath(): string {
      const id = getAssetId(this.asset.identifier);
      return `/financial-statement/asset/${id}`;
    },
  },

  methods: {
    getIconForAssetType,
    translateAssetType,
  },
});
</script>

<style lang="scss" scoped>
.list-item {
  border-top: 0.1rem solid #e1e1e1;
  color: inherit;
  padding: 16px;

  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: flex-start;

  &:hover {
    background-color: rgba(96, 108, 118, 0.15);
  }
}

.amount {
  margin-left: 16px;
  text-align: right;
  white-space: nowrap;
}

.info {
  flex: 1;
  margin-left: 16px;
  min-width: 0; /* https://css-tricks.com/flexbox-truncated-text/ */

  .name {
    font-weight: var(--font-weight-bold);
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .type {
    font-size: 1.4rem;
    line-height: 1.4rem;
  }
}
</style>
