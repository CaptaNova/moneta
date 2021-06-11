<template>
  <header>
    <div class="content-wrapper">
      <div
        class="header-action header-action-left"
        :title="leftActionTitle"
        :class="{ clickable: showLeftAction }"
        @click.prevent="onLeftAction"
      >
        <ArrowLeftIcon v-if="showBack" color="#9b4dca" />
        <XIcon v-if="showClose" color="#9b4dca" />
      </div>
      <span>{{ text }}</span>
      <div
        class="header-action header-action-right"
        :title="rightActionTitle"
        :class="{ clickable: showRightAction }"
        @click.prevent="onRightAction"
      >
        <Trash2Icon v-if="showDelete" color="#9b4dca" />
        <DownloadIcon v-if="showDownload" color="#9b4dca" />
      </div>
    </div>
  </header>
</template>

<script lang="ts">
import {
  ArrowLeft as ArrowLeftIcon,
  Download as DownloadIcon,
  Trash2 as Trash2Icon,
  X as XIcon,
} from "lucide-vue-next";
import { defineComponent } from "vue";

export default defineComponent({
  name: "TheHeader",

  components: {
    ArrowLeftIcon,
    DownloadIcon,
    Trash2Icon,
    XIcon,
  },

  props: {
    showBack: {
      type: Boolean,
      default: false,
    },

    showClose: {
      type: Boolean,
      default: false,
    },

    showDelete: {
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

  computed: {
    leftActionTitle(): string {
      if (this.showBack) {
        return "Zurück";
      } else if (this.showClose) {
        return "Close";
      } else {
        return "";
      }
    },

    rightActionTitle(): string {
      if (this.showDelete) {
        return "Löschen";
      } else if (this.showDownload) {
        return "Analyse herunterladen";
      } else {
        return "";
      }
    },

    showLeftAction(): boolean {
      return this.showBack || this.showClose;
    },

    showRightAction(): boolean {
      return this.showDelete || this.showDownload;
    },
  },

  methods: {
    onLeftAction() {
      if (this.showLeftAction) {
        this.$emit("back");
      }
    },

    onRightAction() {
      if (this.showRightAction) {
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
  height: var(--header-height);
  z-index: var(--z-index-header);

  position: fixed;
  top: 0;
  left: 0;
  right: 0;
}

.content-wrapper {
  display: flex;
  align-items: center;
  flex-flow: row nowrap;
  justify-content: space-between;

  height: 100%;
  margin: 0 auto;
  max-width: var(--width-max);
  padding: 0 var(--padding-x);
}

.header-action {
  line-height: 1;
  padding: 10px;
}

.header-action-left {
  margin-left: -10px;
}

.header-action-right {
  margin-right: -10px;
}

.clickable {
  cursor: pointer;
}
</style>
