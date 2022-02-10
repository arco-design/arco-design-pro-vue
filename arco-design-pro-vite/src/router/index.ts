import { createRouter, createWebHistory } from 'vue-router';
import NProgress from 'nprogress'; // progress bar
import 'nprogress/nprogress.css';

import usePermission from '@/hooks/permission';
import { useUserStore } from '@/store';
import PageLayout from '@/layout/page-layout.vue';
import appRoutes from './modules';

NProgress.configure({ showSpinner: false }); // NProgress Configuration

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      redirect: { name: 'common-components' },
    },
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
router.beforeEach(async (to, from, next) => {
  NProgress.start();
  const userStore = useUserStore();
  async function crossroads() {
    const Permission = usePermission();
    if (!to.name || to.name === 'notFound') next({ name: 'common-components' });
    if (Permission.accessRouter(to)) await next();
    else await next({ name: 'common-components' }); // tip： Maybe you can go to the node that has the permission
    NProgress.done();
  }
  if (userStore.role) {
    crossroads();
  } else {
    await userStore.info();
    crossroads();
  }
});

export default router;
