<template>
  <div>
    home
    {{ $i18n.locale }}
    {{ $t('welcome') }}
    <LangSwitcher />
  </div>
</template>

<script lang="ts" setup>
import LangSwitcher from '../../components/LangSwitcher.vue';
</script>

<style></style>
