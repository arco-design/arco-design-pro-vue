export default {
  path: 'common-components',
  name: 'common-components',
  component: () => import('@/views/common-components/index.vue'),
  meta: {
    locale: 'menu.common.components',
    requiresAuth: true,
    icon: 'icon-apps',
    menuSelectKey: 'common-components',
  },
};
