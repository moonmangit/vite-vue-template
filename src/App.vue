<script setup lang="ts">
import { computed } from 'vue';
import { resolveLayout } from './assets/libs/layout-resolver';
import { useRoute } from 'vue-router';
import { useI18nPersist } from './assets/libs/i18n-persist';

const route = useRoute();

// layout system
const layout = computed(() => resolveLayout(route));

// i18n persistency
useI18nPersist();
</script>

<template>
  <component :is="layout" />
</template>
