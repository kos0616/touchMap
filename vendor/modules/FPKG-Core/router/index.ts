import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
// import Home from "../views/MAP.vue";
import Home from "../views/STAGE_1.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
