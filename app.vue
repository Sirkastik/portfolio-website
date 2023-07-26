<template>
  <div class="max-w-[800px] mx-auto md:shadow">
    <header class="flex justify-between items-center px-4 py-4">
      <nuxt-link to="/" class="flex items-center gap-1">
        <icon-logo class="text-[1.5rem]" />
        <span>rioba.dev</span>
      </nuxt-link>

      <div class="flex gap-2 text-[.9em]">
        <nuxt-link href="/projects">Projects</nuxt-link>
        <nuxt-link href="/contact">Contact</nuxt-link>
      </div>
    </header>

    <NuxtPage />

    <footer class="mt-5 py-4 text-center">
      <div class="flex justify-center gap-8 text-xl pb-4">
        <a
          href="https://github.com/Sirkastik"
          target="_blank"
          aria-label="Visit my GitHub profile"
        >
          <icon-github />
        </a>
        <a
          href="https://www.linkedin.com/in/rioba-victor/"
          target="_blank"
          aria-label="Visit my LinkedIn profile"
        >
          <icon-linkedin />
        </a>
        <a
          href="https://www.upwork.com/freelancers/~013fdb2112c2d21183"
          target="_blank"
          aria-label="Visit my Upwork profile"
        >
          <icon-upwork />
        </a>
      </div>
      <span class="text-sm">
        &copy; Victor Rioba <span> • {{ new Date().getFullYear() }}</span>
      </span>
    </footer>
  </div>
</template>
