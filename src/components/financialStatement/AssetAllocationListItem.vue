<template>
  <div class="list-item">
    <CircleBadge
      ><AssetListItemIcon :icon="getIconForAssetClass(assetClass)"
    /></CircleBadge>
    <div class="info">
      <label>
        <div class="name">{{ translateAssetClass(assetClass) }}</div>
        <div class="amount">{{ amountFormatted }} EUR</div>
        <div class="percentage">{{ percentage.toFixed(2) }} %</div>
      </label>
      <MeterHorizontal
        :min="0"
        :max="100"
        :value="percentage"
        :decimalPlaces="2"
      />
    </div>
  </div>
</template>

<script lang="ts">
import CircleBadge from "@/components/common/CircleBadge.vue";
import MeterHorizontal from "@/components/common/MeterHorizontal.vue";
import { getIconForAssetClass, translateAssetClass } from "@/utils";
import { defineComponent } from "vue";
import AssetListItemIcon from "./AssetListItemIcon.vue";

export default defineComponent({
  name: "AssetAllocationListItem",

  components: {
    AssetListItemIcon,
    CircleBadge,
    MeterHorizontal,
  },

  props: {
    amount: {
      type: Number,
      required: true,
    },

    assetClass: {
      type: Number,
      required: true,
    },

    percentage: {
      type: Number,
      required: true,
    },
  },

  computed: {
    amountFormatted(): string {
      return Number(this.amount).toLocaleString("de", {
        maximumFractionDigits: 0,
      });
    },
  },

  methods: {
    getIconForAssetClass,
    translateAssetClass,
  },
});
</script>

<style lang="scss" scoped>
.list-item {
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

.info {
  flex: 1;
  display: flex;
  flex-direction: column;
  margin-left: 16px;

  label {
    display: flex;
    font-weight: var(--font-weight-normal);
    justify-content: flex-start;
  }
}

.name {
  flex: 1;
  font-weight: var(--font-weight-bold);
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.amount {
  display: none;
}

.percentage {
  font-weight: var(--font-weight-bold);
  text-align: right;
  width: 8rem;
}

@media screen and (min-width: 40rem) {
  .amount {
    display: block;
  }
}
</style>
