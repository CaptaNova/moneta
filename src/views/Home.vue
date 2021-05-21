<template>
  <main>
    <HomeHero />
    <HomeFunction />
    <HomeSecurity />
    <HomeAbout />
  </main>
</template>

<script lang="ts">
import HomeAbout from "@/components/home/HomeAbout.vue";
import HomeFunction from "@/components/home/HomeFunction.vue";
import HomeHero from "@/components/home/HomeHero.vue";
import HomeSecurity from "@/components/home/HomeSecurity.vue";
import { defineComponent } from "vue";

export default defineComponent({
  name: "Home",

  components: {
    HomeAbout,
    HomeFunction,
    HomeHero,
    HomeSecurity,
  },

  data() {
    return {
      version: process.env.VUE_APP_VERSION,
    };
  },
});
</script>
