<template>
  <BaseHeaderAction
    title="Analyse herunterladen"
    @click.prevent="exportAnalysis"
  >
    <DownloadIcon color="#9b4dca" />
  </BaseHeaderAction>
</template>

<script lang="ts">
import BaseHeaderAction from "@/components/BaseHeaderAction.vue";
import { createDownloadFile, createDownloadFileName } from "@/utils";
import { Download as DownloadIcon } from "lucide-vue-next";
import { defineComponent } from "vue";
import { mapActions, mapGetters } from "vuex";

export default defineComponent({
  name: "BaseHeaderActionDownload",

  components: {
    BaseHeaderAction,
    DownloadIcon,
  },

  computed: {
    ...mapGetters(["accountList"]),
  },

  methods: {
    ...mapActions(["resetDirty"]),

    exportAnalysis(): void {
      // see https://medium.com/js-dojo/force-file-download-in-vuejs-using-axios-a7fe1b5dfe7b
      const data = createDownloadFile(this.accountList);

      const link = document.createElement("a");
      link.href = window.URL.createObjectURL(new Blob([data]));
      link.download = createDownloadFileName();
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      this.resetDirty();
    },
  },
});
</script>
