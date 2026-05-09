import { defineStore } from 'pinia';
import { ref } from 'vue';
import { STATIC_MENUS } from './_menu';
import { useRoute } from 'vue-router';

export const useDefaultLayoutStore = defineStore('layout/default', () => {
  const menus = ref(STATIC_MENUS);

  function isActiveMenuLeaf(path: string): boolean {
    const route = useRoute();

    return route.path === path;
  }

  return {
    menus,
    // function
    isActiveMenuLeaf,
  };
});
