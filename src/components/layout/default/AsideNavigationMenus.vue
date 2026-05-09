<template>
  <section class="flex-1 overflow-y-auto">
    <div
      v-for="menu in layoutDefaultStore.$state.menus"
      :key="menu.title"
    >
      <MenuGroup
        v-if="menu.children"
        :group="menu"
      />
      <MenuLeaf
        v-else
        :item="menu"
      />
    </div>
  </section>
</template>

<script setup lang="ts">
import { useDefaultLayoutStore } from '../../../stores/layout/default';
import MenuGroup from './menu/MenuGroup.vue';
import MenuLeaf from './menu/MenuLeaf.vue';

const layoutDefaultStore = useDefaultLayoutStore();
</script>
