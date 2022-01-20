<script lang="tsx">
import { defineComponent, ref, watch, h, compile } from 'vue';
import { useI18n } from 'vue-i18n';
import {
  useRouter,
  useRoute,
  RouteRecordRaw,
  RouteRecordNormalized,
} from 'vue-router';
import { useAppStore } from '@/store';

export default defineComponent({
  emit: ['collapse'],
  setup() {
    const { t } = useI18n();
    const appStore = useAppStore();
    const router = useRouter();
    const route = useRoute();
    const collapsed = ref(false);
    const appRoute = router
      .getRoutes()
      .find((el) => el.name === 'root') as RouteRecordNormalized;
    // In this case only two levels of menus are available
    // You can expand as needed

    const selectedKey = ref<string[]>([]);
    const goto = (item: RouteRecordRaw) => {
      router.push({
        name: item.name,
      });
    };
    watch(
      route,
      (newVal) => {
        if (newVal.meta.requiresAuth) {
          const key = newVal.matched[2].name as string;
          selectedKey.value = [key];
        }
      },
      {
        immediate: true,
      }
    );
    watch(
      () => appStore.menuCollapse,
      (newVal) => {
        collapsed.value = newVal;
      },
      {
        immediate: true,
      }
    );
    const setCollapse = (val: boolean) => {
      appStore.updateSettings({ menuCollapse: val });
    };

    return () => (
      <a-menu
        v-model:collapsed={collapsed.value}
        show-collapse-button
        auto-open={false}
        selected-keys={selectedKey.value}
        auto-open-selected={true}
        level-indent={34}
        style="height: 100%"
        onCollapse={setCollapse}
      >
        {appRoute.children.map((route) => {
          const slots = {
            title: () =>
              h(
                compile(
                  `<${route?.meta?.icon}/>${t(route?.meta?.locale || '')}`
                )
              ),
          };
          return (
            <a-sub-menu key={route.name} v-slots={slots}>
              {route?.children?.map((_route) => {
                return (
                  <a-menu-item key={_route.name} onClick={() => goto(_route)}>
                    {t(_route?.meta?.locale || '')}
                  </a-menu-item>
                );
              })}
            </a-sub-menu>
          );
        })}
      </a-menu>
    );
  },
});
</script>

<style lang="less" scoped>
:deep(.arco-menu-inner) {
  .arco-menu-inline-header {
    display: flex;
    align-items: center;
  }
  .arco-icon {
    &:not(.arco-icon-down) {
      font-size: 18px;
    }
  }
}
</style>
