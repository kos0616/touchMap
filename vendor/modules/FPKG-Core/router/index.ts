import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import STAGES from '../views/STAGE.vue';
import STAGE_1 from '../views/STAGE_1.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/stage',
  },
  {
    path: '/stage',
    name: 'stages',
    component: STAGES,
  },
  {
    path: '/stage/1',
    name: 'stage_1',
    component: STAGE_1,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
