

export default {
  // Configuration de développement des outils
  // devtools: { enabled: true },

  publicRuntimeConfig: {
    mapBoxKey: '',
    apiUrl: '',
  },
  extends: ['@nuxt/ui-pro'],
  modules: [
    '@nuxt/ui','@nuxtjs/google-fonts',
    'nuxt-mapbox'
  ],
  mapbox: {
    accessToken: process.env.MAPBOX_KEY
  },
  googleFonts: {
    families: {
      'Victor Mono': {
        wght: 400,
      },
    },
    download: false,
    fontsDir: 'assets/fonts'
  },

  head: {
    title: 'FestInFrenzy', 
  },
}
