<template>
  <section id="hero">
    <div class="content flex-column flex-center">
      <h1>Bist Du reich?</h1>
      <div class="start-review">
        <p>
          Weißt Du wieviel Vermögen Du besitzt und wie es verteilt ist?<br />
          Finde es jetzt heraus!
        </p>
        <div>
          <router-link class="button" to="/financial-statement"
            >Analyse starten</router-link
          >
        </div>
      </div>
      <div class="resume-review">
        <p>
          Du hast schon eine Analyse und möchtest diese anschauen oder
          aktualisieren?
        </p>
        <UploadButton text="Analyse aktualisieren" />
      </div>
      <div class="more-information">
        <a href="#function" class="button button-clear">Mehr erfahren ...</a>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import UploadButton from "@/components/UploadButton.vue";

export default defineComponent({
  name: "HomeHero",

  components: {
    UploadButton,
  },
});
</script>

<style lang="scss" scoped>
h1 {
  color: var(--color-primary);
  font-size: 3.6rem;
}

p {
  font-size: 1.8rem;
}

section {
  min-height: 100vh;
  padding: 10vh 0;
}

.content {
  height: 100%;
  margin: 0 auto;
  max-width: var(--width-max);
  padding: var(--padding-y) var(--padding-x);
}

.resume-review,
.start-review {
  margin-bottom: 4rem;
}

@media (min-width: 40rem) {
  h1 {
    font-size: 4.6rem;
  }

  p {
    font-size: 2.2rem;
  }

  .resume-review,
  .start-review {
    margin-bottom: 6rem;
  }
}
</style>
