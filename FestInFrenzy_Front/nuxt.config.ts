// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  // devtools: { enabled: true },
  runtimeConfig: {
    public: {
      mapBoxKey: '',
      apiUrl: '',
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
      'Victor Mono': {
        wght: 400,
      },
    },
    download: false,
    fontsDir: 'assets/fonts'
  }
  
})

