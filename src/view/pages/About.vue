<template>
  <div>
    <h1>About</h1>
    <p
      id="100"
      v-for="i in 10"
      :key="i"
    >
      This is the about page.
    </p>
  </div>
</template>

<script lang="ts" setup>
let count = 0;
setInterval(() => {
  count++;
  const el = document.getElementById('100');
  if (el) {
    el.innerText = `This is the about page. Count: ${count}`;
  }
}, 1000);
</script>

<style></style>
