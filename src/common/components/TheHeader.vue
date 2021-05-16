<template>
  <header>
    <div
      class="back-action"
      :class="{ clickable: showBack }"
      @click.prevent="onBack"
    >
      <template v-if="showBack">⬅</template>
    </div>
    <span>{{ text }}</span>
    <div
      class="download-action"
      :class="{ clickable: showDownload }"
      @click.prevent="onDownload"
    >
      <template v-if="showDownload">📥</template>
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
      if (this.showBack) {
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
  box-sizing: border-box;
  font-weight: 700;
  height: 6.2rem;
  padding: 2rem;
  z-index: 2;

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
  width: 2rem;
}

.clickable {
  cursor: pointer;
}
</style>
