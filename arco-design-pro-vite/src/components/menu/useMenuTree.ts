import { computed } from 'vue';
import { useRouter, RouteRecordRaw, RouteRecordNormalized } from 'vue-router';
import usePermission from '@/hooks/permission';
import { useAppStore } from '@/store';

export default function useMenuTree() {
  const router = useRouter();
  const permission = usePermission();
  const appStore = useAppStore();
  const appRoute = computed(() => {
    if (appStore.menuFromServer) {
      return appStore.appServerMenuConfig;
    }
    return router
      .getRoutes()
      .filter((el) => el.meta.requiresAuth && el.meta.order !== undefined)
      .map((el) => {
        const { name, path, meta, redirect, children } = el;
        return {
          name,
          path,
          meta,
          redirect,
          children,
        };
      });
  });
  const menuTree = computed(() => {
    const copyRouter = JSON.parse(JSON.stringify(appRoute.value));
    copyRouter.sort((a: RouteRecordNormalized, b: RouteRecordNormalized) => {
      return (a.meta.order || 0) - (b.meta.order || 0);
    });
    function travel(_routes: RouteRecordRaw[], layer: number) {
      if (!_routes) return null;

      const collector: any = _routes.map((element) => {
        // no access
        if (!permission.accessRouter(element)) {
          return null;
        }

        // leaf node
        if (element.meta?.hideChildrenInMenu || !element.children) {
          element.children = [];
          return element;
        }

        // route filter hideInMenu true
        if (element.meta?.hideInMenu) {
          return null;
        }
        element.children = element.children.filter(
          (x) => x.meta?.hideInMenu !== true
        );

        // Associated child node
        const subItem = travel(element.children, layer + 1);

        if (subItem.length) {
          element.children = subItem;
          return element;
        }
        // the else logic
        if (layer > 1) {
          element.children = subItem;
          return element;
        }

        if (element.meta?.hideInMenu === false) {
          return element;
        }

        return null;
      });
      return collector.filter(Boolean);
    }
    return travel(copyRouter, 0);
  });

  return {
    menuTree,
  };
}
