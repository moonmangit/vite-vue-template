<template>
  <div>
    <select v-model="$i18n.locale">
      <option value="en">English</option>
      <option value="th">Thai</option>
    </select>
  </div>
</template>

<script lang="ts" setup>
import { useI18n } from 'vue-i18n';

const i18n = useI18n();

console.log(i18n.availableLocales);
</script>

<style></style>
