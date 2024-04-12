

export default {
  // Configuration de développement des outils
  // devtools: { enabled: true },

  publicRuntimeConfig: {
    mapBoxKey: '',
    apiUrl: '',
  },

  extend: ['@nuxt/ui-pro'],

  modules: ['@nuxt/ui', '@nuxtjs/google-fonts'],

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
