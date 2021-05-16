<template>
  <main>
    <HomeHero />
    <HomeFunction />
    <HomeSecurity />
    <HomeAbout />
  </main>
</template>

<script lang="ts">
import HomeAbout from "@/modules/home/components/HomeAbout.vue";
import HomeFunction from "@/modules/home/components/HomeFunction.vue";
import HomeHero from "@/modules/home/components/HomeHero.vue";
import HomeSecurity from "@/modules/home/components/HomeSecurity.vue";
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
