<template>
  <AssetForm
    :asset="createEmptyAsset()"
    :assetIds="usedAssetIds"
    primaryButtonText="Anlage hinzufügen"
    @submit="onSubmit"
  />
</template>

<script lang="ts">
import AssetForm from "@/components/AssetForm.vue";
import { FinancialProduct } from "@/models";
import { createEmptyAsset, getAssetId } from "@/utils";
import { defineComponent } from "vue";
import { mapActions } from "vuex";

export default defineComponent({
  name: "AssetCreate",

  components: {
    AssetForm,
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

    onSubmit(newAsset: FinancialProduct): void {
      this.addAsset(newAsset).then(() =>
        this.$router.push("/financial-statement")
      );
    },
  },
});
</script>
