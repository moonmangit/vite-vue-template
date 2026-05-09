<template>
  <div
    id="layout-default"
    class="w-screen h-screen overflow-auto grid grid-cols-[var(--aside-w)_1fr] gap-2 bg-surface-100 p-2 text-surface-700"
  >
    <AsideNavigation />

    <Card>
      <template #content>
        <div>
          <Card
            :pt="{
              body: 'bg-surface-500/10',
            }"
          >
            <template #content>
              <div class="flex items-center gap-x-1">
                <h1 class="font-bold">Page title</h1>
                <AppIcon icon="mdi:slash-forward" />
                <p>Page description</p>
              </div>
            </template>
          </Card>
          <main>
            <RouterView />
          </main>
        </div>
      </template>
    </Card>
  </div>
</template>

<script lang="ts" setup>
import { Card } from 'primevue';
import AsideNavigation from '../../components/layout/default/AsideNavigation.vue';
</script>

<style scoped>
@reference 'tailwindcss';

#layout-default {
  --aside-w: 300px;
}
</style>
