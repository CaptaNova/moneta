<template>
  <TheHeader
    text="Anlage bearbeiten"
    :showBack="true"
    :showDelete="true"
    @back="onBack"
    @download="onDelete"
  />
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
import TheHeader from "@/common/components/TheHeader.vue";
import { FinancialProduct } from "@/models";
import { getAssetId } from "@/modules/financialStatement";
import AssetForm from "@/modules/financialStatement/components/AssetForm.vue";
import { defineComponent } from "vue";
import { mapActions } from "vuex";

export default defineComponent({
  name: "AssetEdit",

  components: {
    AssetForm,
    TheHeader,
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
    ...mapActions(["deleteAsset", "updateAsset"]),

    getAsset(): FinancialProduct | undefined {
      const assetId = this.$route.params.assetId;
      return this.$store.state.FinancialStatementModule.accounts.find(
        (asset: FinancialProduct) => getAssetId(asset.identifier) === assetId
      );
    },

    leave(): void {
      this.$router.push("/financial-statement");
    },

    onBack(): void {
      this.leave();
    },

    onDelete(): void {
      const assetId = this.$route.params.assetId;
      this.deleteAsset(assetId).then(() => this.leave());
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

<style lang="scss" scoped>
main {
  padding-top: calc(6rem + 1rem);
  text-align: left;
}
</style>
