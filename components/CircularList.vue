<script setup lang="ts">
import { useIntersectionObserver } from "@vueuse/core";
import { IconType } from "~~/.nuxt/svg-transformer";

defineProps<{ list: { icon: IconType }[]; name: string; icon: IconType }>();

const target = ref(null);
const active = ref(false);

const { stop } = useIntersectionObserver(
  target,
  ([{ isIntersecting }]) => {
    active.value = isIntersecting;
  }
);

onBeforeUnmount(() => {
  stop();
});
</script>

<template>
  <div class="my-12 grid place-content-center" ref="target">
    <div
      class="relative h-[400px] w-[400px] flex justify-center items-center"
      :class="{ active }"
    >
      <button
        class="toggle transition duration-[1.25s] relative w-[60px] h-[60px] rounded-[50%] flex justify-center items-center text-gray-400 text-[1.5em]"
        :class="{
          'rotate-[360deg]':
            active,
        }"
      >
        <SvgIcon :name="icon" />
      </button>
      <span
        class="absolute w-[300px] text-gray-400 bottom-20 text-[2em] text-center transition duration-[1.25s]"
        :class="{ 'opacity-0': active }"
      >
        {{ name }}
      </span>
      <button
        v-for="(item, i) in list"
        :key="i"
        :style="`--rotation:calc(360deg/${list.length} * ${i});--delay:calc(0.05s*${i})`"
        class="absolute left-0 transition duration-500 rotate-[var(--rotation)] origin-[200px] delay-[var(--delay)]"
        :class="{ 'scale-0': !active }"
      >
        <SvgIcon
          :name="`${item.icon}`"
          :style="`--reverse-rotation:calc(360deg/${-list.length} * ${i})`"
          class="rotate-[var(--reverse-rotation)] hover:scale-125"
        />
      </button>
    </div>
  </div>
</template>

<style scoped lang="css"></style>
