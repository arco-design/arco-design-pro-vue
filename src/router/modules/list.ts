export default {
  path: 'list',
  name: 'list',
  component: () => import('@/views/list/index.vue'),
  meta: {
    locale: 'menu.list',
    requiresAuth: true,
    icon: 'icon-list',
  },
  children: [
    {
      path: 'search-table', // 中划线的路径符合seo规范，所以与name字段的驼峰区分开
      name: 'searchTable',
      component: () => import('@/views/list/search-table/index.vue'),
      meta: {
        locale: 'menu.list.searchTable',
        requiresAuth: true,
      },
    },
    {
      path: 'card',
      name: 'card',
      component: () => import('@/views/list/card/index.vue'),
      meta: {
        locale: 'menu.list.cardList',
        requiresAuth: true,
      },
    },
  ],
};
