<template>
  <div
    id="layout-default"
    :class="[
      'text-surface-800 dark:text-surface-300 w-screen h-screen flex overflow-hidden bg-surface-50 dark:bg-surface-950',
    ]"
  >
    <!-- Desktop Sidebar -->
    <aside
      class="hidden lg:flex flex-col h-screen bg-white dark:bg-surface-900 border-r border-surface-200 dark:border-surface-800 transition-all duration-300 ease-in-out shrink-0 shadow-sm"
      :style="{ width: uiStore.isSidebarCollapsed ? '5rem' : '16rem' }"
    >
      <!-- Logo section -->
      <div
        class="h-16 flex items-center px-6 border-b border-surface-100 dark:border-surface-800 shrink-0"
      >
        <img
          :src="appConfig.logo.src"
          :alt="appConfig.logo.alt"
          class="w-8 h-8 mr-3"
        />
        <span
          v-if="!uiStore.isSidebarCollapsed"
          class="text-lg font-bold truncate"
          >{{ appConfig.title }}</span
        >
      </div>

      <!-- Navigation -->
      <nav class="flex-1 overflow-y-auto py-4 px-3 space-y-1">
        <RouterLink
          v-for="item in appConfig.menuItems"
          :key="item.to"
          :to="item.to"
          class="flex items-center p-3 rounded-xl transition-colors group"
          :class="[
            route.path === item.to
              ? 'bg-primary-50 text-primary-600 dark:bg-primary-900/20 dark:text-primary-400 font-semibold'
              : 'text-surface-600 dark:text-surface-400 hover:bg-surface-100 dark:hover:bg-surface-800 hover:text-surface-900 dark:hover:text-surface-100',
          ]"
          :title="uiStore.isSidebarCollapsed ? item.label : ''"
        >
          <i
            :class="[
              item.icon,
              'text-xl shrink-0',
              uiStore.isSidebarCollapsed ? 'mx-auto' : 'mr-3',
            ]"
          ></i>
          <span
            v-if="!uiStore.isSidebarCollapsed"
            class="truncate"
            >{{ item.label }}</span
          >
        </RouterLink>
      </nav>

      <!-- Sidebar Footer -->
      <div
        class="p-4 border-t border-surface-100 dark:border-surface-800 shrink-0 overflow-hidden"
      >
        <PButton
          icon="pi pi-bars"
          text
          rounded
          severity="secondary"
          @click="uiStore.toggleSidebar"
          class="w-full flex items-center"
        >
          <i
            v-if="!uiStore.isSidebarCollapsed"
            class="ml-2 text-sm not-italic font-normal"
            >Collapse</i
          >
        </PButton>
      </div>
    </aside>

    <!-- Mobile Drawer Sidebar -->
    <PDrawer
      v-model:visible="uiStore.isMobileMenuOpen"
      class="w-72"
    >
      <template #header>
        <div class="flex items-center gap-2">
          <img
            :src="appConfig.logo.src"
            :alt="appConfig.logo.alt"
            class="w-8 h-8"
          />
          <span class="font-bold text-xl">{{ appConfig.title }}</span>
        </div>
      </template>
      <div class="flex flex-col h-full">
        <nav class="flex-1 py-4 space-y-1">
          <RouterLink
            v-for="item in appConfig.menuItems"
            :key="item.to"
            :to="item.to"
            @click="uiStore.closeMobileMenu"
            class="flex items-center p-3 rounded-xl transition-colors"
            :class="[
              route.path === item.to
                ? 'bg-primary-50 text-primary-600 dark:bg-primary-900/20 dark:text-primary-400 font-semibold'
                : 'text-surface-600 dark:text-surface-400 hover:bg-surface-100 dark:hover:bg-surface-800 hover:text-surface-900 dark:hover:text-surface-100',
            ]"
          >
            <i :class="[item.icon, 'text-xl mr-3']"></i>
            <span>{{ item.label }}</span>
          </RouterLink>
        </nav>
      </div>
    </PDrawer>

    <!-- Main Content Area -->
    <main class="flex-1 flex flex-col h-screen overflow-hidden relative">
      <!-- Topbar -->
      <header
        class="h-16 px-4 lg:px-8 flex items-center justify-between bg-white/80 dark:bg-surface-900/80 backdrop-blur-md border-b border-surface-100 dark:border-surface-800 sticky top-0 z-10 shrink-0"
      >
        <div class="flex items-center gap-4">
          <!-- Mobile toggle -->
          <PButton
            icon="pi pi-bars"
            text
            rounded
            severity="secondary"
            class="lg:hidden"
            @click="uiStore.toggleMobileMenu"
          />

          <!-- Breadcrumbs -->
          <PBreadcrumb
            :model="breadcrumbs"
            class="hidden sm:block !bg-transparent !p-0"
          >
            <template #item="{ item }">
              <span class="text-surface-500 dark:text-surface-400">{{
                item.label
              }}</span>
            </template>
          </PBreadcrumb>
        </div>

        <section class="flex items-center gap-3">
          <!-- Theme toggle -->
          <PButton
            :icon="themeStore.isDark ? 'pi pi-sun' : 'pi pi-moon'"
            text
            rounded
            severity="secondary"
            @click.prevent="themeStore.toggleTheme"
          />

          <!-- Profile menu -->
          <div
            class="flex items-center gap-3 p-1 pl-3 rounded-full hover:bg-surface-100 dark:hover:bg-surface-800 cursor-pointer transition-colors"
            @click="profileMenu?.toggle($event)"
          >
            <div class="hidden md:flex flex-col items-end leading-tight">
              <span
                class="text-sm font-semibold text-surface-800 dark:text-surface-100"
                >Admin User</span
              >
              <span class="text-xs text-surface-400">admin@example.com</span>
            </div>
            <PAvatar
              label="A"
              shape="circle"
              class="w-8 h-8 text-sm font-semibold bg-primary text-primary-contrast"
            />
          </div>

          <PMenu
            ref="profileMenu"
            :model="profileMenuItems"
            popup
          />
        </section>
      </header>

      <!-- View Wrapper -->
      <div class="flex-1 overflow-y-auto p-4 lg:p-8">
        <div class="max-w-7xl mx-auto min-h-full flex flex-col">
          <RouterView v-slot="{ Component }">
            <transition
              name="fade"
              mode="out-in"
            >
              <component :is="Component" />
            </transition>
          </RouterView>

          <!-- Footer -->
          <footer
            class="mt-auto pt-8 pb-4 text-center text-sm text-surface-400"
          >
            {{ appConfig.title }} &copy; {{ new Date().getFullYear() }} • Modern
            Admin Dashboard
          </footer>
        </div>
      </div>
    </main>
  </div>
</template>

<script lang="ts" setup>
import { ref, computed } from 'vue';
import { useRoute } from 'vue-router';
import { useTheme } from '../../stores/theme';
import { useUIStore } from '../../stores/ui';
import { appConfig } from '../../config/appConfig';
import type Menu from 'primevue/menu';

const route = useRoute();
const themeStore = useTheme();
const uiStore = useUIStore();

const profileMenu = ref<InstanceType<typeof Menu> | null>(null);

const breadcrumbs = computed(() => {
  const paths = route.path.split('/').filter((p) => p);
  const items = [{ label: 'App' }];

  if (paths.length === 0) {
    items.push({ label: 'Dashboard' });
  } else {
    paths.forEach((p) => {
      const label = p.charAt(0).toUpperCase() + p.slice(1).replace(/-/g, ' ');
      items.push({ label });
    });
  }
  return items;
});

const profileMenuItems = [
  {
    label: 'Profile',
    items: [
      { label: 'My Profile', icon: 'pi pi-user' },
      { label: 'Settings', icon: 'pi pi-cog', to: '/settings' },
    ],
  },
  {
    label: 'Account',
    items: [{ label: 'Logout', icon: 'pi pi-sign-out' }],
  },
];
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

/* Rounded corners for various elements */
:deep(.p-breadcrumb) {
  background: transparent;
}
</style>
