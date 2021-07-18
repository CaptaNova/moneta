<template>
  <AssetForm
    :asset="getAsset()"
    :assetIds="usedAssetIds"
    primaryButtonText="Speichern"
    @submit="onSubmit"
  />
  <teleport to="#header-action">
    <BaseHeaderAction title="Löschen" @click.prevent="onDelete">
      <Trash2Icon color="#9b4dca" />
    </BaseHeaderAction>
  </teleport>
</template>

<script lang="ts">
import AssetForm from "@/components/AssetForm.vue";
import BaseHeaderAction from "@/components/BaseHeaderAction.vue";
import { FinancialProduct } from "@/models";
import { getAssetId } from "@/utils";
import { Trash2 as Trash2Icon } from "lucide-vue-next";
import { defineComponent } from "vue";
import { mapActions } from "vuex";

export default defineComponent({
  name: "AssetEdit",

  components: {
    AssetForm,
    BaseHeaderAction,
    Trash2Icon,
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

    onDelete(): void {
      const assetId = this.$route.params.assetId;
      this.deleteAsset(assetId).then(() => this.$router.back());
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
