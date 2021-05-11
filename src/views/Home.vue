<template>
  <section class="container header-container">
    <!-- TODO: logo -->
    <img alt="Vue logo" src="../assets/logo.png" />
    <h1 class="title">Moneta</h1>
    <p class="description" data-version="Currently">
      <!-- TODO: mission statement -->
      Basic financial analysis for private households<br />
      <i
        ><small>Currently v{{ version }}</small></i
      >
    </p>
    <router-link class="button" to="financial-statement"
      >Zur Vermögensbilanz</router-link
    >
    <!-- TODO: introduction -->
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Home",

  data() {
    return {
      version: process.env.VUE_APP_VERSION,
    };
  },
});
</script>

<style lang="scss" scoped>
.header-container {
  padding-bottom: 7.5rem;
  padding-top: 7.5rem;
  text-align: center;
}
</style>
