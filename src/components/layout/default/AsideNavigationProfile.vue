<template>
  <section>
    <Card>
      <template #content>
        <div class="grid grid-cols-[3fr_9fr_1fr] grid-rows-2 h-12">
          <section class="row-span-2">
            <Avatar
              image="https://i.pravatar.cc/150?img=4"
              shape="circle"
              size="large"
            />
          </section>
          <section class="font-bold leading-6">Foo Admin</section>
          <section class="row-span-2 flex items-center justify-center">
            <PButton
              icon="pi pi-cog"
              rounded
              text
              severity="secondary"
            />
          </section>
          <section class="text-sm">admin@mail.com</section>
        </div>
      </template>
    </Card>
  </section>
</template>

<script lang="ts" setup>
import { Avatar, Card } from 'primevue';
</script>
