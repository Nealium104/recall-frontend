<script setup lang="ts">
import Nav from "./components/Nav.vue";
import Card from "./components/Card.vue";
import Header from "./components/Header.vue";
import { ref } from "vue";

const isOpen = ref(false);

const toggleSidebar = () => (isOpen.value = !isOpen.value);
</script>

<template>
  <div :class="['layout', { open: isOpen }]" class="layout">
    <Card>
      <Nav :open="isOpen" @toggleSidebar="toggleSidebar" />
    </Card>
    <div>
      <Header />
      <router-view />
    </div>
  </div>
</template>

<style>
@font-face {
  font-family: "Roboto";
  src: url("/public/fonts/Roboto-Variable.ttf");
  font-weight: 100 900;
  font-style: normal;
}

@font-face {
  font-family: "Roboto";
  src: url("/public/fonts/Roboto-Italic-Variable.ttf");
  font-weight: 100 900;
  font-style: italic;
}

@font-face {
  font-family: "Playfair";
  src: url("/public/fonts/PlayfairDisplay.ttf");
  font-weight: 100 900;
  font-style: normal;
}

@font-face {
  font-family: "Playfair";
  src: url("/public/fonts/PlayfairDisplay-Italic.ttf");
  font-weight: 100 900;
  font-style: italic;
}

:root {
  --background-primary: #2e3440;
  --background-secondary: #64728c;
  --text-primary: #e5e1da;
}

body {
  font-family: "Roboto", sans-serif;
  background-color: var(--background-primary);
  color: #ffffff;
  box-sizing: border-box;
  margin: 0;
}

.layout {
  display: grid;
  grid-template-columns: 300px 1fr;
  transition: grid-template-columns 0.3s ease;
  gap: 1em;
}

.layout.open {
  grid-template-columns: 100px 1fr;
}

.hidden {
  display: none;
}
</style>
