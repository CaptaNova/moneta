<template>
  <TheHeader text="Neue Anlage" :showBack="true" @back="onBack" />
  <main>
    <AssetForm
      :asset="createEmptyAsset()"
      :assetIds="usedAssetIds"
      primaryButtonText="Anlage hinzufügen"
      @submit="onSubmit"
    />
  </main>
</template>

<script lang="ts">
import AssetForm from "@/components/financialStatement/AssetForm.vue";
import TheHeader from "@/components/TheHeader.vue";
import { FinancialProduct } from "@/models";
import { createEmptyAsset, getAssetId } from "@/utils";
import { defineComponent } from "vue";
import { mapActions } from "vuex";

export default defineComponent({
  name: "AssetCreate",

  components: {
    AssetForm,
    TheHeader,
  },

  computed: {
    usedAssetIds(): Array<string> {
      return this.$store.state.FinancialStatementModule.accounts.map(
        (asset: FinancialProduct) => getAssetId(asset.identifier)
      );
    },
  },

  methods: {
    ...mapActions(["addAsset"]),

    createEmptyAsset,

    leave(): void {
      this.$router.push("/financial-statement");
    },

    onBack(): void {
      this.leave();
    },

    onSubmit(newAsset: FinancialProduct): void {
      this.addAsset(newAsset).then(() => this.leave());
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
