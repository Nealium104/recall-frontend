<script setup lang="ts">
import Nav from "./components/Nav.vue";
</script>

<template>
  <Nav />
  <div class="layout">
    <router-view />
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
}

.layout {
  display: flex;
  padding: 1rem;
}

.hidden {
  display: none;
}
</style>
