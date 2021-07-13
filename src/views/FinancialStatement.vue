<template>
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
        <BaseButtonFloating @click="addNewAsset" />
      </div>
      <div class="content">
        <router-link class="button" to="/financial-statement/asset-allocation"
          >Vermögensstruktur</router-link
        >
      </div>
    </main>
  </template>
  <template v-else>
    <main class="no-assets flex-column flex-center">
      <BaseBlankSlate
        :title="'Arm wie eine Kirchenmaus?'"
        :description="noAssetDescription"
        :buttonText="'Neue Anlage hinzufügen'"
        @button-clicked="addNewAsset"
      />
    </main>
  </template>
  <teleport to="#header-action">
    <BaseHeaderActionDownload />
  </teleport>
</template>

<script lang="ts">
import BaseBlankSlate from "@/components/BaseBlankSlate.vue";
import BaseButtonFloating from "@/components/BaseButtonFloating.vue";
import BaseHeaderActionDownload from "@/components/BaseHeaderActionDownload.vue";
import AssetList from "@/components/financialStatement/AssetList.vue";
import { AssetType, FinancialProduct } from "@/models";
import { AssetClassDin77230, AssetTypeConfiguration } from "@/types";
import { defineComponent } from "vue";
import { mapGetters } from "vuex";

export default defineComponent({
  name: "FinancialStatement",

  components: {
    AssetList,
    BaseBlankSlate,
    BaseButtonFloating,
    BaseHeaderActionDownload,
  },

  data() {
    return {
      AssetClassDin77230: AssetClassDin77230,
      noAssetDescription: `Das glaube ich Dir nicht! 😉

Füge Deine Anlagen hinzu. Ich empfehle Dir mit Deinem Girokonto anzufangen.`,
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
    addNewAsset(): void {
      this.$router.push("/financial-statement/asset/add");
    },

    getAssetsForAssetClass(assetClass: AssetClassDin77230): FinancialProduct[] {
      return this.accountList.filter(
        (asset: FinancialProduct) =>
          this.getAssetClassDin77230(asset.serviceType) === assetClass
      );
    },

    getAssetClassDin77230(assetType: AssetType): AssetClassDin77230 {
      return AssetTypeConfiguration[assetType].assetClass.din77230;
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

.content:last-child {
  padding-top: 0;
}

.net-assets {
  color: var(--color-primary);
  font-size: 2rem;
}

.no-assets {
  height: 100vh;
}
</style>
