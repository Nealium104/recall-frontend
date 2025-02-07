<script lang="ts" setup></script>

<template>
  <div class="card">
    <slot />
  </div>
</template>

<style>
.card {
  background-color: var(--background-secondary);
  padding: 1rem;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}
</style>
