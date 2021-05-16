<template>
  <TheHeader
    text="Vermögensbilanz"
    :showDownload="true"
    @download="onDownload"
  />
  <template v-if="hasAssets">
    <main>
      <div class="content flex-column">
        <div class="net-assets">
          <h3 title="Dein aktuelles Nettovermögen">
            <strong>{{ netAssetsFormatted }}</strong> EUR
          </h3>
        </div>
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
        <div class="floating-button" title="Neue Anlage">
          <span @click.prevent="onAddButtonClick">+</span>
        </div>
      </div>
    </main>
  </template>
  <template v-else>
    <main class="no-assets">
      <AssetNoAssets />
    </main>
  </template>
</template>

<script lang="ts">
import TheHeader from "@/common/components/TheHeader.vue";
import {
  AssetClassDin77230,
  AssetType,
  AssetTypeConfiguration,
  FinancialProduct,
} from "@/models";
import AssetList from "@/modules/financialStatement/components/AssetList.vue";
import AssetNoAssets from "@/modules/financialStatement/components/AssetNoAssets.vue";
import { createDownloadFile } from "@/utils";
import { defineComponent } from "vue";
import { mapGetters } from "vuex";

export default defineComponent({
  name: "FinancialStatement",

  components: {
    AssetList,
    AssetNoAssets,
    TheHeader,
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

    netAssets(): number {
      const reducer = (accumulator: number, currentValue: FinancialProduct) =>
        accumulator + currentValue.amount.value;

      return this.accountList.reduce(reducer, 0);
    },

    netAssetsFormatted(): string {
      return Number(this.netAssets).toLocaleString("de", {
        maximumFractionDigits: 0,
      });
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

    onDownload(): void {
      // see https://medium.com/js-dojo/force-file-download-in-vuejs-using-axios-a7fe1b5dfe7b
      const data = createDownloadFile(this.accountList);

      const link = document.createElement("a");
      link.href = window.URL.createObjectURL(new Blob([data]));
      link.download = this.createDownloadFileName();
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    },

    createDownloadFileName(): string {
      const date = new Date().toISOString().substring(0, 10).replace(/-/g, "");
      return `Moneta-Vermögensbilanz-${date}.json`;
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

.floating-button {
  background-color: var(--color-primary);
  border-radius: 50%;
  cursor: pointer;
  height: 5rem;
  width: 5rem;

  align-items: center;
  display: flex;
  justify-content: center;

  position: fixed;
  bottom: var(--padding-x);
  right: var(--padding-x);
  z-index: var(--z-index-header);

  span {
    color: white;
    font-size: 3rem;
  }
}

.net-assets {
  color: var(--color-primary);
  font-size: 2rem;
}
</style>
