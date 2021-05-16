<template>
  <main>
    <div class="content">
      <h2>Erwischt!</h2>
      <p>
        Wir haben gerade unser Geld gezählt und waren wohl einen Moment nicht
        aufmerksam. Peinlich!
      </p>
      <div class="action">
        <router-link class="button" to="/financial-statement"
          >Zruück zur Finanzübersicht</router-link
        >
      </div>
    </div>
  </main>
</template>

<style lang="scss" scoped>
main {
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: -5rem;
  min-height: 100vh;
}

.action {
  margin-top: 4rem;
}

.content {
  padding: 2rem;

  p {
    font-size: 2rem;
  }
}
</style>
