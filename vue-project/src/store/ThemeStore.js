import { ref } from "vue";
import { useStorage } from "@vueuse/core";
import { defineStore } from "pinia";

export const useThemeStore = defineStore("counter", () => {
  const theme = ref(useStorage("themes", "corporate"));
  function setTheme(newTheme) {
    theme.value = newTheme;
    document.documentElement.setAttribute('data-theme', newTheme)
  }

  return { theme, setTheme };
});
