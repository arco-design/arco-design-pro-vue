import type { Router, RouteRecordNormalized } from 'vue-router';
import { useAppStore } from '@/store';

const whiteList = [
  { name: 'notFound', children: [] },
  { name: 'login', children: [] },
];

export default function setupServerPermissionGuard(router: Router) {
  router.beforeEach(async (to, from, next) => {
    // A simple example 简单示例

    // 针对来自服务端的菜单配置进行处理
    // Handle routing configuration from the server

    // 根据需要自行完善来源于服务端的菜单配置的permission逻辑
    // Refine the permission logic from the server's menu configuration as needed
    const appStore = useAppStore();
    if (appStore.menuFromServer) {
      const serverMenuConfig = [...appStore.appServerMenuConfig, ...whiteList];
      let exist = false;
      while (serverMenuConfig.length) {
        const element = serverMenuConfig.shift();
        if (element?.name === to.name) exist = true;

        if (element?.children) {
          serverMenuConfig.push(
            ...(element.children as unknown as RouteRecordNormalized[])
          );
        }
      }
      if (exist) next();
      else next({ name: 'notFound' });
    } else {
      next();
    }
  });
}
