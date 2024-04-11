// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  devtools: { enabled: true },
  runtimeConfig: {
    MapBoxKey: process.env.MAP_BOX_KEY,
    ApiUrl: process.env.API_URL,
    public: {

    }
  },
})