// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxt/image", "@pinia/nuxt", "nuxt-icon"],
  image: {
    format: ["webp"],
    quality: 10,
  },
  runtimeConfig: {
    public: {
      base_url: process.env.DATABASE_URL,
    },
  },
});
