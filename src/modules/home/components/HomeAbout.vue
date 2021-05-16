<template>
  <section id="about">
    <div class="content">
      <h2>Über uns</h2>
      <p>
        Moneta ist ein Angebot von
        <a href="https://www.captanova.de">CaptaNova</a>.
      </p>
      <h4>Anschrift</h4>
      <p>
        Christoph Nölke<br />
        Josef-Priller-Straße 2<br />
        86159 Augsburg
      </p>
      <h4>Kontakt</h4>
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
section {
  box-sizing: border-box;
  height: 100vh;
  padding: var(--padding-x);
}

.content {
  margin-top: var(--padding-x);
  text-align: left;

  h2 {
    text-align: center;
  }
}
</style>
