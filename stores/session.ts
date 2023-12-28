import { defineStore } from "pinia";

const useStoreSession = defineStore("session", () => {
  const name = ref("Eduardo");
  const token = ref("Eduardo");
  const count = ref(0);
  const doubleCount = computed(() => count.value * 2);
  function increment() {
    count.value++;
  }

  return { count, name, doubleCount, increment };
});

export { useStoreSession };
