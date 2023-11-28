// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title: "Portfolio • Victor Rioba",
      htmlAttrs: {
        lang: "en",
      },
      meta: [
        {
          name: "description",
          content: "Victor Rioba's portfolio website. Get in touch with me",
        },
        {
          name: "tags",
          content: "Software Engineer, Web Developer, Vue.js, Node.js",
        },
      ],
      link: [
        {
          rel: "icon",
          type: "image/png",
          href: "/favicon.png",
        },
      ],
    },
  },
  modules: ['@nuxt/ui'],
  devtools: { enabled: true },
});
