<template>
  <h3>Aktiva</h3>
  <AssetList :assets="accountList" />
  <AssetListSummary
    v-if="accountList.length > 0"
    :assets="accountList"
    title="Bruttovermögen"
  />
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
import { defineComponent } from "vue";
import { mapGetters } from "vuex";
import DownloadButton from "@/common/components/DownloadButton.vue";
import UploadButton from "@/common/components/UploadButton.vue";
import AssetList from "@/modules/financialStatement/components/AssetList.vue";
import AssetListSummary from "@/modules/financialStatement/components/AssetListSummary.vue";

export default defineComponent({
  name: "FinancialStatement",

  components: {
    AssetList,
    AssetListSummary,
    DownloadButton,
    UploadButton,
  },

  computed: mapGetters(["accountList"]),

  methods: {
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
</style>
