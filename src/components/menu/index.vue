<template>
  <a-menu
    show-collapse-button
    :default-open-keys="openKey"
    :default-selected-keys="selectedKey"
  >
    <a-sub-menu v-for="route in routes" :key="route.name">
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
import { defineComponent, PropType, ref } from 'vue';
import { RouteRecordRaw, useRouter, useRoute } from 'vue-router';

export default defineComponent({
  props: {
    routes: {
      type: Array as PropType<RouteRecordRaw[]>,
      default() {
        return [];
      },
    },
  },
  setup() {
    const router = useRouter();
    const { matched } = useRoute();
    // 只提供二级菜单
    const openKey = ref([matched[1].name]);
    const selectedKey = ref([matched[2].name]);
    const goto = (item: RouteRecordRaw) => {
      router.push({
        name: item.name,
      });
    };
    return {
      goto,
      openKey,
      selectedKey,
    };
  },
});
</script>
<style scoped lang="less"></style>
