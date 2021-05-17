<template>
  <section id="about">
    <div class="content flex-column">
      <h1>Über Moneta</h1>
      <p>
        2019 wurde mit der DIN 77230 eine Norm veröffentlicht, die einen Prozess
        für die Basis-Finanzanalyse eines Privathaushalt festlegt. Es geht dabei
        in erster Linie darum Dir einen Überblick über Deine finanzielle
        Situation zu verschaffen.
      </p>
      <p>
        Damit kannst Du Finanzthemen identifizieren, die Du im Aschluss (zum
        Beispiel im Rahmen einer Finanzberatung) genauer betrachten möchtest.
      </p>
      <p>
        Unser Ziel ist es, die DIN 77230 in Moneta abzubilden um sie Dir
        kostenfrei zur Verfügung stellen zu können. Im Moment sind wir von
        diesem Ziel noch ein großes Stück entfernt, doch wir arbeiten daran die
        App jeden Tag ein Stück besser zu machen.
      </p>
      <p><strong>Moneta ist keine Finanzberatung!</strong></p>

      <blockquote>
        <p>
          <small>
            Moneta ist Open Source und steht unter der
            <a
              href="https://github.com/CaptaNova/moneta/blob/main/LICENSE"
              target="_blank"
              >MIT Lizenz</a
            >.<br />
            Created with &hearts; by
            <a href="https://captanova.de" target="_blank">CaptaNova</a>.
          </small>
        </p>
      </blockquote>

      <p class="about">
        <router-link to="about" class="button button-clear"
          >App-Informationen</router-link
        >
      </p>
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

.about {
  border-top: 0.1rem solid var(--color-primary);
  margin-top: var(--padding-y);
  padding-top: var(--padding-y);
  text-align: center;
}

.content {
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

  .content {
    height: 100%;
    justify-content: center;
    margin: 0 auto;
    max-width: var(--width-max);
    padding: var(--padding-y) var(--padding-x);
    text-align: left;
  }
}
</style>
