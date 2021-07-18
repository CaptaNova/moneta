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
            ><span>Zum Programmcode</span><ExternalLinkIcon
          /></a>
        </li>
        <li>
          <a :href="licenseUrl" class="external-link" target="_blank"
            ><span>Lizenz: {{ license }}</span
            ><ExternalLinkIcon
          /></a>
        </li>
        <li>
          <span class="no-link">Version: {{ version }}</span>
        </li>
      </ul>
    </div>
  </section>
</template>

<script lang="ts">
import { ExternalLink as ExternalLinkIcon } from "lucide-vue-next";
import { defineComponent } from "vue";

export default defineComponent({
  name: "AboutHome",

  components: {
    ExternalLinkIcon,
  },

  data() {
    return {
      license: process.env.VUE_APP_LICENSE,
      licenseUrl: process.env.VUE_APP_LICENSE_URL,
      version: process.env.VUE_APP_VERSION,
    };
  },
});
</script>

<style lang="scss" scoped>
li {
  border-bottom: 0.1rem solid #e1e1e1;
  margin: 0;
  padding: 0;

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
}

.external-link {
  display: flex;
  flex-flow: row nowrap;
  align-items: center;

  span {
    flex: 1;
    padding-right: var(--padding-x);
  }
}
</style>
