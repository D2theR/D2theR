// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  runtimeConfig: {
    public: {
      baseURL: '/D2theR/' 
    }
  },
  devtools: { enabled: true },
  modules: ['@nuxt/ui','@pinia/nuxt', '@nuxtjs/color-mode'],
  css: ['~/assets/css/main.css',],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
})
