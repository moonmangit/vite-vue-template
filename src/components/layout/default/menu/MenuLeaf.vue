<template>
  <RouterLink :to="item.path">
    <div
      class="h-8 pr-2 py-1 gap-2 w-full flex items-center hover:border-surface-300 border border-transparent rounded-md"
      :style="{ paddingLeft: `${0.5 + depth * 1}rem` }"
      :class="{
        'bg-white border-surface-200!': layoutDefaultStore.isActiveMenuLeaf(
          item.path
        ),
      }"
    >
      <AppIcon
        :icon="item.icon"
        class="shrink-0"
      />
      <span class="truncate">{{ item.title }}</span>
    </div>
  </RouterLink>
</template>

<script lang="ts" setup>
import type { MenuItem } from '../../../../stores/layout/_menu';
import { useDefaultLayoutStore } from '../../../../stores/layout/default';

withDefaults(
  defineProps<{
    item: MenuItem;
    depth?: number;
  }>(),
  { depth: 0 }
);

const layoutDefaultStore = useDefaultLayoutStore();
</script>

<style scoped></style>
