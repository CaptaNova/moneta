<template>
  <TheSidebar v-if="!isHome" @export="exportAnalysis" />
  <TheHeader
    v-if="headerTitle"
    :navigation="headerNavigation"
    :title="headerTitle"
    @back="navigateBack"
  />
  <main :class="{ home: isHome }">
    <router-view />
  </main>
</template>

<script lang="ts">
import TheHeader from "@/components/TheHeader.vue";
import TheSidebar from "@/components/TheSidebar.vue";
import { defineComponent } from "vue";
import { mapActions, mapGetters } from "vuex";
import { createDownloadFile, createDownloadFileName } from "./utils";

export default defineComponent({
  name: "App",

  components: {
    TheHeader,
    TheSidebar,
  },

  computed: {
    ...mapGetters(["accountList"]),

    headerAction(): string | undefined {
      return this.$route.meta.headerAction as string | undefined;
    },

    headerNavigation(): string | undefined {
      return this.$route.meta.headerNavigation as string | undefined;
    },

    headerTitle(): string | undefined {
      return this.$route.meta.headerTitle as string | undefined;
    },

    isHome(): boolean {
      return this.$route.name === "home";
    },
  },

  methods: {
    ...mapActions(["resetDirty"]),

    exportAnalysis(): void {
      // see https://medium.com/js-dojo/force-file-download-in-vuejs-using-axios-a7fe1b5dfe7b
      const data = createDownloadFile(this.accountList);

      const link = document.createElement("a");
      link.href = window.URL.createObjectURL(new Blob([data]));
      link.download = createDownloadFileName();
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      this.resetDirty();
    },

    navigateBack(): void {
      this.$router.back();
    },
  },

  created() {
    // see https://stackoverflow.com/questions/7317273/warn-user-before-leaving-web-page-with-unsaved-changes
    window.addEventListener("beforeunload", (event) => {
      if (this.$store.state.FinancialStatementModule.dirty) {
        const confirmationMessage =
          "Du hast etwas geändert und die Daten noch nicht heruntergeladen. " +
          "Wenn du die Seite verlässt, werden deine Änderungen verloren gehen.";
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
  --width-sidebar: 0;
  --z-index-header: 2;

  @media (min-width: 40rem) {
    --padding-x: 4rem;
  }

  @media (min-width: 60rem) {
    --padding-x: 6rem;
  }

  @media (min-width: 40rem) {
    --width-sidebar: 56px;
  }

  @media (min-width: 80rem) {
    --width-sidebar: 256px;
  }
}

header,
main,
section {
  box-sizing: border-box;
}

header,
main {
  margin-left: var(--width-sidebar);
}

main {
  padding-top: calc(6rem + 1rem);

  &.home {
    // home has no header and no sidebar
    margin-left: 0;
    padding-top: 0;
  }
}

#app {
  color: #606c76;
  font-family: Roboto, "Helvetica Neue", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
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

.invisible {
  visibility: hidden;
}

/*
sm: 576px
md: 768px
lg: 1012px
xl: 1280px
*/
</style>
