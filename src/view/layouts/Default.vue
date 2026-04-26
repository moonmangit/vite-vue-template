<template>
  <div>
    <header>
      <h1>default layout</h1>
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/about">About</RouterLink>
    </header>
    <main>
      <RouterView />
    </main>
  </div>
</template>

<script lang="ts" setup></script>

<style></style>
