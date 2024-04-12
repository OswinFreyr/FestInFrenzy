// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  // devtools: { enabled: true },
  ssr: false,
  runtimeConfig: {
    public: {
      mapBoxKey: '',
      apiUrl: '',
    }
  },
  extends: ['@nuxt/ui-pro'],
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

