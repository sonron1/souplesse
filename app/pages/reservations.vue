<template>
  <div class="reservations-page">
    <div class="container">
      <h1>Mes Réservations</h1>
      <p>Page de réservations à venir...</p>
      <NuxtLink to="/" class="btn btn-primary">Retour à l'accueil</NuxtLink>
    </div>
  </div>
</template>

<style scoped>
.reservations-page {
  min-height: 100vh;
  padding: 8rem 2rem 4rem;
  background: var(--bg-light);
}

.container {
  max-width: 1200px;
  margin: 0 auto;
}

.container h1 {
  color: var(--secondary-color);
  margin-bottom: 2rem;
}
</style>
