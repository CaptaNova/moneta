<template>
  <section id="function">
    <div class="content">
      <h1>Funktionen</h1>
      <h2>Kapitalanlagen</h2>
      <ul>
        <li>Übersicht über Deine Konten und Depots.</li>
        <li>Übersicht über Deine Lebens- und Rentenversicherungen.</li>
      </ul>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "HomeFunction",
});
</script>

<style lang="scss" scoped>
h1 {
  font-size: 3.6rem;
  text-align: center;
}

h2 {
  font-size: 2.8rem;
  text-align: center;
}

ul {
  font-size: 1.8rem;
  list-style-type: none;
  padding: var(--padding-y) var(--padding-x);
}

section {
  min-height: 100vh;
  padding: 10vh 0;
}

#function {
  border-top: 0.1rem solid var(--color-primary);
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

  ul {
    font-size: 2.2rem;
  }
}
</style>
