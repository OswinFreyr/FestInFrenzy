// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  // devtools: { enabled: true },
  runtimeConfig: {
    public: {
      mapBoxKey: '',
      apiUrl: '',
    }
  },
  extends: ['@nuxt/ui-pro'],
  modules: [
    '@nuxt/ui','@nuxtjs/google-fonts',
    'nuxt-mapbox'
  ],
  mapbox: {
    accessToken: process.env.NUXT_PUBLIC_MAPBOX_KEY
  },
  googleFonts: {
    families: {
      'Victor Mono': {
        wght: 400,
      },
    },
    download: false,
    fontsDir: 'assets/fonts'
  }
  
})

