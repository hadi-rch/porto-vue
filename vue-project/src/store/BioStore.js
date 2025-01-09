import { ref } from "vue";
import { useStorage } from "@vueuse/core";
import { defineStore } from "pinia";

export const useBioStore = defineStore("bio", () => {
  const age = ref(0);
  function increment() {
    age.value++
  }

  return { age, increment };
});
