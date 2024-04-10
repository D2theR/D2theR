// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  runtimeConfig: {
    app:{
      buildAssetsDir:'.'
    },
    public: {
      baseURL: process.env.NUXT_PUBLIC_BASE_URL || '/',
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
