<template>
  <section class="container header-container">
    <!-- TODO: logo -->
    <img alt="Vue logo" src="../assets/logo.png" />
    <h1 class="title">Moneta</h1>
    <p class="description" data-version="Currently">
      <!-- TODO: mission statement -->
      A minimalist CSS framework <br /><i
        ><small>Currently v{{ version }}</small></i
      >
    </p>
    <router-link class="button" to="financial-statement"
      >Zur Vermögensbilanz</router-link
    >
    <!-- TODO: introduction -->
  </section>

  <!--
  <div class="home">
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" />
  </div>
  -->
</template>

<script lang="ts">
import { defineComponent } from "vue";
// import HelloWorld from "@/components/HelloWorld.vue"; // @ is an alias to /src

export default defineComponent({
  name: "Home",
  components: {
    // HelloWorld,
  },
  data() {
    return {
      version: "1.0.0",
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
