<template>
  <footer class="footer">
    <div class="container">
      <div class="footer-content">
        <div class="footer-section">
          <div class="footer-logo">
            <img src="/images/logo.jpg" alt="Souplesse Fitness">
            <span>Souplesse Fitness</span>
          </div>
          <p>Votre partenaire pour une transformation physique complète dans un environnement moderne et motivant.</p>
        </div>

        <div class="footer-section">
          <h3>Liens Rapides</h3>
          <ul>
            <li><NuxtLink to="/#home">Accueil</NuxtLink></li>
            <li><NuxtLink to="/#about">À propos</NuxtLink></li>
            <li><NuxtLink to="/#services">Services</NuxtLink></li>
            <li><NuxtLink to="/#pricing">Abonnements</NuxtLink></li>
            <li><NuxtLink to="/#contact">Contact</NuxtLink></li>
          </ul>
        </div>

        <div class="footer-section">
          <h3>Compte</h3>
          <ul>
            <li><NuxtLink to="/auth/login">Connexion</NuxtLink></li>
            <li><NuxtLink to="/auth/register">Inscription</NuxtLink></li>
            <li><NuxtLink to="/profile">Mon Profil</NuxtLink></li>
            <li><NuxtLink to="/reservations">Mes Réservations</NuxtLink></li>
          </ul>
        </div>

        <div class="footer-section">
          <h3>Horaires</h3>
          <ul>
            <li>Lundi - Vendredi: 6h00 - 22h00</li>
            <li>Samedi - Dimanche: 8h00 - 20h00</li>
            <li>Jours fériés: 8h00 - 18h00</li>
          </ul>
        </div>

        <div class="footer-section">
          <h3>Suivez-nous</h3>
          <div class="social-links">
            <a href="#" aria-label="Facebook"><i class="fab fa-facebook"></i></a>
            <a href="#" aria-label="Instagram"><i class="fab fa-instagram"></i></a>
            <a href="#" aria-label="YouTube"><i class="fab fa-youtube"></i></a>
            <a href="#" aria-label="Twitter"><i class="fab fa-twitter"></i></a>
          </div>
        </div>
      </div>

      <div class="footer-bottom">
        <p>&copy; {{ currentYear }} Souplesse Fitness. Tous droits réservés.</p>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
const currentYear = new Date().getFullYear()
</script>
