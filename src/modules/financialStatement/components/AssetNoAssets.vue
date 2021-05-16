<template>
  <section class="no-asset">
    <h3>Arm wie eine Kirchenmaus?</h3>
    <p>Das glaube ich Dir nicht! 😉</p>
    <p>
      Füge Deine Anlagen hinzu. Ich empfehle Dir mir Deinem Girokonto
      anzufangen.
    </p>
    <div>
      <router-link class="button" to="/financial-statement/asset/add"
        >Neue Anlage hinzufügen</router-link
      >
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "AssetNoAssets",
});
</script>

<style lang="scss" scoped>
.add-button {
  background-color: rgba(155, 77, 202, 0.15);
  width: 100%;

  &:hover {
    background-color: rgba(96, 108, 118, 0.15);
  }
}

.no-asset {
  padding: 0 2rem;
  text-align: center;
}
</style>
