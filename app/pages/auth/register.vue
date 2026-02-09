<template>
  <div class="auth-page">
    <div class="auth-container">
      <h1>Inscription</h1>
      <p>Page d'inscription à venir...</p>
      <NuxtLink to="/" class="btn btn-primary">Retour à l'accueil</NuxtLink>
    </div>
  </div>
</template>

<style scoped>
.auth-page {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  background: linear-gradient(135deg, #000 0%, #333 100%);
  color: white;
}

.auth-container {
  text-align: center;
  background: rgba(255, 255, 255, 0.1);
  padding: 3rem;
  border-radius: 20px;
  backdrop-filter: blur(10px);
}

.auth-container h1 {
  color: var(--primary-color);
  margin-bottom: 1rem;
}
</style>
