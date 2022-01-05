<template>
  <a-menu
    v-model:collapsed="collapsed"
    show-collapse-button
    :auto-open="false"
    :selected-keys="selectedKey"
    :auto-open-selected="true"
    :level-indent="34"
    style="height: 100%"
    @collapse="setCollapse"
  >
    <a-sub-menu v-for="route in appRoute.children" :key="route.name">
      <template #title>
        <component :is="route?.meta?.icon" />{{ $t(route?.meta?.locale || '') }}
      </template>
      <a-menu-item
        v-for="_route in route.children || []"
        :key="_route.name"
        @click="goto(_route)"
      >
        {{ $t(_route?.meta?.locale || '') }}
      </a-menu-item>
    </a-sub-menu>
  </a-menu>
</template>

<script lang="ts">
import { defineComponent, ref, watch } from 'vue';
import {
  useRouter,
  useRoute,
  RouteRecordRaw,
  RouteRecordNormalized,
} from 'vue-router';
import { useStore } from '@/store';
import { MutationTypes } from '@/store/modules/app/mutation-types';

export default defineComponent({
  emit: ['collapse'],
  setup() {
    const store = useStore();
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
      () => store.state.app.menuCollapse,
      (newVal) => {
        collapsed.value = newVal;
      },
      {
        immediate: true,
      }
    );
    const setCollapse = (val: boolean) => {
      store.commit(MutationTypes.APP_UPDATE_SETTING, { menuCollapse: val });
    };
    return {
      goto,
      selectedKey,
      appRoute,
      setCollapse,
      collapsed,
    };
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
