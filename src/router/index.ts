import { createRouter, createWebHistory } from 'vue-router';
import Login from './modules/login';
import PageLayout from '@/layout/page-layout.vue';
import Dashborad from './modules/dashboard';

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
      children: [Dashborad],
    },
  ],
});

export default router;
