<template>
  <section id="security">
    <div class="content flex-column flex-center">
      <h1>Sicherheit</h1>
      <h2>Der Schutz Deiner Daten hat für uns die höchste Priorität.</h2>
      <p>
        Deine Daten gehören Dir und bleiben Dein Eigentum! Wir speichern keine
        Daten auf unseren Systemen und sammeln keine Informationen über Dich.
      </p>
      <p>
        Niemand außer Dir kann auf Deine Daten zugreifen und Du bleibst zu jedem
        Zeitpunkt anonym.
      </p>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "HomeSecurity",
});
</script>

<style lang="scss" scoped>
h1 {
  font-size: 3.6rem;
}

h2 {
  font-size: 2.8rem;
}

p {
  font-size: 1.8rem;
}

section {
  background-color: var(--color-error);
  color: whitesmoke;
  height: 100vh;
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

  h2 {
    font-size: 3.6rem;
  }

  p {
    font-size: 2.2rem;
  }
}
</style>
