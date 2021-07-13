<template>
  <div class="blank-slate">
    <slot></slot>
    <div class="h3">{{ title }}</div>
    <p>{{ description }}</p>
    <button
      v-if="buttonText"
      class="button"
      type="button"
      @click="$emit('buttonClicked')"
    >
      {{ buttonText }}
    </button>
    <p v-if="linkText">
      <a :href="linkUrl">{{ linkText }}</a>
    </p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "BaseBlankSlate",

  props: {
    /* required */

    title: {
      type: String,
      required: true,
    },

    description: {
      type: String,
      required: true,
    },

    /* optional */

    buttonText: {
      type: String,
      required: false,
    },

    linkText: {
      type: String,
      required: false,
    },

    linkUrl: {
      type: String,
      required: false,
      default: () => "#",
    },
  },

  emits: ["buttonClicked"],
});
</script>

<style lang="scss" scoped>
.blank-slate {
  position: relative;
  text-align: center;

  p {
    color: var(--color-text-secondary);
    white-space: pre-wrap;
  }
}
</style>
