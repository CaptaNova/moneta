<template>
  <TheHeader :text="headerText" :showBack="true" @back="onBack" />
  <main>
    <router-view />
  </main>
</template>

<script lang="ts">
import TheHeader from "@/common/components/TheHeader.vue";
import { defineComponent } from "vue";

export default defineComponent({
  name: "About",

  components: {
    TheHeader,
  },

  computed: {
    headerText(): string {
      return this.$route.name === "imprint" ? "Impressum" : "App-Informationen";
    },
  },

  methods: {
    onBack(): void {
      if (this.$route.name === "about") {
        this.$router.push("/");
      } else {
        this.$router.push("/about");
      }
    },
  },
});
</script>

<style lang="scss" scoped>
main {
  padding-top: calc(6rem + 1rem);
  text-align: left;
}
</style>
