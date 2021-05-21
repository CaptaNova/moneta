<template>
  <TheHeader
    :text="headerText"
    :showBack="isAboutHome"
    :showClose="!isAboutHome"
    @back="onBack"
  />
  <main>
    <router-view />
  </main>
</template>

<script lang="ts">
import TheHeader from "@/components/TheHeader.vue";
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

    isAboutHome(): boolean {
      return this.$route.name === "about";
    },
  },

  methods: {
    onBack(): void {
      this.$router.back();
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
