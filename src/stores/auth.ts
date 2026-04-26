import { defineStore } from "pinia";
import { ref } from "vue";

export const useAuthStore = defineStore("auth", () => {
  const user = ref(null);

  function $reset() {
    user.value = null;
  }

  return {
    user,
    $reset,
  };
});
