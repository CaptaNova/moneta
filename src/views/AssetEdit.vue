<template>
  <h3>Anlage bearbeiten</h3>
  <AssetForm
    :asset="getAsset()"
    :assetIds="usedAssetIds"
    primaryButtonText="Speichern"
    @abort="onAbort"
    @submit="onSubmit"
  />
</template>

<script lang="ts">
import { FinancialProduct } from "@/models";
import { getAssetId } from "@/modules/financialStatement";
import AssetForm from "@/modules/financialStatement/components/AssetForm.vue";
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

    leave(): void {
      this.$router.push("/financial-statement");
    },

    onAbort(): void {
      this.leave();
    },

    onSubmit(updatedAsset: FinancialProduct): void {
      const assetId = this.$route.params.assetId;
      this.updateAsset({ id: assetId, asset: updatedAsset }).then(() =>
        this.leave()
      );
    },
  },
});
</script>
