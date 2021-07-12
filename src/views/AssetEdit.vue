<template>
  <main>
    <AssetForm
      :asset="getAsset()"
      :assetIds="usedAssetIds"
      primaryButtonText="Speichern"
      @submit="onSubmit"
    />
  </main>
</template>

<script lang="ts">
import AssetForm from "@/components/financialStatement/AssetForm.vue";
import { FinancialProduct } from "@/models";
import { getAssetId } from "@/utils";
import { defineComponent } from "vue";
import { mapActions } from "vuex";

export default defineComponent({
  name: "AssetEdit",

  components: {
    AssetForm,
  },

  computed: {
    usedAssetIds(): Array<string> {
      const ownAssetId = this.$route.params.assetId;
      return this.$store.state.FinancialStatementModule.accounts
        .map((asset: FinancialProduct) => getAssetId(asset.identifier))
        .filter((assetId: string) => assetId !== ownAssetId);
    },
  },

  methods: {
    ...mapActions(["updateAsset"]),

    getAsset(): FinancialProduct | undefined {
      const assetId = this.$route.params.assetId;
      return this.$store.state.FinancialStatementModule.accounts.find(
        (asset: FinancialProduct) => getAssetId(asset.identifier) === assetId
      );
    },

    onSubmit(updatedAsset: FinancialProduct): void {
      const assetId = this.$route.params.assetId;
      this.updateAsset({ id: assetId, asset: updatedAsset }).then(() =>
        this.$router.push("/financial-statement")
      );
    },
  },
});
</script>

<style lang="scss" scoped>
main {
  padding-top: calc(6rem + 1rem);
  text-align: left;
}
</style>
