<template>
  <router-view />
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "App",

  created() {
    window.addEventListener("beforeunload", (event) => {
      if (this.$store.state.FinancialStatementModule.dirty) {
        const confirmationMessage =
          "Du hast etwas geändert und die Daten noch nicht heruntergeladen. " +
          "Wenn du die Seite verlääst, werden deine Änderungen verloren gehen.";
        event.preventDefault();
        event.returnValue = confirmationMessage;
        return confirmationMessage;
      }
    });
  },
});
</script>

<style lang="scss">
:root {
  --color-primary: #9b4dca;
  --color-error: firebrick;
  --font-weight-bold: 700;
  --font-weight-normal: 300;
  --padding-x: 2rem;
  --padding-y: 2rem;
  --width-max: 112rem;
  --z-index-header: 2;

  @media (min-width: 40rem) {
    --padding-x: 4rem;
  }

  @media (min-width: 60rem) {
    --padding-x: 6rem;
  }
}

header,
main,
section {
  box-sizing: border-box;
}

#app {
  color: #606c76;
  font-family: Roboto, "Helvetica Neue", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}

.flex-center {
  align-items: center;
  justify-content: center;
}

.flex-column {
  display: flex;
  flex-direction: column;
}
</style>
