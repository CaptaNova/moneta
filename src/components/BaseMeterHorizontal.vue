<template>
  <meter :min="min" :max="max" :value="value">{{ roundedValue }}</meter>
</template>

<script lang="ts">
import { defineComponent } from "vue";

// see
// https://css-tricks.com/password-strength-meter/
// https://css-tricks.com/html5-meter-element/

export default defineComponent({
  name: "BaseMeterHorizontal",

  props: {
    decimalPlaces: {
      type: Number,
      required: false,
    },
    max: {
      type: Number,
      required: true,
    },
    min: {
      type: Number,
      required: true,
    },
    value: {
      type: Number,
      required: true,
    },
  },

  computed: {
    roundedValue(): string {
      return this.decimalPlaces
        ? this.value.toFixed(this.decimalPlaces)
        : this.value.toString();
    },
  },
});
</script>

<style lang="scss" scoped>
meter {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;

  margin: 0;
  height: 16px;
  width: 100%;

  /* Applicable only to Firefox */
  background: none;
  background-color: rgba(96, 108, 118, 0.15);

  &::-moz-meter-bar {
    background: var(--color-primary);
  }

  &::-webkit-meter-bar {
    background: none;
    background-color: rgba(96, 108, 118, 0.15);
  }

  &::-webkit-meter-optimum-value {
    background: var(--color-primary);
  }
}
</style>
