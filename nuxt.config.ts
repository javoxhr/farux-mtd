export default defineNuxtConfig({
  runtimeConfig: {
    public: {
      apiBase: "https://vadalar.uz/api",
    },
  },
  compatibilityDate: "2024-04-03",
  modules: ["@pinia/nuxt", "nuxt-swiper", '@nuxtjs/i18n'],
  i18n: {
    defaultLocale: "uz",
    langDir: "./locales/",
    locales: [
      {
        name: "uz",
        code: "uz",
        file: "uzb.json",
      },
      {
        name: "ru",
        code: "ru",
        file: "rus.json"

      },
      {
        name: "en",
        code: "en",
        file: "eng.json"
      }
    ]
  },
  devtools: { enabled: false },
  css: ["~/assets/scss/main.scss", 'primevue/resources/themes/aura-light-green/theme.css',
    'primevue/resources/primevue.min.css',
    'primeicons/primeicons.css',],
});