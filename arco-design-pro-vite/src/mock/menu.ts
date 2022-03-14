import Mock from 'mockjs';
import setupMock, { successResponseWrap } from '@/utils/setup-mock';

const getMenuList = () => {
  return [
    {
      path: 'dashboard',
      name: 'dashboard',
      meta: {
        locale: 'menu.dashboard',
        requiresAuth: true,
        icon: 'icon-dashboard',
        order: 1,
      },
      children: [
        {
          path: 'workplace',
          name: 'workplace',
          meta: {
            locale: 'menu.dashboard.workplace',
            requiresAuth: true,
            roles: ['*'],
            order: 1,
          },
        },
        {
          path: 'monitor',
          name: 'monitor',
          meta: {
            locale: 'menu.dashboard.monitor',
            requiresAuth: true,
            roles: ['admin'],
            order: 2,
          },
        },
      ],
    },
    {
      path: 'visualization',
      name: 'visualization',
      meta: {
        locale: 'menu.visualization',
        requiresAuth: true,
        icon: 'icon-apps',
        order: 2,
      },
      children: [
        {
          path: 'data-analysis',
          name: 'dataAnalysis',
          meta: {
            locale: 'menu.visualization.dataAnalysis',
            requiresAuth: true,
            roles: ['admin'],
            order: 1,
          },
        },
        {
          path: 'multi-dimension-data-analysis',
          name: 'multiDimensionDataAnalysis',
          meta: {
            locale: 'menu.visualization.multiDimensionDataAnalysis',
            requiresAuth: true,
            roles: ['admin'],
            order: 2,
          },
        },
      ],
    },
    {
      path: 'list',
      name: 'list',
      meta: {
        locale: 'menu.list',
        requiresAuth: true,
        icon: 'icon-list',
        order: 3,
      },
      children: [
        {
          path: 'search-table',
          name: 'searchTable',
          meta: {
            locale: 'menu.list.searchTable',
            requiresAuth: true,
            roles: ['*'],
            order: 1,
          },
        },
        {
          path: 'card',
          name: 'card',
          meta: {
            locale: 'menu.list.cardList',
            requiresAuth: true,
            roles: ['*'],
            order: 2,
          },
        },
      ],
    },
    {
      path: 'form',
      name: 'form',
      meta: {
        locale: 'menu.form',
        icon: 'icon-settings',
        requiresAuth: true,
        order: 4,
      },
      children: [
        {
          path: 'step',
          name: 'step',
          meta: {
            locale: 'menu.form.step',
            requiresAuth: true,
            roles: ['admin'],
            order: 1,
          },
        },
        {
          path: 'group',
          name: 'group',
          meta: {
            locale: 'menu.form.group',
            requiresAuth: true,
            roles: ['admin'],
            order: 2,
          },
        },
      ],
    },
    {
      path: 'profile',
      name: 'profile',
      meta: {
        locale: 'menu.profile',
        requiresAuth: true,
        icon: 'icon-file',
        order: 5,
      },
      children: [
        {
          path: 'basic',
          name: 'basic',
          meta: {
            locale: 'menu.profile.basic',
            requiresAuth: true,
            roles: ['admin'],
            order: 1,
          },
        },
      ],
    },
    {
      path: 'result',
      name: 'result',
      meta: {
        locale: 'menu.result',
        icon: 'icon-check-circle',
        requiresAuth: true,
        order: 6,
      },
      children: [
        {
          path: 'success',
          name: 'success',
          meta: {
            locale: 'menu.result.success',
            requiresAuth: true,
            roles: ['admin'],
            order: 1,
          },
        },
        {
          path: 'error',
          name: 'error',
          meta: {
            locale: 'menu.result.error',
            requiresAuth: true,
            roles: ['admin'],
            order: 2,
          },
        },
      ],
    },
    {
      path: 'exception',
      name: 'exception',
      meta: {
        locale: 'menu.exception',
        requiresAuth: true,
        icon: 'icon-exclamation-circle',
        order: 7,
      },
      children: [
        {
          path: '403',
          name: '403',
          meta: {
            locale: 'menu.exception.403',
            requiresAuth: true,
            roles: ['admin'],
            order: 1,
          },
        },
        {
          path: '404',
          name: '404',
          meta: {
            locale: 'menu.exception.404',
            requiresAuth: true,
            roles: ['*'],
            order: 2,
          },
        },
        {
          path: '500',
          name: '500',
          meta: {
            locale: 'menu.exception.500',
            requiresAuth: true,
            roles: ['*'],
            order: 7,
          },
        },
      ],
    },
    {
      path: 'user',
      name: 'user',
      meta: {
        locale: 'menu.user',
        icon: 'icon-user',
        requiresAuth: true,
        order: 8,
      },
      children: [
        {
          path: 'info',
          name: 'info',
          meta: {
            locale: 'menu.user.info',
            requiresAuth: true,
            roles: ['*'],
            order: 1,
          },
        },
        {
          path: 'setting',
          name: 'setting',
          meta: {
            locale: 'menu.user.setting',
            requiresAuth: true,
            roles: ['*'],
            order: 2,
          },
        },
      ],
    },
  ];
};
setupMock({
  setup: () => {
    Mock.mock(new RegExp('/api/menu'), () => {
      return successResponseWrap(getMenuList());
    });
  },
});
