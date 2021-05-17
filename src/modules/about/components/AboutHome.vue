<template>
  <section>
    <div class="content">
      <ul>
        <!-- Neue Funktionen -->
        <!-- Hilfe () oder FAQ -->
        <!-- Datenschutz -->
        <!-- Rechtliche Hinweise oder Open Source-Lizenzen oder Software-Lizenzen -->
        <li>
          <router-link to="/about/imprint">Impressum</router-link>
        </li>
        <li>
          <a
            href="https://github.com/CaptaNova/moneta"
            class="external-link"
            target="_blank"
            >Zum Programmcode</a
          >
        </li>
        <li>
          <span class="no-link">Lizenz: {{ license }}</span>
        </li>
        <li>
          <span class="no-link">Version: {{ version }}</span>
        </li>
      </ul>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "AboutHome",

  data() {
    return {
      license: process.env.VUE_APP_LICENSE,
      version: process.env.VUE_APP_VERSION,
    };
  },
});
</script>

<style lang="scss" scoped>
li {
  border-bottom: 0.1rem solid #e1e1e1;
  line-height: 1;
  margin: 0;
  padding: 0.5rem 0;

  &:last-of-type {
    border: none;
  }

  a,
  .no-link {
    display: block;
    padding: var(--padding-y) 0;
  }
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
  text-align: left;
}

.external-link {
  position: relative;
  &::after {
    content: "→";
    position: absolute;
    right: 0;
  }
}

@media (min-width: 40rem) {
  p,
  ul {
    font-size: 2.2rem;
  }
}
</style>
