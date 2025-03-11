<script lang="ts" setup>
import { defineProps, defineEmits } from "vue";
import {
  MdMenu,
  MdDashboard,
  MdOutlineWavingHand,
  MdOutlineBook,
  MdAutoGraph,
  MdOutlineQuestionMark,
  MdOutlineSettings,
} from "vue-icons-plus/md";

const props = defineProps<{
  open: boolean;
}>();

const emit = defineEmits<{
  (event: "toggleSidebar"): void;
}>();
</script>

<template>
  <nav class="nav">
    <div :class="{ hidden: props.open }" class="inner-nav">
      <div class="top-nav">
        <div>
          <div class="title">Recall</div>
          <div class="subtitle">A learning assistant</div>
        </div>
      </div>
      <ul class="nav-links">
        <li class="nav-link">
          <MdDashboard />
          <router-link to="/home">Dashboard</router-link>
        </li>
        <li class="nav-link">
          <MdOutlineBook />
          <router-link to="/browse">Browse</router-link>
        </li>
        <li class="nav-link">
          <MdAutoGraph />
          <router-link to="/stats">Stats</router-link>
        </li>
      </ul>
      <div class="break"></div>
      <ul class="nav-links">
        <li class="nav-link">
          <MdOutlineWavingHand /><router-link to="/about">About</router-link>
        </li>
        <li class="nav-link">
          <MdOutlineQuestionMark />
          <router-link to="/faqs">FAQs</router-link>
        </li>
        <li class="nav-link">
          <MdOutlineSettings />
          <router-link to="/settings">Settings</router-link>
        </li>
      </ul>
    </div>
    <MdMenu class="icon" @click="$emit('toggleSidebar')" />
  </nav>
</template>

<style>
.nav {
  display: flex;
  background-color: var(--background-secondary);
  align-items: start;
  height: 100vh;
}

.inner-nav {
  display: flex;
  flex-direction: column;
  padding: 1rem;
  width: 100%;
}

.title {
  font-size: 1.5rem;
  font-weight: bold;
}

.subtitle {
  font-size: 0.8rem;
  font-style: italic;
}

.break {
  border-top: 1px solid var(--text-primary);
  margin: 1rem 0;
}

.nav-links {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 0;
}

.nav-links a {
  text-decoration: none;
  color: inherit;
  width: 100%;
}

li:has(.router-link-active) {
  font-weight: bold;
  color: var(--accent-color);
  background-color: var(--background-primary);
}

.nav-link {
  display: flex;
  align-items: center;
  width: 100%;
  list-style: none;
  padding: 0.5rem;
  gap: 1rem;
  border-radius: 8px;
}

.top-nav {
  display: flex;
}

.icon {
  padding: 0 0.5em;
  width: 75px;
  height: 75px;
}
</style>
