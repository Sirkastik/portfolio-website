<script setup lang="ts">
type Tag = {
  title: string;
  url: string;
  search: string;
};

type Project = {
  slug: string;
  title: string;
  url: string;
  github: string;
  image: string;
  description: string;
  tags: Tag[];
};

const projects: Project[] = [
  {
    slug: "wasm-vue-photo-editor",
    title: "Photo Editor built using Rust, Web Assembly, and Vue.js",
    url: "https://wasm-vue-photo-editor.vercel.app",
    github: "https://github.com/Sirkastik/wasm-vue-photo-editor",
    image:
      "https://firebasestorage.googleapis.com/v0/b/vercel-express-app.appspot.com/o/images%2FScreenshot%202023-07-24%20at%2014_1690357491013.44?alt=media",
    description:
      "A photo editor created using vue.js and tailwind. It allows photo manipulation in the browser as it also ships with a Web Assembly (WASM) module written in Rust",
    tags: [
      { title: "Rust", url: "", search: "" },
      { title: "WASM", url: "", search: "" },
      { title: "Vue.js", url: "", search: "" },
    ],
  },
];
</script>

<template>
  <div class="px-4 py-2 md:py-4">
    <ul>
      <li
        v-for="project in projects"
        :key="project.slug"
        class="flex flex-col gap-2"
      >
        <img
          loading="lazy"
          width="800"
          :src="project.image"
          :alt="`${project.slug}-image`"
          class="rounded-sm"
        />
        <span class="flex gap-2 text-lg items-center">
          <span class="font-bold w-full">{{ project.title }}</span>
          <a :href="project.url" target="_blank"><icon-internet /></a>
          <a :href="project.github" target="_blank"><icon-github /></a>
        </span>
        <span>{{ project.description }}</span>
        <div class="flex gap-2 flex-wrap">
          <span
            v-for="tag in project.tags"
            :key="tag.title"
            class="text-sm font-semibold border rounded-sm px-3 py-[2px] text-gray-600"
          >
            {{ tag.title }}
          </span>
        </div>
      </li>
    </ul>
  </div>
</template>
