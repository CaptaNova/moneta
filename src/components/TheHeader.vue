<template>
  <header>
    <div class="content-wrapper">
      <button
        class="icon nav-icon"
        :title="navigationTitle"
        :class="{ invisible: !navigation }"
        @click.prevent="onNavigate"
      >
        <ArrowLeftIcon color="#9b4dca" />
      </button>
      <div class="header-title">{{ title }}</div>
      <div id="header-action"></div>
    </div>
  </header>
</template>

<script lang="ts">
import { ArrowLeft as ArrowLeftIcon } from "lucide-vue-next";
import { defineComponent } from "vue";

export default defineComponent({
  name: "TheHeader",

  components: {
    ArrowLeftIcon,
  },

  props: {
    navigation: {
      type: String,
      required: false,
    },

    title: {
      type: String,
      required: false,
      default: () => "",
    },
  },

  emits: ["back"],

  computed: {
    navigationTitle(): string {
      return this.navigation ? "Zurück" : "";
    },
  },

  methods: {
    onNavigate() {
      this.$emit("back");
    },
  },
});
</script>

<style lang="scss" scoped>
header {
  background-color: white;
  box-shadow: 0 0 1rem 0 white;
  height: calc(16px + 16px + 24px); // TODO: extract to variable
  text-align: center;
  z-index: var(--z-index-header);

  position: fixed;
  top: 0;
  left: 0;
  right: 0;
}

.content-wrapper {
  align-items: center;
  display: flex;
  flex-flow: row nowrap;
  height: 100%;
  justify-content: flex-start;
  line-height: 1;
  margin: 0 16px;
}

.header-title {
  font-size: 20px;
  font-weight: var(--font-weight-bold);
  flex: 1;
}

.icon {
  align-items: center;
  background-color: transparent;
  border: none;
  border-radius: 50%;
  display: inline-flex;
  height: calc(24px + 12px + 12px);
  justify-content: center;
  padding: 0;
  width: calc(24px + 12px + 12px);

  &:focus,
  &:hover {
    background-color: rgba(0, 0, 0, 0.1);
  }
}

.nav-icon {
  margin: 0 calc(32px - 12px) 0 -12px;
}

@media only screen and (min-width: 576px) {
  .content-wrapper {
    margin: 0 32px;
    width: auto;
  }
}

@media only screen and (min-width: 905px) {
  .content-wrapper {
    margin: 0 auto;
    width: 840px;
  }
}

@media only screen and (min-width: 1240px) {
  .content-wrapper {
    margin: 0 200px;
    width: auto;
  }
}

@media only screen and (min-width: 1440px) {
  .content-wrapper {
    margin: 0 auto;
    width: 1040px;
  }
}

@media print {
  .icon {
    display: none;
  }
}
</style>
