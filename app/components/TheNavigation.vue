<template>
  <nav class="navbar">
    <div class="nav-container">
      <NuxtLink to="/" class="nav-logo">
        <img src="/images/logo.jpg" alt="Souplesse Fitness Logo">
        <span>Souplesse Fitness</span>
      </NuxtLink>

      <ul class="nav-menu" :class="{ active: isMenuOpen }">
        <li><NuxtLink to="/#home" @click="closeMenu">Accueil</NuxtLink></li>
        <li><NuxtLink to="/#about" @click="closeMenu">À propos</NuxtLink></li>
        <li class="dropdown" :class="{ active: isDropdownOpen }">
          <a href="#services" class="dropdown-toggle" @click="toggleDropdown">
            Services
            <i class="fas fa-chevron-down"></i>
          </a>
          <ul class="dropdown-menu">
            <li><NuxtLink to="/#services" @click="closeMenu"><i class="fas fa-dumbbell"></i> Nos Services</NuxtLink></li>
            <li><NuxtLink to="/#pricing" @click="closeMenu"><i class="fas fa-tags"></i> Abonnements</NuxtLink></li>
            <li><NuxtLink to="/#trainers" @click="closeMenu"><i class="fas fa-users"></i> Entraîneurs</NuxtLink></li>
          </ul>
        </li>
        <li><NuxtLink to="/#gallery" @click="closeMenu">Galerie</NuxtLink></li>
        <li><NuxtLink to="/#contact" @click="closeMenu">Contact</NuxtLink></li>
      </ul>

      <div class="nav-auth">
        <NuxtLink to="/auth/login" class="auth-btn login-btn">
          <i class="fas fa-sign-in-alt"></i>
          Connexion
        </NuxtLink>
        <NuxtLink to="/auth/register" class="auth-btn register-btn">
          <i class="fas fa-user-plus"></i>
          Inscription
        </NuxtLink>
      </div>

      <button
        class="nav-toggle"
        :class="{ active: isMenuOpen }"
        aria-label="Menu de navigation"
        :aria-expanded="isMenuOpen.toString()"
        @click="toggleMenu"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
    </div>
  </nav>
</template>

<script setup lang="ts">
const isMenuOpen = ref(false)
const isDropdownOpen = ref(false)

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}

const closeMenu = () => {
  isMenuOpen.value = false
  isDropdownOpen.value = false
}

const toggleDropdown = (e: Event) => {
  if (window.innerWidth <= 768) {
    e.preventDefault()
    isDropdownOpen.value = !isDropdownOpen.value
  }
}

// Change navbar background on scroll
onMounted(() => {
  const navbar = document.querySelector('.navbar')

  window.addEventListener('scroll', () => {
    if (navbar) {
      if (window.scrollY > 100) {
        navbar.style.background = 'rgba(0, 0, 0, 0.98)'
      } else {
        navbar.style.background = 'rgba(0, 0, 0, 0.95)'
      }
    }
  })
})
</script>
