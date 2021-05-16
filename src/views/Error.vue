<template>
  <main>
    <div class="content flex-column flex-center">
      <h1>Erwischt!</h1>
      <p>
        Wir haben gerade unser Geld gezählt und waren wohl einen Moment nicht
        aufmerksam. Peinlich!
      </p>
      <div class="actions">
        <router-link class="button" to="/financial-statement"
          >Zruück zur Finanzübersicht</router-link
        >
      </div>
    </div>
  </main>
</template>

<style lang="scss" scoped>
h1 {
  font-size: 3.6rem;
  margin-bottom: var(--padding-x);
}

main {
  height: 100vh;
}

p {
  font-size: 1.8rem;
}

.actions {
  margin-top: var(--padding-x);
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

  p {
    font-size: 2.2rem;
  }
}
</style>
