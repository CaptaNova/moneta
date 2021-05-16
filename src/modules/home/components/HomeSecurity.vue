<template>
  <section id="security">
    <div class="content">
      <h2>Sicherheit</h2>
      <h3>Der Schutz Deiner Daten hat für uns die höchste Priorität.</h3>
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
section {
  box-sizing: border-box;
  height: 100vh;
  padding: var(--padding-x);
}

#security {
  background-color: firebrick;
  color: whitesmoke;
}

.content {
  margin-top: var(--padding-x);

  h3 {
    padding-bottom: 3rem;
    padding-top: 3rem;
  }

  p {
    font-size: 2rem;
  }
}
</style>
