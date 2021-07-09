<template>
  <router-view />
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "App",

  created() {
    // see https://stackoverflow.com/questions/7317273/warn-user-before-leaving-web-page-with-unsaved-changes
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
  --header-height: 56px;
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
  word-wrap: break-word;
}

.flex-center {
  align-items: center;
  justify-content: center;
}

.flex-column {
  display: flex;
  flex-direction: column;
}

.h1,
.h2,
.h3,
.h4,
.h5,
.h6 {
  font-weight: 300;
  letter-spacing: -0.1rem;
  margin-bottom: 2rem;
  margin-top: 0;
}

.h1 {
  font-size: 4.6rem;
  line-height: 1.2;
}

.h2 {
  font-size: 3.6rem;
  line-height: 1.25;
}

.h3 {
  font-size: 2.8rem;
  line-height: 1.3;
}

.h4 {
  font-size: 2.2rem;
  letter-spacing: -0.08rem;
  line-height: 1.35;
}

.h5 {
  font-size: 1.8rem;
  letter-spacing: -0.05rem;
  line-height: 1.5;
}

.h6 {
  font-size: 1.6rem;
  letter-spacing: 0;
  line-height: 1.4;
}
</style>
