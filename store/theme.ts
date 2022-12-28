import { defineStore } from "pinia";

type Theme = "dark" | "light";

export const useTheme = defineStore("theme", () => {
  const _theme = ref<Theme>("dark");

  const isDark = computed(() => {
    return _theme.value === "dark";
  });

  function setTheme(theme: Theme) {
    _theme.value = theme;
  }

  function toggleTheme() {
    _theme.value = isDark.value ? "light" : "dark";
  }

  return {
    isDark,
    setTheme,
    toggleTheme,
  };
});
