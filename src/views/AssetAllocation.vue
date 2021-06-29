<template>
  <TheHeader text="Vermögensstruktur" :showBack="true" @back="onBack" />
  <main>
    <div class="content">
      <section>
        <h4>Vermögensstruktur</h4>
        <AssetAllocationList :assetAllocation="assetAllocation" />
      </section>
    </div>
  </main>
</template>

<script lang="ts">
import AssetAllocationList from "@/components/financialStatement/AssetAllocationList.vue";
import TheHeader from "@/components/TheHeader.vue";
import { AssetType, FinancialProduct } from "@/models";
import { AssetAllocation, AssetClass, AssetTypeConfiguration } from "@/types";
import { defineComponent } from "vue";
import { mapGetters } from "vuex";

export default defineComponent({
  name: "AssetAllocation",

  components: {
    AssetAllocationList,
    TheHeader,
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
  },

  methods: {
    onBack(): void {
      this.$router.back();
    },

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
