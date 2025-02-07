import { createRouter, createWebHistory } from "vue-router";
import Home from "./views/Home.vue";
import Browse from "./views/Browse.vue";
import Stats from "./views/Stats.vue";
import About from "./views/About.vue";
import FAQs from "./views/FAQs.vue";
import Settings from "./views/Settings.vue";

const routes = [
  { path: "/", redirect: "/dashboard" },
  { path: "/home", component: Home },
  { path: "/browse", component: Browse },
  { path: "/stats", component: Stats },
  { path: "/about", component: About },
  { path: "/faqs", component: FAQs },
  { path: "/settings", component: Settings },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
