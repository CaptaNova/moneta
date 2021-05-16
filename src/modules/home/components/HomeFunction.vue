<template>
  <section id="function">
    <div class="content">
      <h2>Funktionen</h2>
      <h3>Kapitalanlagen</h3>
      <p>Übersicht über Deine Konten und Depots.</p>
      <p>Übersicht über Deine Lebens- und Rentenversicherungen.</p>
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
section {
  box-sizing: border-box;
  height: 100vh;
  padding: 2rem;
}

#function {
  border-top: 0.1rem solid #9b4dca;
}

.content {
  margin-top: 2rem;

  h3 {
    padding-bottom: 3rem;
    padding-top: 3rem;
  }

  p {
    font-size: 2rem;
  }
}
</style>
