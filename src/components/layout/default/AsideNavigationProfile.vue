<template>
  <section>
    <Card>
      <template #content>
        <div class="grid grid-cols-[1fr_3fr_1fr] grid-rows-2">
          <section class="row-span-2">image</section>
          <section>name</section>
          <section class="row-span-2">more</section>
          <section>email</section>
        </div>
      </template>
    </Card>
  </section>
</template>

<script lang="ts" setup>
import { Card } from 'primevue';
</script>
