<template>
  <button @click.prevent="onClick">+</button>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "ButtonFloating",

  emits: ["click"],

  methods: {
    onClick() {
      this.$emit("click");
    },
  },
});
</script>

<style lang="scss" scoped>
button {
  background-color: var(--color-primary);
  border: 0.1rem solid var(--color-primary);
  border-radius: 50%;
  color: white;
  font-size: 3rem;
  font-weight: var(--font-weight-normal);
  height: 5rem;
  line-height: 1;
  margin: 0;
  padding: 0;
  text-align: center;
  width: 5rem;

  position: fixed;
  bottom: var(--padding-x);
  right: var(--padding-x);
  z-index: var(--z-index-header);

  &:focus,
  &:hover {
    background-color: #606c76;
    border-color: #606c76;
    outline: 0;
  }
}

@media print {
  button {
    display: none;
  }
}
</style>
