<template>
  <input ref="fileInput" type="file" accept=".json" @change="upload" />
  <button class="button button-outline" @click.prevent="onUpload">
    {{ text }}
  </button>
</template>

<script lang="ts">
import { Document } from "@/models";
import { parseAssets, validateDocumentSchema } from "@/utils";
import { defineComponent } from "vue";
import { mapActions } from "vuex";

export default defineComponent({
  name: "UploadButton",

  props: {
    text: {
      type: String,
      required: true,
    },
  },

  methods: {
    ...mapActions(["loadAccounts"]),

    importData(
      data: string | ArrayBuffer | null | undefined,
      readerError: DOMException | null
    ): void {
      if (typeof data !== "string") {
        window.alert(
          `Die ausgewähle Datei kann nicht gelesen werden: ${readerError}`
        );
        return;
      }

      try {
        const parsedData = JSON.parse(data);
        validateDocumentSchema(parsedData);
        const document = parsedData as Document;
        this.validateVersion(document.meta.version);
        const assets = parseAssets(document);
        this.loadAccounts(assets);
        this.$router.push("/financial-statement");
      } catch (e: unknown) {
        window.alert(e);
      }
    },

    isSelectedFileValid(fileList: FileList | null): boolean {
      return (
        fileList !== null &&
        fileList.length === 1 &&
        fileList[0].name.toLowerCase().endsWith(".json")
      );
    },

    onUpload(): void {
      (this.$refs.fileInput as HTMLInputElement).click();
    },

    upload(): void {
      const fileList = (this.$refs.fileInput as HTMLInputElement).files;

      if (!this.isSelectedFileValid(fileList)) {
        window.alert("Die ausgewählte Datei ist ungültig.");
        return;
      }

      const reader = new FileReader();
      reader.error;
      reader.onerror = () => {
        window.alert(
          `Die ausgewähle Datei kann nicht gelesen werden: ${reader.error}`
        );
      };
      reader.onload = (event) => {
        this.importData(event.target?.result, reader.error);
      };
      reader.readAsText((fileList as FileList)[0], "utf8");
    },

    validateVersion(version: string): void | never {
      if (version !== "1.0") {
        throw new Error("Unsupported version.");
      }
    },
  },
});
</script>

<style lang="scss" scoped>
input[type="file"] {
  display: none;
}
</style>
