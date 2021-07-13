<template>
  <main>
    <div class="content">
      <section>
        <h4>Vermögensstruktur</h4>
        <AssetAllocationList :assetAllocation="assetAllocation" />
      </section>
      <section>
        <h4>Vermögensstruktur</h4>
        <ChartBarHorizontal
          :values="assetAllocationValues"
          :labels="assetAllocationLabels"
        />
      </section>
    </div>
  </main>
</template>

<script lang="ts">
import AssetAllocationList from "@/components/AssetAllocationList.vue";
import ChartBarHorizontal from "@/components/ChartBarHorizontal.vue";
import { AssetType, FinancialProduct } from "@/models";
import { AssetAllocation, AssetClass, AssetTypeConfiguration } from "@/types";
import { translateAssetClass } from "@/utils";
import { defineComponent } from "vue";
import { mapGetters } from "vuex";

export default defineComponent({
  name: "AssetAllocation",

  components: {
    AssetAllocationList,
    ChartBarHorizontal,
  },

  computed: {
    ...mapGetters(["accountList"]),

    assetAllocation(): AssetAllocation[] {
      const allocation: Map<AssetClass, AssetAllocation> = new Map();
      let totalAmount = 0;

      this.accountList.forEach((financialProduct: FinancialProduct) => {
        totalAmount += financialProduct.amount.value;
        const assetClass = this.getAssetClass(financialProduct.serviceType);

        const currentAllocation = allocation.get(assetClass);
        if (currentAllocation) {
          currentAllocation.amount += financialProduct.amount.value;
        } else {
          allocation.set(assetClass, {
            assetClass,
            amount: financialProduct.amount.value,
            percentage: 0,
          });
        }
      });

      return Array.from(allocation.values()).map((currentAllocation) => ({
        ...currentAllocation,
        percentage: (currentAllocation.amount / totalAmount) * 100,
      }));
    },

    assetAllocationLabels(): string[] {
      return [...this.assetAllocation]
        .sort((a, b) => b.amount - a.amount)
        .map((currentAllocation) =>
          this.translateAssetClass(currentAllocation.assetClass)
        );
    },

    assetAllocationValues(): number[] {
      return [...this.assetAllocation]
        .sort((a, b) => b.amount - a.amount)
        .map((currentAllocation) => currentAllocation.percentage);
    },
  },

  methods: {
    translateAssetClass,

    getAssetClass(assetType: AssetType): AssetClass {
      return AssetTypeConfiguration[assetType].assetClass.default;
    },
  },
});
</script>

<style lang="scss" scoped>
.content {
  margin: 0 auto;
  max-width: var(--width-max);
  padding-bottom: calc(1.5 * var(--padding-x));
  padding-top: calc(6rem + 1rem);
}

section {
  margin-top: var(--padding-y);
  padding: var(--padding-y) var(--padding-x);
  text-align: left;
}
</style>
