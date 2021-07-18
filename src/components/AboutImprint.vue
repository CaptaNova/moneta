<template>
  <section>
    <div class="content">
      <h2>Herausgeber</h2>

      <p><a href="https://www.captanova.de" target="_blank">CaptaNova</a></p>

      <hr />

      <h3>Anschrift</h3>
      <p>
        Christoph Nölke<br />
        Josef-Priller-Straße 2<br />
        86159 Augsburg
      </p>

      <hr />

      <h3>Kontakt</h3>
      <p>Wenn Du Fragen hast, erreichst Du uns per E-Mail:</p>
      <p>
        <a href="mailto:post@christoph-noelke.de" target="_blank"
          >post@christoph-noelke.de</a
        >
      </p>

      <hr />

      <h3>EU-Streitschlichtung</h3>
      <p>
        Gemäß § 36 VSBG (Verbraucherstreitbeilegungsgesetz – Gesetz über die
        alternative Streitbeilegung in Verbrauchersachen) möchten wir Sie über
        die Online-Streitbeilegungsplattform informieren.
      </p>
      <p>
        Verbraucher haben die Möglichkeit, Beschwerden an die Online
        Streitbeilegungsplattform der Europäischen Kommission unter
        <a href="http://ec.europa.eu/odr?tid=321244694" target="_blank"
          >http://ec.europa.eu/odr?tid=321244694</a
        >
        zu richten. Die dafür notwendigen Kontaktdaten finden Sie oberhalb in
        unserem Impressum.
      </p>
      <p>
        Wir möchten Sie jedoch darauf hinweisen, dass wir nicht bereit oder
        verpflichtet sind, an Streitbeilegungsverfahren vor einer
        Verbraucherschlichtungsstelle teilzunehmen.
      </p>

      <hr />

      <h3>Urheberrechtliche Hinweise</h3>
      <p>
        Sofern nicht anders angegeben unterliegen alle Inhalte dieser Webseite
        (Bilder, Fotos, Texte, Videos) dem Urheberrecht der Bundesrepublik
        Deutschland. Bitte fragen Sie uns bevor Sie die Inhalte dieser Website
        verbreiten, vervielfältigen oder verwerten wie zum Beispiel auf anderen
        Websites erneut veröffentlichen. Falls notwendig, werden wir die
        unerlaubte Nutzung von Teilen der Inhalte unserer Seite rechtlich
        verfolgen.
      </p>
      <p>
        Sollten Sie auf dieser Webseite Inhalte finden, die das Urheberrecht
        verletzen, bitten wir Sie uns zu kontaktieren.
      </p>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "AboutImprint",

  data() {
    return {
      version: process.env.VUE_APP_VERSION,
    };
  },
});
</script>

<style lang="scss" scoped>
li {
  padding: var(--padding-y) 0;
  border-bottom: 1px solid gray;
}
p,
ul {
  font-size: 1.8rem;
}
ul {
  list-style-type: none;
}

.content {
  margin: 0 auto;
  max-width: var(--width-max);
  padding: var(--padding-y) calc(2 * var(--padding-x));
}

@media (min-width: 40rem) {
  p,
  ul {
    font-size: 2.2rem;
  }
}
</style>
