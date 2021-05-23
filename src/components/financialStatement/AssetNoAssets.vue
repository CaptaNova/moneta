<template>
  <section class="no-asset">
    <div class="content flex-column flex-center">
      <h1>Arm wie eine Kirchenmaus?</h1>
      <p>Das glaube ich Dir nicht! 😉</p>
      <p>
        Füge Deine Anlagen hinzu. Ich empfehle Dir mit Deinem Girokonto
        anzufangen.
      </p>
      <div class="actions">
        <router-link class="button" to="/financial-statement/asset/add"
          >Neue Anlage hinzufügen</router-link
        >
      </div>
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
h1 {
  font-size: 3.6rem;
  margin-bottom: var(--padding-x);
}

p {
  font-size: 1.8rem;
}

section {
  height: 100vh;
}

.actions {
  margin-top: var(--padding-x);
}

.content {
  height: 100%;
  margin: 0 auto;
  max-width: var(--width-max);
  padding: var(--padding-y) var(--padding-x);
}

@media (min-width: 40rem) {
  h1 {
    font-size: 4.6rem;
  }

  p {
    font-size: 2.2rem;
  }
}
</style>
