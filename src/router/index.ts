import { createRouter, createWebHistory } from 'vue-router';
import Login from './modules/login';
import PageLayout from '@/layout/page-layout.vue';
import appRoutes from './modules';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      redirect: 'login',
    },
    Login,
    {
      path: '/app',
      component: PageLayout,
      children: appRoutes,
    },
  ],
});

export default router;
