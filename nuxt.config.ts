// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  app: {
    head: {
      title: 'Souplesse Fitness - Votre Salle de Sport Moderne',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Souplesse Fitness - Une salle de sport moderne au Bénin offrant musculation, cardio, cours collectifs et coaching personnalisé.' }
      ]
    }
  },

  css: [
    //'@/app/assets/css/main.css'
    '@/assets/css/main.css'
  ]
})
