<template>
  <div>
    <h2
      class="h-8 pr-2 py-1 flex items-center justify-between font-medium gap-2 cursor-pointer select-none border border-transparent hover:border-surface-300! rounded-md"
      :style="{ paddingLeft: `${0.5 + props.depth * 1}rem` }"
      @click="isOpen = !isOpen"
    >
      <section class="flex items-center gap-2 min-w-0">
        <AppIcon
          :icon="group.icon"
          class="shrink-0"
        />
        <span class="truncate">{{ group.title }}</span>
      </section>
      <AppIcon
        icon="mdi:chevron-down"
        class="shrink-0 transition-transform duration-300"
        :class="{ 'rotate-180': isOpen }"
      />
    </h2>

    <div
      class="menu-collapsible"
      :class="{ open: isOpen }"
    >
      <div class="overflow-hidden">
        <template
          v-for="item in group.children"
          :key="item.title"
        >
          <MenuGroup
            v-if="'children' in item"
            :group="item"
            :depth="props.depth + 1"
          />
          <MenuLeaf
            v-else
            :item="item"
            :depth="props.depth + 1"
          />
        </template>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import type { MenuGroup } from '../../../../stores/layout/_menu';
import MenuLeaf from './MenuLeaf.vue';

const props = withDefaults(
  defineProps<{
    group: MenuGroup;
    depth?: number;
  }>(),
  { depth: 0 }
);

const isOpen = ref(false);
</script>

<style scoped>
.menu-collapsible {
  display: grid;
  grid-template-rows: 0fr;
  transition: grid-template-rows 300ms ease;
}
.menu-collapsible.open {
  grid-template-rows: 1fr;
}
</style>
