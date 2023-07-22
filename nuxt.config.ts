// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title: "Portfolio • Victor Rioba",
      htmlAttrs: {
        lang: "en",
      },
      link: [
        {
          rel: "icon",
          type: "image/png",
          href: "/favicon.png",
        },
      ],
    },
  },
  css: ["@/assets/css/main.css"],
  modules: ["@nuxtjs/tailwindcss"],
  devtools: { enabled: true },
});
