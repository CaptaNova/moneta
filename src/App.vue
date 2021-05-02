<template>
  <header>
    <div class="wrapper">Meine Vermögensbilanz</div>
  </header>
  <main>
    <div class="wrapper">
      <router-view />
    </div>
  </main>
</template>

<style lang="scss">
#app {
  color: #606c76;
  font-family: Roboto, "Helvetica Neue", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}

header {
  background: #f4f5f6;
  border-bottom: 0.1rem solid #9b4dca;
  font-size: 2rem;
  height: 6.2rem;
  margin-bottom: 2rem;
  padding-top: 1.5rem;
}

.wrapper {
  height: 100%;
  margin: 0 auto;
  max-width: 120rem;
  text-align: left;
}
</style>
