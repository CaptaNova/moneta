<template>
  <HomeHero />
  <HomeFunction />
  <HomeSecurity />
  <HomeAbout />
</template>

<script lang="ts">
import HomeAbout from "@/components/HomeAbout.vue";
import HomeFunction from "@/components/HomeFunction.vue";
import HomeHero from "@/components/HomeHero.vue";
import HomeSecurity from "@/components/HomeSecurity.vue";
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
