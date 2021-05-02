<template>
  <button class="button button-outline" @click.prevent="onDownload">
    Download
  </button>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { mapGetters } from "vuex";
import { createDownloadFile } from "@/utils/createDownloadFile";

export default defineComponent({
  name: "DownloadButton",
  computed: mapGetters(["accountList"]),
  methods: {
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
