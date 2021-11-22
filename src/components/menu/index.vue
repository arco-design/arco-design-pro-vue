<template>
  <a-menu show-collapse-button :auto-open="true" :selected-keys="selectedKey">
    <a-sub-menu v-for="route in appRoute.children" :key="route.name">
      <template #title
        ><component :is="route.meta.icon" />{{
          $t(route.meta.locale)
        }}</template
      >
      <a-menu-item
        v-for="_route in route.children"
        :key="_route.name"
        @click="goto(_route)"
        >{{ $t(_route.meta.locale) }}</a-menu-item
      >
    </a-sub-menu>
  </a-menu>
</template>
<script lang="ts">
import { defineComponent, ref, watch } from 'vue';
import { RouteRecordRaw, useRouter, useRoute, RouteRecord } from 'vue-router';
// import routerList from '@/router/modules';

export default defineComponent({
  setup() {
    const router = useRouter();
    const route = useRoute();
    const appRoute = router.getRoutes().find((el) => el.path === '/app');
    // 只提供二级菜单
    const openKey = ref(appRoute?.children.map((el) => el.name) || []);
    // 此处选中项，后期可配置meta参数进行指向，而不是直接使用name，当项目层级深入要对选中进行统一处理
    // 梳理项目层级后使用match也可以，不过感觉语句逻辑不清晰。
    // const currentSelect = meta.menuSelectKey || name;
    const selectedKey = ref([]);
    const goto = (item: RouteRecordRaw) => {
      router.push({
        name: item.name,
      });
    };
    watch(
      route,
      (pre: RouteRecord, cur: RouteRecord) => {
        const r = cur || pre; // immediate下因为执行时机，cur不存在
        selectedKey.value = [r.matched[2].name];
      },
      {
        immediate: true,
      }
    );
    return {
      goto,
      openKey,
      selectedKey,
      appRoute,
    };
  },
});
</script>
<style scoped lang="less"></style>
