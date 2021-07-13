<template>
  <div class="bar-chart">
    <div v-for="(value, index) in values" :key="index" class="bar-chart-item">
      <div class="label">{{ getLabel(index) }}</div>
      <div class="meter">
        <BaseMeterHorizontal
          :min="0"
          :max="100"
          :decimalPlaces="2"
          :value="value"
        />
      </div>
      <div class="percentage">{{ value.toFixed(2) }} %</div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import BaseMeterHorizontal from "./BaseMeterHorizontal.vue";

export default defineComponent({
  name: "ChartBarHorizontal",

  components: {
    BaseMeterHorizontal,
  },

  props: {
    values: {
      type: Array as PropType<number[]>,
      required: true,
    },
    labels: {
      type: Array as PropType<string[]>,
      required: false,
      default: () => [],
    },
  },

  methods: {
    getLabel(index: number): string {
      return this.labels[index] || "";
    },
  },
});
</script>

<style lang="scss" scoped>
.bar-chart {
  display: table;
  line-height: 1.8;
}

.bar-chart-item {
  display: table-row;
}

.label,
.meter,
.percentage {
  display: table-cell;
}

.label {
  padding-right: 16px;
}

.meter {
  width: 100%;
}

.percentage {
  padding-left: 16px;
  text-align: right;
  white-space: nowrap;
}
</style>
