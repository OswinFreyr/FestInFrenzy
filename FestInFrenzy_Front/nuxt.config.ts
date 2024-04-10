// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
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
