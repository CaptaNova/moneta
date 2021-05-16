<template>
  <section id="about">
    <div class="content flex-column">
      <h1>Über uns</h1>
      <p>
        Moneta ist ein Angebot von
        <a href="https://www.captanova.de">CaptaNova</a>.
      </p>
      <h3>Anschrift</h3>
      <p>
        Christoph Nölke<br />
        Josef-Priller-Straße 2<br />
        86159 Augsburg
      </p>
      <h3>Kontakt</h3>
      <p>Wenn Du Fragen hast, erreichst Du uns per E-Mail:</p>
      <p>
        <a href="mailto:post@christoph-noelke.de">post@christoph-noelke.de</a>
      </p>
      <blockquote>
        <p>
          <a href="https://github.com/CaptaNova/moneta">Moneta</a> ist Open
          Source und steht unter der
          <a href="https://github.com/CaptaNova/moneta/blob/main/LICENSE"
            >MIT Lizenz</a
          >.
        </p>
      </blockquote>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "HomeAbout",
});
</script>

<style lang="scss" scoped>
h1 {
  font-size: 3.6rem;
  text-align: center;
}

h3 {
  font-size: 2.2rem;
}

p {
  font-size: 1.8rem;
}

section {
  height: 100vh;
}

.content {
  height: 100%;
  justify-content: center;
  margin: 0 auto;
  max-width: var(--width-max);
  padding: var(--padding-y) var(--padding-x);
  text-align: left;
}

@media (min-width: 40rem) {
  h1 {
    font-size: 4.6rem;
  }

  h3 {
    font-size: 2.8rem;
  }

  p {
    font-size: 2.2rem;
  }
}
</style>
