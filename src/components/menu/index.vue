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
import {
  useRouter,
  useRoute,
  RouteRecord,
  RouteRecordNormalized,
} from 'vue-router';
// import routerList from '@/router/modules';

export default defineComponent({
  setup() {
    const router = useRouter();
    const route = useRoute();
    const appRoute = router
      .getRoutes()
      .find((el) => el.path === '/app') as RouteRecordNormalized;
    // In this case only two levels of menus are available
    // You can expand as needed

    const selectedKey = ref<string[]>([]);
    const goto = (item: RouteRecord) => {
      router.push({
        name: item.name,
      });
    };
    watch(
      route,
      () => {
        if (route.meta.requiresAuth) {
          const key = route.matched[2].name as string;
          selectedKey.value = [key];
        }
      },
      {
        immediate: true,
      }
    );
    return {
      goto,
      selectedKey,
      appRoute,
    };
  },
});
</script>
<style scoped lang="less"></style>
