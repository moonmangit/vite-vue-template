<template>
  <aside class="flex flex-col h-[calc(100dvh-1rem)] sticky top-0 gap-y-2">
    <AsideNavigationHeadline />
    <AsideNavigationControl />
    <AsideNavigationMenus />
    <AsideNavigationProfile />
    <AsideNavigationFooter />
  </aside>
</template>

<script lang="ts" setup>
import AsideNavigationHeadline from './AsideNavigationHeadline.vue';
import AsideNavigationControl from './AsideNavigationControl.vue';
import AsideNavigationProfile from './AsideNavigationProfile.vue';
import AsideNavigationFooter from './AsideNavigationFooter.vue';
import AsideNavigationMenus from './AsideNavigationMenus.vue';
</script>

<style></style>
