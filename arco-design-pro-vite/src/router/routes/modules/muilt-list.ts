import { DEFAULT_LAYOUT, DEFAULT_PARENT_LAYOUT } from '../base';
import { AppRouteRecordRaw } from '../types';

const LIST: AppRouteRecordRaw = {
  path: '/muilt-list',
  name: 'MuiltList',
  component: DEFAULT_LAYOUT,
  meta: {
    locale: 'mutilMenu.list',
    requiresAuth: true,
    icon: 'icon-list',
    order: 2,
  },
  children: [
    {
      path: 'search-table', // The midline path complies with SEO specifications
      name: 'MuiltSearchTable',
      component: () => import('@/views/list/search-table/index.vue'),
      meta: {
        locale: 'menu.list.searchTable',
        requiresAuth: true,
        roles: ['*'],
      },
    },
    {
      path: 'mutil-card-parent',
      name: 'MuiltCardParentParent',
      component: DEFAULT_PARENT_LAYOUT,
      meta: {
        locale: 'menu.list.cardList',
        requiresAuth: true,
        roles: ['*'],
      },
      children: [
        {
          path: 'mutil-search-table-three', // The midline path complies with SEO specifications
          name: 'MuiltSearchTableThree',
          component: () => import('@/views/list/search-table/index.vue'),
          meta: {
            locale: 'menu.list.searchTable',
            requiresAuth: true,
            roles: ['*'],
          },
        },
        {
          path: 'mutil-card-three',
          name: 'MuiltCardThree',
          component: () => import('@/views/list/card/index.vue'),
          meta: {
            locale: 'menu.list.cardList',
            requiresAuth: true,
            roles: ['*'],
          },
        },
      ],
    },
  ],
};

export default LIST;
