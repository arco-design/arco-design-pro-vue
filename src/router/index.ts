import { createRouter, createWebHistory } from 'vue-router';
import NProgress from 'nprogress'; // progress bar
import 'nprogress/nprogress.css';

import Login from './modules/login';
import PageLayout from '@/layout/page-layout.vue';
import appRoutes from './modules';

NProgress.configure({ showSpinner: false }); // NProgress Configuration

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

router.beforeEach((to, from, next) => {
  // NProgress.start();
  // NProgress.done();
  next();
  // setTimeout(() => {

  // }, 100);
});

export default router;
