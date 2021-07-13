<template>
  <button class="icon action-icon" :title="title">
    <slot></slot>
  </button>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "BaseHeaderAction",

  props: {
    title: {
      type: String,
      required: true,
    },
  },
});
</script>

<style lang="scss" scoped>
button {
  line-height: 1;
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

.action-icon {
  margin: 0 -12px 0 calc(32px - 12px);
}

@media print {
  button {
    display: none;
  }
}
</style>
