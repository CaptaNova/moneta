<template>
  <h3>Aktiva</h3>
  <template v-if="hasAssets">
    <AssetList
      :assets="getAssetsForAssetClass(AssetClassDin77230.Cash)"
      title="Barvermögen"
    />
    <AssetList
      :assets="getAssetsForAssetClass(AssetClassDin77230.Capital)"
      title="Kapitalanlagen"
    />
    <AssetList
      :assets="getAssetsForAssetClass(AssetClassDin77230.RealEstate)"
      title="Immobilienvermögen"
    />
    <AssetList
      :assets="getAssetsForAssetClass(AssetClassDin77230.Other)"
      title="Sonstige Vermögenswerte"
    />
    <AssetList
      :assets="getAssetsForAssetClass(AssetClassDin77230.NonBalanceable)"
      title="Nicht bilanzierbare Positionen"
    />
    <AssetListSummary :assets="accountList" title="Bruttovermögen" />
  </template>
  <template v-else>
    <div class="container no-asset">Du hast noch keine Anlagen angelegt.</div>
  </template>

  <div class="actions">
    <button
      class="button button-outline add-button"
      @click.prevent="onAddButtonClick"
    >
      Neue Anlage hinzufügen
    </button>
  </div>
  <div class="actions">
    <UploadButton />
    &nbsp;
    <DownloadButton />
  </div>
</template>

<script lang="ts">
import DownloadButton from "@/common/components/DownloadButton.vue";
import UploadButton from "@/common/components/UploadButton.vue";
import { AssetType, AssetTypeConfiguration, FinancialProduct } from "@/models";
import { AssetClassDin77230 } from "@/models/AssetClass";
import AssetList from "@/modules/financialStatement/components/AssetList.vue";
import AssetListSummary from "@/modules/financialStatement/components/AssetListSummary.vue";
import { defineComponent } from "vue";
import { mapGetters } from "vuex";

export default defineComponent({
  name: "FinancialStatement",

  components: {
    AssetList,
    AssetListSummary,
    DownloadButton,
    UploadButton,
  },

  data() {
    return {
      AssetClassDin77230: AssetClassDin77230,
    };
  },

  computed: {
    ...mapGetters(["accountList"]),

    hasAssets(): boolean {
      return this.accountList.length > 0;
    },
  },

  methods: {
    getAssetsForAssetClass(assetClass: AssetClassDin77230): FinancialProduct[] {
      return this.accountList.filter(
        (asset: FinancialProduct) =>
          this.getAssetClassDin77230(asset.serviceType) === assetClass
      );
    },

    getAssetClassDin77230(assetType: AssetType): AssetClassDin77230 {
      return AssetTypeConfiguration[assetType].assetClass.din77230;
    },

    onAddButtonClick() {
      this.$router.push("/financial-statement/asset/add");
    },
  },
});
</script>

<style lang="scss" scoped>
.actions {
  margin-top: 3rem;
}
.add-button {
  background-color: rgba(155, 77, 202, 0.15);
  // color: #9b4dca;
  width: 100%;

  &:hover {
    background-color: rgba(96, 108, 118, 0.15);
  }
}
.no-asset {
  padding-top: 6rem;
  padding-bottom: 6rem;
  text-align: center;
}
</style>
