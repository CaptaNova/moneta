<template>
  <header>
    <div
      class="back-action"
      title="Zurück"
      :class="{ clickable: showBack || showClose }"
      @click.prevent="onBack"
    >
      <template v-if="showBack"
        ><img src="../../assets/arrow-left.svg"
      /></template>
      <template v-if="showClose"><img src="../../assets/x.svg" /></template>
    </div>
    <span>{{ text }}</span>
    <div
      class="download-action"
      title="Analyse herunterladen"
      :class="{ clickable: showDownload }"
      @click.prevent="onDownload"
    >
      <template v-if="showDownload"
        ><img src="../../assets/download.svg"
      /></template>
    </div>
  </header>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "TheHeader",

  props: {
    showBack: {
      type: Boolean,
      default: false,
    },

    showClose: {
      type: Boolean,
      default: false,
    },

    showDownload: {
      type: Boolean,
      default: false,
    },

    text: {
      type: String,
      required: true,
    },
  },

  emits: ["back", "download"],

  methods: {
    onBack() {
      if (this.showBack || this.showClose) {
        this.$emit("back");
      }
    },

    onDownload() {
      if (this.showDownload) {
        this.$emit("download");
      }
    },
  },
});
</script>

<style lang="scss" scoped>
header {
  background-color: white;
  box-shadow: 0 0 1rem 0 white;
  font-weight: var(--font-weight-bold);
  height: 6.2rem;
  padding: var(--padding-y) var(--padding-x);
  z-index: var(--z-index-header);

  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;

  position: fixed;
  top: 0;
  left: 0;
  right: 0;
}

.back-action,
.download-action {
  display: inline-block;
  width: var(--padding-x);
}

.clickable {
  cursor: pointer;
}
</style>
