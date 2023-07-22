<script setup lang="ts">
const title = "Portfolio • Victor Rioba";

const description = "Victor Rioba's portfolio website. Get in touch with me";

const tags = "Software Engineer, Web Developer, Vue.js, Node.js";

const url = "https://rioba.dev";

const image = "https://rioba.dev/_nuxt/photo.46dbc1fa.webp";
</script>

<template>
  <Head>
    <Meta property="og:url" :content="url" />
    <Meta property="og:title" :content="title" />
    <Meta property="og:description" :content="description" />
    <Meta property="og:image" :content="image" />
    <Meta property="twitter:image" :content="image" />
    <Meta name="description" :content="description" />
    <Meta name="twitter:title" :content="title" />
    <Meta name="twitter:description" :content="description" />
    <Meta name="twitter:card" :content="description" />
    <Link rel="canonical" :href="url" />
    <Meta name="tags" :content="tags" />
  </Head>
  <div class="max-w-[800px] mx-auto md:shadow">
    <header class="flex justify-between items-center px-4 py-4">
      <nuxt-link to="/" class="flex items-center gap-1">
        <icon-logo class="text-[1.5rem]" />
        <span>rioba.dev</span>
      </nuxt-link>

      <div class="flex gap-2 text-[.9em]">
        <nuxt-link href="/">Projects</nuxt-link>
        <nuxt-link href="/">Contact</nuxt-link>
      </div>
    </header>

    <article class="">
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
        <div class="md:mb-4 flex flex-col gap-2">
          <h1 class="text-[1.75em] font-semibold">Victor Rioba</h1>
          <span class="flex gap-1 items-center text-gray-500">
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

      <p class="px-4 text-gray-600 py-2">
        Software Engineer with experience in Vue.js, Nuxt.js, TailwindCSS on the
        frontend. I have expert knowledge in MySQL and Postgres, Redis, Express
        with Node.js in the backend. I also have deep understanding in tools
        such as Git, Docker and Cloud Platforms.
      </p>

      <h2
        class="font-bold mt-4 border-t pt-4 flex justify-between px-4 items-center"
      >
        <span class="flex gap-2 items-center">
          <icon-calendar /> Years of exp.
        </span>
        <span class="text-gray-500">3+ years</span>
      </h2>

      <h2 class="font-bold mt-4 border-t pt-6 px-4 flex gap-2 items-center">
        <icon-skills /> Technical Skills
      </h2>
      <div class="px-4 flex flex-col gap-4 pt-4 pb-4">
        <h3 class="font-semibold text-gray-600">Backend:</h3>
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

        <h3 class="font-semibold text-gray-600">Frontend:</h3>
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

      <h2 class="font-bold mt-4 border-t pt-6 px-4 flex gap-2 items-center">
        <icon-brief /> Work History
      </h2>
      <div class="px-4 flex flex-col gap-6 pt-4 pb-4">
        <div class="border-l-4 pl-4 md:pl-6">
          <span class="flex justify-between">
            <h3 class="font-bold">Backend Engineer</h3>
            <span class="text-xs text-gray-500 font-semibold"
              >Dec 2022 - Present</span
            >
          </span>
          <span class="flex justify-between">
            <h5 class="text-sm text-gray-500 font-semibold">
              Outlier.org, US(Remote)
            </h5>
            <span class="text-xs text-gray-500 font-semibold">8 mos</span>
          </span>
          <a
            href="https://www.outlier.org/"
            target="_blank"
            class="text-sm text-gray-400 font-semibold pt-3 flex pl-2"
            >https://www.outlier.org/</a
          >
          <p class="text-sm p-2">
            Outlier.org is an online education platform that offers
            high-quality, university-level courses for students around the
            world. I'm working on the backend that exposes REST/RESTful APIs for
            the dashboard which helps admins and partners manage student data.
            The backend is built using Node.js and Express using Javascript. The
            outcome of this project is a user-friendly platform that provides
            students with the opportunity to learn from world-class professors,
            without the need for traditional college tuition or prerequisites.
          </p>
        </div>

        <div class="border-l-4 pl-4 md:pl-6">
          <span class="flex justify-between">
            <h3 class="font-bold">Frontend Engineer</h3>
            <span class="text-xs text-gray-500 font-semibold"
              >Nov 2022 - Present</span
            >
          </span>
          <span class="flex justify-between">
            <h5 class="text-sm text-gray-500 font-semibold">
              Inisev, US(Remote)
            </h5>
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
            state management. The success of Follow.it could be measured by
            metrics such as the number of users, the amount of content that is
            subscribed to, and user feedback.
          </p>
        </div>

        <div class="border-l-4 pl-4 md:pl-6">
          <span class="flex justify-between">
            <h3 class="font-bold">Fullstack Engineer</h3>
            <span class="text-xs text-gray-500 font-semibold"
              >Feb 2022 - Nov 2022</span
            >
          </span>
          <span class="flex justify-between">
            <h5 class="text-sm text-gray-500 font-semibold">
              Dreamax, Israel(Remote)
            </h5>
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
            customers, orders, and store information. The backend was built
            using Node.js, Express.js and MySQL. The frontend was built using
            Vue.js, Vuex, Javascript and Vuetify and consumed the backend
            REST/RESTful APIs to display the store data. The outcome of this
            project is a fully functional e-commerce platform that is designed
            to be a robust alternative to existing platforms such as Shopify and
            WooCommerce. illo.ai offers a range of features that enable
            businesses to easily create and manage their online stores,
            including inventory management, payment processing, and shipping
            integration.
          </p>
        </div>

        <div class="border-l-4 pl-4 md:pl-6">
          <span class="flex justify-between">
            <h3 class="font-bold">Frontend Engineer</h3>
            <span class="text-xs text-gray-500 font-semibold"
              >Apr 2021 - Jan 2022</span
            >
          </span>
          <span class="flex justify-between">
            <h5 class="text-sm text-gray-500 font-semibold">
              Lotus Designs, Kenya
            </h5>
            <span class="text-xs text-gray-500 font-semibold">11 mos</span>
          </span>
          <a
            href="https://kreuzbergkinder.com/"
            target="_blank"
            class="text-sm text-gray-400 font-semibold pt-3 flex pl-2"
            >https://kreuzbergkinder.com/</a
          >
          <p class="text-sm p-2">
            I created a client app using Vue.js and vuex for state management.
            The frontend app is an e-commerce website to manage sales of the
            company's product (Eye-glasses). I also integrated a backend built
            using Node.js and express for the server. The website was successful
            and now sells to European countries and allows orders and payments
            using Paypal and Concardis
          </p>
        </div>
      </div>

      <h2 class="font-bold mt-4 border-t pt-6 px-4 flex gap-2 items-center">
        <icon-education /> Education
      </h2>
      <div class="px-4 flex flex-col gap-6 pt-4 pb-4">
        <div class="">
          <span class="text-gray-400 text-xs"
            >September 2018 - February 2022</span
          >
          <h3 class="font-semibold my-2">Moi University - Eldoret</h3>
          <h5 class="text-gray-500 text-sm">Computer Science</h5>
        </div>
        <div class="">
          <span class="text-gray-400 text-xs"
            >January 2014 - December 2017</span
          >
          <h3 class="font-semibold my-2">Mang'u High School - Thika</h3>
          <h5 class="text-gray-500 text-sm">High School Degree</h5>
        </div>
      </div>
    </article>

    <footer class="mt-5 py-4 text-center">
      <div class="flex justify-center gap-8 text-xl pb-4">
        <a href="https://github.com/Sirkastik" target="_blank"
          ><icon-github />
        </a>
        <a href="https://www.linkedin.com/in/rioba-victor/" target="_blank"
          ><icon-linkedin />
        </a>
        <a
          href="https://www.upwork.com/freelancers/~013fdb2112c2d21183"
          target="_blank"
          ><icon-upwork />
        </a>
      </div>
      <span class="text-sm">
        &copy; Victor Rioba <span> • {{ new Date().getFullYear() }}</span>
      </span>
    </footer>
  </div>
</template>
