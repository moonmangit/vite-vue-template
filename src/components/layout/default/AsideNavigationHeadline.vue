<template>
  <section>
    <div class="flex items-center gap-x-2">
      <AppIcon
        icon="logos:typo3-icon"
        class="text-2xl shrink-0"
      />
      <h1 class="text-xl font-bold flex-1">Trackline.</h1>
      <PButton
        icon="pi pi-search"
        size="small"
        text
        severity="secondary"
        rounded
        @click="isOpen = true"
      />
    </div>

    <PDialog
      v-model:visible="isOpen"
      modal
      :closable="false"
      :draggable="false"
      :style="{ width: '32rem', padding: 0 }"
      :pt="{
        header: {
          class:
            'flex items-center gap-2 px-4 py-3 border-b border-surface-200 dark:border-surface-700',
        },
        content: { class: 'p-0!' },
      }"
      @show="onDialogShow"
    >
      <template #header>
        <AppIcon
          icon="mdi:magnify"
          class="text-xl text-surface-400 shrink-0"
        />
        <input
          ref="inputRef"
          v-model="query"
          type="text"
          placeholder="Search menu..."
          class="flex-1 bg-transparent outline-none text-sm placeholder:text-surface-400"
        />
        <button
          class="text-surface-400 hover:text-surface-600 transition-colors"
          @click="isOpen = false"
        >
          <AppIcon icon="mdi:close" />
        </button>
      </template>

      <ul class="max-h-72 overflow-y-auto">
        <li
          v-if="results.length === 0"
          class="px-4 py-6 text-center text-sm text-surface-400"
        >
          No results found.
        </li>
        <li
          v-for="item in results"
          :key="item.path"
        >
          <RouterLink
            :to="item.path"
            class="flex items-center gap-3 px-4 py-2.5 text-sm hover:bg-surface-100 dark:hover:bg-surface-800 transition-colors"
            @click="isOpen = false"
          >
            <AppIcon
              :icon="item.icon"
              class="shrink-0 text-base text-surface-400"
            />
            <span>{{ item.title }}</span>
            <span class="ml-auto text-xs text-surface-400 truncate max-w-32">{{
              item.path
            }}</span>
          </RouterLink>
        </li>
      </ul>
    </PDialog>
  </section>
</template>

<script lang="ts" setup>
import { ref, computed } from 'vue';
import { useDefaultLayoutStore } from '../../../stores/layout/default';
import type { MenuItem, MenuGroup } from '../../../stores/layout/_menu';

const layoutStore = useDefaultLayoutStore();

const isOpen = ref(false);
const query = ref('');
const inputRef = ref<HTMLInputElement | null>(null);

function flattenMenu(items: Array<MenuItem | MenuGroup>): MenuItem[] {
  return items.flatMap((item) =>
    'children' in item
      ? flattenMenu(item.children as Array<MenuItem | MenuGroup>)
      : [item as MenuItem]
  );
}

const allItems = computed(() => flattenMenu(layoutStore.menus));

const results = computed(() => {
  const q = query.value.trim().toLowerCase();
  if (!q) return allItems.value;
  return allItems.value.filter(
    (item) =>
      item.title.toLowerCase().includes(q) ||
      item.path.toLowerCase().includes(q)
  );
});

function onDialogShow() {
  query.value = '';
  inputRef.value?.focus();
}
</script>
