import { createRouter, createWebHistory } from 'vue-router';
import NProgress from 'nprogress'; // progress bar
import 'nprogress/nprogress.css';

import PageLayout from '@/layout/page-layout.vue';
import Login from './routes/modules/login';
import appRoutes from './routes';
import createRouteGuard from './guard';

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
      name: 'root',
      path: '/',
      component: PageLayout,
      children: appRoutes,
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'notFound',
      component: () => import('@/views/not-found/index.vue'),
    },
  ],
  scrollBehavior() {
    return { top: 0 };
  },
});

createRouteGuard(router);

export default router;
