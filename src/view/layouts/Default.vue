<template>
  <div
    id="layout-default"
    class="grid grid-cols-[var(--aside-width)_1fr] text-surface-800 dark:text-surface-300 w-screen h-screen overflow-y-auto"
  >
    <aside class="h-screen bg-surface-50 dark:bg-surface-950 sticky top-0">
      <main
        class="border-r border-surface-100 dark:border-surface-800 h-full flex flex-col"
      >
        <!-- banner -->
        <section
          class="bg-white dark:bg-surface-900 m-2 p-1 border border-surface-100 dark:border-surface-800 rounded-lg"
        >
          banner
        </section>
        <!-- search -->
        <section>search</section>
        <!-- menus -->
        <section class="flex-1">menus</section>
        <!-- settings -->
        <section>settings</section>
        <!-- footing -->
        <section>footering</section>
      </main>
    </aside>

    <main>
      <header
        class="sticky top-0 bg-white dark:bg-surface-900 p-3 border-b border-surface-100 dark:border-surface-800 h-(--page-header-height) flex justify-between items-center"
      >
        <!-- page meta header -->
        <section class="text-xl">หน้าแรก</section>

        <!-- profile section -->
        <section class="flex items-center gap-2">
          <!-- Theme toggle -->
          <PButton
            :icon="themeStore.isDark ? 'pi pi-sun' : 'pi pi-moon'"
            text
            rounded
            severity="secondary"
            :aria-label="
              themeStore.isDark ? 'Switch to light mode' : 'Switch to dark mode'
            "
            @click.prevent="themeStore.toggleTheme"
          />

          <!-- Profile menu trigger -->
          <div
            class="flex items-center gap-2 cursor-pointer select-none"
            @click="profileMenu?.toggle($event)"
          >
            <PAvatar
              label="A"
              shape="circle"
              class="w-8 h-8 text-sm font-semibold"
            />
            <div class="hidden sm:flex flex-col leading-tight">
              <span
                class="text-sm font-semibold text-surface-800 dark:text-surface-100"
                >Admin User</span
              >
              <span class="text-xs text-surface-400">admin@example.com</span>
            </div>
            <i class="pi pi-angle-down text-xs text-surface-400" />
          </div>

          <!-- Profile dropdown -->
          <PMenu
            ref="profileMenu"
            :model="profileMenuItems"
            popup
          />
        </section>
      </header>

      <!-- main view -->
      <RouterView />

      <footer class="text-center text-surface-300">
        All rights reserved by author, {{ new Date().getFullYear() }} &copy;
      </footer>
    </main>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { useTheme } from '../../stores/theme';
import type Menu from 'primevue/menu';

const themeStore = useTheme();

const profileMenu = ref<InstanceType<typeof Menu> | null>(null);

const profileMenuItems = [
  {
    items: [
      { label: 'My Profile', icon: 'pi pi-user' },
      { label: 'Settings', icon: 'pi pi-cog' },
    ],
  },
  {
    items: [
      {
        label: 'Logout',
        icon: 'pi pi-sign-out',
      },
    ],
  },
];
</script>

<style scoped>
@reference 'tailwindcss';

#layout-default {
  --aside-width: 15rem;
  --footer-height: 3rem;
  --page-header-height: 3rem;
}
</style>
