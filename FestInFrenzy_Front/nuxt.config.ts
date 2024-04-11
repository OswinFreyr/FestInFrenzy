// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  devtools: { enabled: true },
  runtimeConfig: {
    MapBoxKey: process.env.MAP_BOX_KEY,
    public: {
      ApiUrl: process.env.API_URL,
    }
  },
  // css: [],
  // postcss: {
  //   plugins: {
  //     autoprefixer: {},
  //   },
  // },
  modules: ['@nuxt/ui','@nuxtjs/google-fonts'],
  googleFonts: {
    families: {
      'Major Mono Display': {
        wght: 400,
      }
    },
    download: false,
    fontsDir: 'assets/fonts'
  }
  
})

