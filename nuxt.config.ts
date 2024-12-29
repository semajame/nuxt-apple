// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },

  modules: [
    "@nuxtjs/tailwindcss",
    "@nuxtjs/google-fonts",
    "@nuxt/icon",
    "@nuxt/image",
  ],

  googleFonts: {
    families: {
      // List the fonts you want here
      Inter: true, // All weights of Inter
      Lora: true, // All weights for Lora
      OpenSans: true,
    },

    prefetch: true, // Preload fonts during the build
    preconnect: true, // Preconnect to Google's font servers
    display: "swap", // Ensure text remains visible during font loading
  },

  icon: {
    serverBundle: {
      collections: ["uil", "mdi"], // <!--- this
    },
  },

  image: {
    format: ["webp"],
  },

  app: {
    head: {
      title: "Apple Ui",
      meta: [
        {
          name: "description",
          content: "Apple home page ui clone",
        },
      ],

      htmlAttrs: {
        lang: "en",
      },
    },
  },
});
