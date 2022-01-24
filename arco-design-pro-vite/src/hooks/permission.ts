import { RouteLocationNormalized, RouteRecordRaw } from 'vue-router';
import { useUserStore } from '@/store';

export default function usePermission() {
  const userStore = useUserStore();
  return {
    accessRouter(route: RouteLocationNormalized | RouteRecordRaw) {
      return (
        !route.meta?.requiresAuth ||
        !route.meta?.role ||
        route.meta?.role?.includes('*') ||
        route.meta?.role?.includes(userStore.role)
      );
    },
    // You can add any rules you want
  };
}
