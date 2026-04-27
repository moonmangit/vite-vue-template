<template>
  <div>
    home
    {{ $i18n.locale }}
    {{ $t('welcome') }}
    <LangSwitcher />
    <PButton
      label="test"
      icon="pi pi-home"
    />
  </div>
</template>

<script lang="ts" setup>
import LangSwitcher from '../../components/LangSwitcher.vue';
</script>

<style></style>
