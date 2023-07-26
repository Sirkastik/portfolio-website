<script setup lang="ts">
const title = "Portfolio • Victor Rioba";

const description = "Victor Rioba's portfolio website. Get in touch with me";

const url = "https://rioba.dev";

const image = "https://rioba.dev/_nuxt/photo.46dbc1fa.webp";

useSeoMeta({
  title: title,
  ogTitle: title,
  description: description,
  ogUrl: url,
  ogDescription: description,
  ogImage: image,
  twitterCard: "summary",
  twitterTitle: title,
  twitterDescription: description,
  twitterImage: image,
});
</script>

<template>
  <article>
    <div
      class="relative h-[19rem] md:h-[39rem] flex justify-start items-end mb-4"
    >
      <div
        :class="`absolute inset-0 h-[13rem] lg:h-[32rem] w-full bg-[url(@/assets/img/bg-small.webp)] lg:bg-[url(@/assets/img/bg.webp)] bg-cover bg-center`"
      ></div>
      <div
        class="ml-7 mr-4 h-40 w-40 rounded-[50%] relative overflow-hidden outline-1 outline-red"
      >
        <img
          class="w-full h-full"
          src="@/assets/img/photo.webp"
          alt="My-Photo"
        />
      </div>
      <div class="md:mb-4 flex flex-col gap-1 md:gap-2">
        <h1 class="text-[1.5rem] md:text-[1.75em] font-semibold">
          Victor Rioba
        </h1>
        <span class="flex gap-1 items-center text-[.9rem] text-gray-500">
          <icon-case />
          <span>Software Engineer</span>
        </span>
        <span
          class="text-gray-400 font-semibold text-sm flex gap-1 items-center"
        >
          <icon-location /> Kenya • Remote
        </span>
      </div>
    </div>

    <p class="px-4 text-gray-600 py-2 text-sm">
      Software Engineer with experience in Vue.js, Nuxt.js, TailwindCSS on the
      frontend. I have expert knowledge in MySQL and Postgres, Redis, Express
      with Node.js in the backend. I also have deep understanding in tools such
      as Git, Docker and Cloud Platforms.
    </p>

    <span
      class="font-bold mt-4 border-t pt-4 flex justify-between px-4 items-center"
    >
      <span class="flex gap-2 items-center">
        <icon-calendar /> Years of exp.
      </span>
      <span class="text-gray-500">3+ years</span>
    </span>

    <span class="font-bold mt-4 border-t pt-6 px-4 flex gap-2 items-center">
      <icon-skills /> Technical Skills
    </span>
    <div class="px-4 flex flex-col gap-4 pt-4 pb-4">
      <span class="font-semibold text-gray-600">Backend:</span>
      <ul class="flex flex-col gap-2">
        <li class="pl-4 flex items-center gap-2 text-[.9em] text-gray-600">
          <icon-node /> Node.js (Express)
        </li>
        <li class="pl-4 flex items-center gap-2 text-[.9em] text-gray-600">
          <icon-database /> SQL (MySQL, Postgres)
        </li>
        <li class="pl-4 flex items-center gap-2 text-[.9em] text-gray-600">
          <icon-cache /> Redis | MemCached
        </li>
        <li class="pl-4 flex items-center gap-2 text-[.9em] text-gray-600">
          <icon-js /> Javascript | Typescript
        </li>
        <li class="pl-4 flex items-center gap-2 text-[.9em] text-gray-600">
          <icon-firebase /> Firebase (Auth, Storage, Firestore)
        </li>
        <li class="pl-4 flex items-center gap-2 text-[.9em] text-gray-600">
          <icon-git /> Git (Github, Gitlab, BitBucket)
        </li>
      </ul>

      <span class="font-semibold text-gray-600">Frontend:</span>
      <ul class="flex flex-col gap-2">
        <li class="pl-4 flex items-center gap-2 text-[.9em] text-gray-600">
          <icon-vue /> Vue.js (Nuxt, Vuex, Pinia, Vue-Router)
        </li>
        <li class="pl-4 flex items-center gap-2 text-[.9em] text-gray-600">
          <icon-css /> TailwindCSS | SCSS
        </li>
        <li class="pl-4 flex items-center gap-2 text-[.9em] text-gray-600">
          <icon-pwa /> Progressive Web App
        </li>
        <li class="pl-4 flex items-center gap-2 text-[.9em] text-gray-600">
          <icon-wasm /> Web Assembly
        </li>
        <li class="pl-4 flex items-center gap-2 text-[.9em] text-gray-600">
          <icon-test /> Vitest | Jest
        </li>
      </ul>
    </div>

    <span class="font-bold mt-4 border-t pt-6 px-4 flex gap-2 items-center">
      <icon-brief /> Work History
    </span>
    <div class="px-4 flex flex-col gap-6 pt-4 pb-4">
      <div class="border-l-4 pl-4 md:pl-6">
        <span class="flex justify-between">
          <span class="font-bold">Backend Engineer</span>
          <span class="text-xs text-gray-500 font-semibold"
            >Dec 2022 - Present</span
          >
        </span>
        <span class="flex justify-between">
          <span class="text-sm text-gray-500 font-semibold">
            Outlier.org, US(Remote)
          </span>
          <span class="text-xs text-gray-500 font-semibold">8 mos</span>
        </span>
        <a
          href="https://www.outlier.org/"
          target="_blank"
          class="text-sm text-gray-400 font-semibold pt-3 flex pl-2"
          >https://www.outlier.org/</a
        >
        <p class="text-sm p-2">
          I'm working on the backend that exposes REST/RESTful APIs for the
          dashboard which helps admins and partners manage student data. The
          backend is built using Node.js and Express using Javascript. The
          outcome of this project is a user-friendly platform that provides
          students with the opportunity to learn from world-class professors,
          without the need for traditional college tuition or prerequisites.
        </p>
        <div
          class="pl-2 flex text-[.8rem] gap-2 text-gray-500 font-semibold py-2"
        >
          <span class="border-2 rounded-sm px-3 py-[2px]">Node.js</span>
          <span class="border-2 rounded-sm px-3 py-[2px]">Express</span>
          <span class="border-2 rounded-sm px-3 py-[2px]">PostreSQL</span>
          <span class="border-2 rounded-sm px-3 py-[2px]">Airtable</span>
          <span class="border-2 rounded-sm px-3 py-[2px]">
            Google Cloud Platform
          </span>
          <span class="border-2 rounded-sm px-3 py-[2px]">Segment</span>
        </div>
      </div>

      <div class="border-l-4 pl-4 md:pl-6">
        <span class="flex justify-between">
          <span class="font-bold">Frontend Engineer</span>
          <span class="text-xs text-gray-500 font-semibold"
            >Nov 2022 - Present</span
          >
        </span>
        <span class="flex justify-between">
          <span class="text-sm text-gray-500 font-semibold">
            Inisev, US(Remote)
          </span>
          <span class="text-xs text-gray-500 font-semibold">9 mos</span>
        </span>
        <a
          href="https://follow.it/"
          target="_blank"
          class="text-sm text-gray-400 font-semibold pt-3 flex pl-2"
          >https://follow.it/</a
        >
        <p class="text-sm p-2">
          Using Javascript with Vue.js to build the client app using vuex for
          state management. The success of Follow.it has grown exponentially as
          the number of monthly active users grew to 6M
        </p>
        <div
          class="pl-2 flex text-[.8rem] gap-2 text-gray-500 font-semibold py-2"
        >
          <span class="border-2 rounded-sm px-3 py-[2px]">Nuxt.js</span>
          <span class="border-2 rounded-sm px-3 py-[2px]">Vue.js</span>
          <span class="border-2 rounded-sm px-3 py-[2px]">TailwindCSS</span>
        </div>
      </div>

      <div class="border-l-4 pl-4 md:pl-6">
        <span class="flex justify-between">
          <span class="font-bold">Fullstack Engineer</span>
          <span class="text-xs text-gray-500 font-semibold"
            >Feb 2022 - Nov 2022</span
          >
        </span>
        <span class="flex justify-between">
          <span class="text-sm text-gray-500 font-semibold">
            Dreamax, Israel(Remote)
          </span>
          <span class="text-xs text-gray-500 font-semibold">10 mos</span>
        </span>
        <a
          href="https://illo.ai/"
          target="_blank"
          class="text-sm text-gray-400 font-semibold pt-3 flex pl-2"
          >https://illo.ai/</a
        >
        <p class="text-sm p-2">
          An e-commerce admin for store owners to manage their products,
          customers, orders, and store information. The backend was built using
          Node.js, Express.js and MySQL. The frontend was built using Vue.js,
          Vuex, Javascript and Vuetify and consumed the backend REST/RESTful
          APIs to display the store data. illo.ai offers a range of features
          that enable businesses to easily create and manage their online
          stores, including inventory management, payment processing, and
          shipping integration.
        </p>
        <div
          class="pl-2 flex text-[.8rem] gap-2 text-gray-500 font-semibold py-2"
        >
          <span class="border-2 rounded-sm px-3 py-[2px]">Node.js</span>
          <span class="border-2 rounded-sm px-3 py-[2px]">Express</span>
          <span class="border-2 rounded-sm px-3 py-[2px]">MySQL</span>
          <span class="border-2 rounded-sm px-3 py-[2px]">Vue.js</span>
          <span class="border-2 rounded-sm px-3 py-[2px]">
            REST API Integration
          </span>
        </div>
      </div>

      <div class="border-l-4 pl-4 md:pl-6">
        <span class="flex justify-between">
          <span class="font-bold">Frontend Engineer</span>
          <span class="text-xs text-gray-500 font-semibold"
            >Apr 2021 - Jan 2022</span
          >
        </span>
        <span class="flex justify-between">
          <span class="text-sm text-gray-500 font-semibold">
            Lotus Designs, Kenya
          </span>
          <span class="text-xs text-gray-500 font-semibold">11 mos</span>
        </span>
        <a
          href="https://kreuzbergkinder.com/"
          target="_blank"
          class="text-sm text-gray-400 font-semibold pt-3 flex pl-2"
          >https://kreuzbergkinder.com/</a
        >
        <p class="text-sm p-2">
          I created a client app using Vue.js and vuex for state management. The
          frontend app is an e-commerce website to manage sales of the company's
          product (Eye-glasses). I also integrated a backend built using Node.js
          and express for the server. The website was successful and now sells
          to European countries and allows orders and payments using Paypal and
          Concardis
        </p>
        <div
          class="pl-2 flex text-[.8rem] gap-2 text-gray-500 font-semibold py-2"
        >
          <span class="border-2 rounded-sm px-3 py-[2px]">Vue.js</span>
          <span class="border-2 rounded-sm px-3 py-[2px]">Nuxt.js</span>
          <span class="border-2 rounded-sm px-3 py-[2px]">Vuex</span>
          <span class="border-2 rounded-sm px-3 py-[2px]">
            Payment Integration
          </span>
        </div>
      </div>
    </div>

    <span class="font-bold mt-4 border-t pt-6 px-4 flex gap-2 items-center">
      <icon-education /> Education
    </span>
    <div class="px-4 flex flex-col gap-6 pt-4 pb-4">
      <div class="">
        <span class="text-gray-400 text-xs"
          >September 2018 - February 2022</span
        >
        <span class="font-semibold my-2 flex">Moi University - Eldoret</span>
        <span class="text-gray-500 text-sm">Computer Science</span>
      </div>
      <div class="">
        <span class="text-gray-400 text-xs">January 2014 - December 2017</span>
        <span class="font-semibold my-2 flex">Mang'u High School - Thika</span>
        <span class="text-gray-500 text-sm">High School Degree</span>
      </div>
    </div>
  </article>
</template>
