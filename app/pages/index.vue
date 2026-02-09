<template>
  <div>
    <!-- Hero Section -->
    <section id="home" class="hero">
      <div class="hero-content">
        <div class="hero-text">
          <h1>Transformez Votre Corps avec <span class="highlight">Souplesse Fitness</span></h1>
          <p>Découvrez une nouvelle façon de vous entraîner dans notre salle de sport moderne équipée des dernières technologies.</p>
          <div class="hero-buttons">
            <NuxtLink to="/auth/register" class="btn btn-primary">
              <i class="fas fa-rocket"></i>
              Commencer maintenant
            </NuxtLink>
            <a href="#services" class="btn btn-secondary">
              <i class="fas fa-info-circle"></i>
              Nos Services
            </a>
          </div>
        </div>
        <div class="hero-image">
          <img src="/images/banner.jpg" alt="Souplesse Fitness Hero">
        </div>
      </div>
      <div class="hero-stats">
        <div class="stat-item">
          <h3>500+</h3>
          <p>Membres Satisfaits</p>
        </div>
        <div class="stat-item">
          <h3>10+</h3>
          <p>Entraîneurs Experts</p>
        </div>
        <div class="stat-item">
          <h3>5</h3>
          <p>Années d'Expérience</p>
        </div>
      </div>
    </section>

    <!-- About Section -->
    <section id="about" class="about">
      <div class="container">
        <div class="section-header">
          <h2>À Propos de Souplesse Fitness</h2>
          <p>Votre partenaire pour une transformation physique complète</p>
        </div>
        <div class="about-content">
          <div class="about-text">
            <h3>Notre Mission</h3>
            <p>Chez Souplesse Fitness, nous croyons que chaque personne mérite d'atteindre ses objectifs de fitness dans un environnement motivant et professionnel.</p>
            <ul>
              <li><i class="fas fa-check"></i> Équipements de dernière génération</li>
              <li><i class="fas fa-check"></i> Entraîneurs certifiés et expérimentés</li>
              <li><i class="fas fa-check"></i> Programmes personnalisés</li>
              <li><i class="fas fa-check"></i> Ambiance conviviale et motivante</li>
            </ul>
            <div class="about-cta">
              <NuxtLink to="/auth/register" class="btn btn-primary">
                <i class="fas fa-user-plus"></i>
                Rejoignez-nous
              </NuxtLink>
            </div>
          </div>
          <div class="about-image">
            <img src="/images/pexels-nappy.jpg" alt="À propos">
          </div>
        </div>
      </div>
    </section>

    <!-- Services Section -->
    <section id="services" class="services">
      <div class="container">
        <div class="section-header">
          <h2>Nos Services</h2>
          <p>Des programmes adaptés à tous vos besoins</p>
        </div>
        <div class="services-grid">
          <div class="service-card">
            <div class="service-icon">
              <i class="fas fa-dumbbell"></i>
            </div>
            <h3>Musculation</h3>
            <p>Développez votre force et votre masse musculaire avec nos équipements professionnels.</p>
          </div>
          <div class="service-card">
            <div class="service-icon">
              <i class="fas fa-heart"></i>
            </div>
            <h3>Cardio Training</h3>
            <p>Améliorez votre endurance cardiovasculaire avec nos machines cardio dernière génération.</p>
          </div>
          <div class="service-card">
            <div class="service-icon">
              <i class="fas fa-users"></i>
            </div>
            <h3>Cours Collectifs</h3>
            <p>Participez à nos cours de groupe dynamiques et motivants dans une ambiance conviviale.</p>
          </div>
          <div class="service-card">
            <div class="service-icon">
              <i class="fas fa-user-tie"></i>
            </div>
            <h3>Coaching Personnel</h3>
            <p>Bénéficiez d'un accompagnement personnalisé avec nos entraîneurs professionnels.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Pricing Section -->
    <section id="pricing" class="pricing">
      <div class="container">
        <div class="section-header">
          <h2>Nos Abonnements</h2>
          <p>Choisissez l'abonnement qui vous convient le mieux</p>
        </div>
        <div class="pricing-grid">
          <div class="pricing-card">
            <div class="pricing-header">
              <h3>Découverte</h3>
              <div class="price">
                <span class="amount">15 000</span>
                <span class="currency">F CFA</span>
                <span class="period">/mois</span>
              </div>
            </div>
            <div class="pricing-features">
              <ul>
                <li><i class="fas fa-check"></i> Accès salle de musculation</li>
                <li><i class="fas fa-check"></i> Espace cardio</li>
                <li><i class="fas fa-check"></i> Vestiaires & douches</li>
                <li><i class="fas fa-times"></i> Cours collectifs</li>
                <li><i class="fas fa-times"></i> Coaching personnel</li>
              </ul>
            </div>
            <div class="pricing-footer">
              <NuxtLink to="/auth/register" class="btn btn-outline">
                <i class="fas fa-arrow-right"></i>
                Choisir
              </NuxtLink>
            </div>
          </div>

          <div class="pricing-card featured">
            <div class="pricing-badge">Le Plus Populaire</div>
            <div class="pricing-header">
              <h3>Premium</h3>
              <div class="price">
                <span class="amount">30 000</span>
                <span class="currency">F CFA</span>
                <span class="period">/mois</span>
              </div>
            </div>
            <div class="pricing-features">
              <ul>
                <li><i class="fas fa-check"></i> Accès salle de musculation</li>
                <li><i class="fas fa-check"></i> Espace cardio</li>
                <li><i class="fas fa-check"></i> Vestiaires & douches</li>
                <li><i class="fas fa-check"></i> Cours collectifs illimités</li>
                <li><i class="fas fa-check"></i> 2 séances coaching/mois</li>
                <li><i class="fas fa-check"></i> Programme nutrition</li>
              </ul>
            </div>
            <div class="pricing-footer">
              <NuxtLink to="/auth/register" class="btn btn-primary">
                <i class="fas fa-crown"></i>
                Choisir
              </NuxtLink>
            </div>
          </div>

          <div class="pricing-card">
            <div class="pricing-header">
              <h3>Elite</h3>
              <div class="price">
                <span class="amount">50 000</span>
                <span class="currency">F CFA</span>
                <span class="period">/mois</span>
              </div>
            </div>
            <div class="pricing-features">
              <ul>
                <li><i class="fas fa-check"></i> Accès salle de musculation</li>
                <li><i class="fas fa-check"></i> Espace cardio</li>
                <li><i class="fas fa-check"></i> Vestiaires & douches</li>
                <li><i class="fas fa-check"></i> Cours collectifs illimités</li>
                <li><i class="fas fa-check"></i> Coaching personnel illimité</li>
                <li><i class="fas fa-check"></i> Programme nutrition</li>
                <li><i class="fas fa-check"></i> Suivi personnalisé</li>
              </ul>
            </div>
            <div class="pricing-footer">
              <NuxtLink to="/auth/register" class="btn btn-outline">
                <i class="fas fa-star"></i>
                Choisir
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Trainers Section -->
    <section id="trainers" class="trainers">
      <div class="container">
        <div class="section-header">
          <h2>Nos Entraîneurs</h2>
          <p>Une équipe d'experts à votre service</p>
        </div>
        <div class="trainers-grid">
          <div class="trainer-card">
            <div class="trainer-image">
              <img src="/images/edgar-chaparro.jpg" alt="Entraîneur">
            </div>
            <div class="trainer-info">
              <h3>Alexandre Martin</h3>
              <p>Spécialiste Musculation</p>
              <div class="trainer-social">
                <a href="#"><i class="fab fa-facebook"></i></a>
                <a href="#"><i class="fab fa-instagram"></i></a>
                <a href="#"><i class="fab fa-linkedin"></i></a>
              </div>
            </div>
          </div>
          <div class="trainer-card">
            <div class="trainer-image">
              <img src="/images/madison-lavern.jpg" alt="Entraîneur">
            </div>
            <div class="trainer-info">
              <h3>Sophie Dubois</h3>
              <p>Coach Fitness & Nutrition</p>
              <div class="trainer-social">
                <a href="#"><i class="fab fa-facebook"></i></a>
                <a href="#"><i class="fab fa-instagram"></i></a>
                <a href="#"><i class="fab fa-linkedin"></i></a>
              </div>
            </div>
          </div>
          <div class="trainer-card">
            <div class="trainer-image">
              <img src="/images/pexels-zakaria.jpg" alt="Entraîneur">
            </div>
            <div class="trainer-info">
              <h3>Pierre Moreau</h3>
              <p>Entraîneur Cardio</p>
              <div class="trainer-social">
                <a href="#"><i class="fab fa-facebook"></i></a>
                <a href="#"><i class="fab fa-instagram"></i></a>
                <a href="#"><i class="fab fa-linkedin"></i></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Gallery Section -->
    <section id="gallery" class="gallery">
      <div class="container">
        <div class="section-header">
          <h2>Notre Salle</h2>
          <p>Découvrez nos installations modernes</p>
        </div>
        <div class="gallery-grid">
          <div class="gallery-item" @click="openLightbox('/images/pexels-mastercowley.jpg', 'Salle de musculation')">
            <img src="/images/pexels-mastercowley.jpg" alt="Salle de musculation">
            <div class="gallery-overlay">
              <h3>Espace Musculation</h3>
            </div>
          </div>
          <div class="gallery-item" @click="openLightbox('/images/pexelsvictorfreitas.jpg', 'Espace cardio')">
            <img src="/images/pexelsvictorfreitas.jpg" alt="Espace cardio">
            <div class="gallery-overlay">
              <h3>Zone Cardio</h3>
            </div>
          </div>
          <div class="gallery-item" @click="openLightbox('/images/pexels-nappy-.jpg', 'Cours collectifs')">
            <img src="/images/pexels-nappy-.jpg" alt="Cours collectifs">
            <div class="gallery-overlay">
              <h3>Salle de Cours</h3>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Contact Section -->
    <section id="contact" class="contact">
      <div class="container">
        <div class="section-header">
          <h2>Contactez-nous</h2>
          <p>Prêt à commencer votre transformation ?</p>
        </div>
        <div class="contact-content">
          <div class="contact-info">
            <div class="contact-item">
              <i class="fas fa-map-marker-alt"></i>
              <div>
                <h3>Adresse</h3>
                <p>Face Clôture Iita au bord des pavés<br>Cotonou, Bénin</p>
              </div>
            </div>
            <div class="contact-item">
              <i class="fas fa-phone"></i>
              <div>
                <h3>Téléphone</h3>
                <p>+229 01 96 11 61 36<br>+229 01 96 77 35 09</p>
              </div>
            </div>
            <div class="contact-item">
              <i class="fas fa-envelope"></i>
              <div>
                <h3>Email</h3>
                <p>souplessefitness@hotmail.fr</p>
              </div>
            </div>
            <div class="contact-item">
              <i class="fas fa-clock"></i>
              <div>
                <h3>Horaires</h3>
                <p>Lun - Ven: 7h00 - 22h00<br>Sam: 7h00 - 20h00<br>Dim & Jours fériés: 7h00 - 14h00</p>
              </div>
            </div>
          </div>
          <form class="contact-form" @submit.prevent="handleSubmit">
            <input v-model="form.name" type="text" placeholder="Votre nom" required>
            <input v-model="form.email" type="email" placeholder="Votre email" required>
            <input v-model="form.phone" type="tel" placeholder="Votre téléphone">
            <textarea v-model="form.message" placeholder="Votre message" rows="5" required></textarea>
            <button type="submit" class="btn btn-primary" :disabled="isSubmitting">
              <i :class="isSubmitting ? 'fas fa-spinner fa-spin' : 'fas fa-paper-plane'"></i>
              {{ isSubmitting ? 'Envoi en cours...' : 'Envoyer' }}
            </button>
          </form>
        </div>
      </div>
    </section>

    <!-- Map Section -->
    <section id="map1" class="map-section">
      <div class="container">
        <div class="section-header">
          <h2>Notre Localisation</h2>
          <p>Trouvez-nous facilement</p>
        </div>
        <div class="map-container">
          <div id="map" ref="mapElement" class="map"></div>
          <div class="map-info">
            <h3>Souplesse Fitness</h3>
            <p><i class="fas fa-map-marker-alt"></i> Face Clôture Iita au bord des pavés, Cotonou, Bénin</p>
            <p><i class="fas fa-phone"></i> +229 01 96 11 61 36</p>
            <p><i class="fas fa-envelope"></i> souplessefitness@hotmail.fr</p>
            <div class="map-directions">
              <h4>Transports</h4>
              <p><i class="fas fa-taxi"></i> Taxi moto disponible</p>
              <p><i class="fas fa-bus"></i> Bus: Lignes disponibles</p>
              <p><i class="fas fa-car"></i> Parking disponible</p>
            </div>
            <div class="map-actions">
              <a href="https://www.google.com/maps/search/Face+Clôture+Iita+Cotonou+Benin" target="_blank" class="btn btn-primary">
                <i class="fas fa-external-link-alt"></i> Voir sur Google Maps
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Lightbox Modal -->
    <Teleport to="body">
      <div v-if="lightbox.show" class="lightbox-overlay" @click="closeLightbox">
        <div class="lightbox-content">
          <img :src="lightbox.image" :alt="lightbox.title">
          <span class="close-lightbox" @click="closeLightbox">&times;</span>
        </div>
      </div>
    </Teleport>
  </div>
</template>

<script setup lang="ts">
const mapElement = ref<HTMLElement | null>(null)

const form = reactive({
  name: '',
  email: '',
  phone: '',
  message: ''
})

const isSubmitting = ref(false)

const lightbox = reactive({
  show: false,
  image: '',
  title: ''
})

const openLightbox = (image: string, title: string) => {
  lightbox.show = true
  lightbox.image = image
  lightbox.title = title
}

const closeLightbox = () => {
  lightbox.show = false
}

const handleSubmit = async () => {
  isSubmitting.value = true

  // Simulate API call
  setTimeout(() => {
    alert('Merci pour votre message ! Nous vous recontacterons bientôt.')
    form.name = ''
    form.email = ''
    form.phone = ''
    form.message = ''
    isSubmitting.value = false
  }, 2000)
}

// Initialize map and animations on mount
onMounted(() => {
  // Initialize Leaflet map
  setTimeout(() => {
    if (typeof window !== 'undefined' && (window as any).L && mapElement.value) {
      const L = (window as any).L
      const lat = 6.3654
      const lng = 2.4183

      const map = L.map('map').setView([lat, lng], 15)

      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors'
      }).addTo(map)

      const customIcon = L.divIcon({
        html: `
          <div style="
            background: #FFD700;
            border-radius: 50%;
            width: 30px;
            height: 30px;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 16px;
            border: 2px solid #000;
          ">💪</div>
        `,
        iconSize: [30, 30],
        iconAnchor: [15, 15],
        popupAnchor: [0, -15]
      })

      const marker = L.marker([lat, lng], { icon: customIcon }).addTo(map)

      marker.bindPopup(`
        <div style="font-family: 'DM Sans', sans-serif; text-align: center; min-width: 200px;">
          <h3 style="color: #000; margin: 0 0 10px 0; font-size: 16px;">🏋️ Souplesse Fitness</h3>
          <p style="margin: 5px 0; color: #666; font-size: 14px;">📍 Face Clôture Iita, Cotonou</p>
          <p style="margin: 5px 0; color: #666; font-size: 14px;">📞 +229 01 96 11 61 36</p>
        </div>
      `).openPopup()
    }
  }, 1000)

  // Intersection Observer for animations
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('loaded')
      }
    })
  }, observerOptions)

  const elementsToObserve = document.querySelectorAll('.service-card, .trainer-card, .gallery-item, .contact-item, .stat-item, .pricing-card')
  elementsToObserve.forEach(el => {
    el.classList.add('loading')
    observer.observe(el)
  })

  // Stats counter animation
  const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const statItems = entry.target.querySelectorAll('.stat-item h3')
        statItems.forEach((item: Element) => {
          const target = parseInt((item as HTMLElement).textContent || '0')
          animateCounter(item as HTMLElement, target)
        })
        statsObserver.unobserve(entry.target)
      }
    })
  }, { threshold: 0.5 })

  const heroStats = document.querySelector('.hero-stats')
  if (heroStats) {
    statsObserver.observe(heroStats)
  }
})

function animateCounter(element: HTMLElement, target: number, duration = 2000) {
  let start = 0
  const increment = target / (duration / 16)

  const timer = setInterval(() => {
    start += increment
    if (start >= target) {
      element.textContent = target + '+'
      clearInterval(timer)
    } else {
      element.textContent = Math.floor(start) + '+'
    }
  }, 16)
}
</script>

<style scoped>
.lightbox-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.9);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2000;
  animation: fadeIn 0.3s ease;
}

.lightbox-content {
  position: relative;
  max-width: 90%;
  max-height: 90%;
}

.lightbox-content img {
  width: 100%;
  height: auto;
  border-radius: 10px;
}

.close-lightbox {
  position: absolute;
  top: -40px;
  right: 0;
  color: white;
  font-size: 30px;
  cursor: pointer;
  background: var(--primary-color);
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--secondary-color);
}

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}
</style>
