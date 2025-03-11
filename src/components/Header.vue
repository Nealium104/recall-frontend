<script lang="ts" setup>
const user = "Neal Powers";
</script>

<template>
  <header class="header">
    <div class="greeting">
      <span>{{ user }}</span>
      <span>Hi, welcome back!</span>
    </div>
  </header>
</template>

<style>
.header {
  background-color: var(--background-secondary);
}
</style>
