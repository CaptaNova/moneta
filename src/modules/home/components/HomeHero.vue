<template>
  <section id="hero">
    <div class="content">
      <h2>Bist Du reich?</h2>
      <p>
        Weißt Du wieviel Vermögen Du besitzt und wie es verteilt ist?<br />
        Finde es jetzt heraus!
      </p>
      <div class="start-review">
        <router-link class="button" to="/financial-statement"
          >Analyse starten</router-link
        >
      </div>
      <div class="resume-review">
        <UploadButton text="Analyse aktualisieren" />
      </div>
      <div class="more-information">
        <a href="#function">Mehr erfahren ...</a>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import UploadButton from "@/common/components/UploadButton.vue";

export default defineComponent({
  name: "HomeHero",

  components: {
    UploadButton,
  },
});
</script>

<style lang="scss" scoped>
section {
  box-sizing: border-box;
  height: 100vh;
  padding: 2rem;
}

.content {
  display: flex;
  flex-direction: column;
  margin-top: 10rem;
  text-align: left;

  a {
    align-self: center;
  }

  h2 {
    color: #9b4dca;
  }

  p {
    font-size: 2rem;
  }
}

.resume-review,
.start-review {
  margin-top: 2rem;
}

.more-information {
  margin-top: 4rem;

  a {
    font-weight: 700;
  }
}
</style>
