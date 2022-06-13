import { DEFAULT_LAYOUT } from '@/router/constants';

export default {
  path: '/dashboard',
  name: 'dashboard',
  component: DEFAULT_LAYOUT,
  meta: {
    locale: 'menu.dashboard',
    requiresAuth: true,
    icon: 'icon-dashboard',
    order: 0,
  },
  children: [
    {
      path: 'workplace',
      name: 'Workplace',
      component: () => import('@/views/dashboard/workplace/index.vue'),
      meta: {
        locale: 'menu.dashboard.workplace',
        requiresAuth: true,
        roles: ['*'],
      },
    },
    /** simple */
    {
      path: 'monitor',
      name: 'Monitor',
      component: () => import('@/views/dashboard/monitor/index.vue'),
      meta: {
        locale: 'menu.dashboard.monitor',
        requiresAuth: true,
        roles: ['admin'],
      },
    },
    /** simple end */
  ],
};
