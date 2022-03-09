export default {
  path: '/login',
  name: 'login',
  component: () => import('@/views/login/index.vue'),
  meta: {
    requiresAuth: false,
  },
};
