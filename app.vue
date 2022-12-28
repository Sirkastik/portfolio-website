<script setup lang="ts"></script>

<template>
  <NuxtPage />
</template>

<style lang="css">
body {
  font-family: "Operator Mono Medium", "Source Code Pro", "SF Mono Regular",
    sans-serif;
  font-variant-ligatures: normal;
  scroll-behavior: smooth;
}

.dark {
  --bg: #0f0e17;
  --headline: #343414;
  --paragraph: #a7a9be;
  --btn_bg: #ff8906;
  --btn_txt: #fffffe;
  --shadow: 0 0px 6px 6px #00000033;
  background: var(--bg);
  color: var(--paragraph);
}

.light {
  --bg: #fef6e4;
  --headline: #001858;
  --paragraph: #172c66;
  --btn_bg: #f582ae;
  --btn_txt: #001858;
  --shadow: 0 0px 6px 6px #bbbbbb33;
  background: var(--bg);
  color: var(--paragraph);
}

::-webkit-scrollbar {
  opacity: 0;
  width: 0.3em;
  height: 0;
}

::-webkit-scrollbar-thumb {
  border-radius: 100vw;
  background-color: var(--paragraph);
}
</style>
