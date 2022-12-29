// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: true,
  modules: [
    "@nuxtjs/tailwindcss",
    "@pinia/nuxt",
    "nuxt-svg-transformer",
    [
      "@vueuse/nuxt",
      {
        ssrHandlers: true,
      },
    ],
  ],
  components: {
    dirs: ["~/components"],
  },
});