// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    'vue3-carousel-nuxt',
  ],
  runtimeConfig: {
    public: {
      apiBase: 'https://thecocktaildb.com/api/json/v1/1'
    }
  },
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `
          @import "@/assets/scss/_variables.scss";
          @import "@/assets/scss/_colors.scss";
          @import "@/assets/scss/_global.scss";
          @import "@/assets/scss/_breakpoints.scss";
          @import "@/assets/scss/_transitions.scss";
          `
        }
      }
    }
  },
  app: {
    head: {
      htmlAttrs: {
        lang: 'pt-BR'
      },
      link: [
        {
          rel: 'stylesheet',
          type: 'text/css',
          href: 'https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined'
        },
        {
          rel: 'stylesheet',
          type: 'text/css',
          href: 'https://fonts.googleapis.com/icon?family=Material+Icons'
        }
      ]
    },
    pageTransition: { name: 'fade', mode: 'out-in' }
  },
  ssr: false
})
