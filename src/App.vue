<script setup lang="ts">
import { computed } from 'vue';
import { resolveLayout } from './assets/libs/layout-resolver';
import { useRoute } from 'vue-router';

const route = useRoute();

const layout = computed(() => resolveLayout(route));
</script>

<template>
  <component :is="layout" />
</template>
