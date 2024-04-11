// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  devtools: { enabled: true },
  runtimeConfig: {
    MapBoxKey: process.env.MAP_BOX_KEY,
    ApiUrl: process.env.API_URL,
    public: {
    }
  },
  css: ['~/assets/css/main.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  modules: ['@nuxt/ui','@nuxtjs/google-fonts'],
  googleFonts: {
    families : {
      'Major Mono Display' : true
    },
    download : false,
    fontsDir: 'assets/fonts'

  }
})

