<template>
  <nav>
    <div class="sidebar-header">Moneta</div>
    <ul>
      <li>
        <router-link to="/">
          <GaugeIcon /><span class="nav-text">Übersicht</span>
        </router-link>
      </li>
      <li>
        <router-link to="/financial-statement">
          <SigmaIcon /><span class="nav-text">Vermögensbilanz</span>
        </router-link>
      </li>
      <li>
        <a href="#" @click.prevent="onExport">
          <DownloadIcon /><span class="nav-text">Export</span>
        </a>
      </li>
      <li>
        <router-link to="/about">
          <InfoIcon /><span class="nav-text">App-Information</span>
        </router-link>
      </li>
    </ul>
  </nav>
</template>

<script lang="ts">
import {
  Download as DownloadIcon,
  Gauge as GaugeIcon,
  Info as InfoIcon,
  Sigma as SigmaIcon,
} from "lucide-vue-next";
import { defineComponent } from "vue";

export default defineComponent({
  name: "TheSidebar",

  components: {
    DownloadIcon,
    GaugeIcon,
    InfoIcon,
    SigmaIcon,
  },

  emits: ["export"],

  methods: {
    onExport(): void {
      this.$emit("export");
      // remove the focus from the download element
      if (document.activeElement instanceof HTMLElement)
        document.activeElement.blur();
    },
  },
});
</script>

<style lang="scss" scoped>
nav {
  display: none;
  border-right: 0.1rem solid #e1e1e1;
  font-weight: var(--font-weight-bold);
  height: 100%;

  ul {
    margin: 0;
    padding: 16px 0;
    list-style: none;
  }

  li {
    margin: 0;
    padding: 0;
  }

  a {
    color: inherit;
    display: flex;

    &:focus,
    &:hover {
      background-color: rgba(96, 108, 118, 0.15);
    }
  }

  .router-link-active {
    color: var(--color-primary);
    background-color: rgba(96, 108, 118, 0.15);
  }

  .sidebar-header {
    color: var(--color-primary);
    height: calc(16px + 16px + 24px);
    font-size: 2.4rem;
    font-weight: var(--font-weight-normal);
    line-height: 1;
    justify-content: center;
    align-items: center;
    padding: 16px;
  }
}

@media screen and (min-width: 40rem) {
  nav {
    display: block;
    position: fixed;
    top: 0;
    left: 0;
    width: var(--width-sidebar);
    z-index: var(--z-index-header);
  }
}

@media screen and (min-width: 40rem) and (max-width: 79.99rem) {
  nav {
    line-height: 1;

    a {
      border-left: 4px solid transparent;
      height: 56px;
      flex-flow: column nowrap;
      justify-content: center;
      align-items: center;
      padding-right: 4px;
    }

    .nav-text {
      display: none;
    }

    .router-link-active {
      border-left-color: var(--color-primary);
    }
  }

  .sidebar-header {
    visibility: hidden;
  }
}

@media screen and (min-width: 80rem) {
  nav {
    line-height: 1;
    text-align: left;

    a {
      border-left: 4px solid transparent;
      flex-flow: row nowrap;
      justify-content: flex-start;
      align-items: center;
      padding: 10px 16px 10px 12px;
    }

    .nav-text {
      line-height: 120%;
      padding-left: 16px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }

    .router-link-active {
      border-left-color: var(--color-primary);
    }
  }

  .sidebar-header {
    display: flex;
  }
}
</style>
