import { createRouter, createWebHistory } from 'vue-router';
import NProgress from 'nprogress'; // progress bar
import 'nprogress/nprogress.css';

import PageLayout from '@/layout/page-layout.vue';
import Login from './modules/login';
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
      name: 'root',
      path: '/',
      component: PageLayout,
      children: appRoutes,
    },
  ],
  scrollBehavior() {
    return { top: 0 };
  },
});

router.beforeEach(async (_to, _from, next) => {
  NProgress.start();
  await next();
  NProgress.done();
});

export default router;
