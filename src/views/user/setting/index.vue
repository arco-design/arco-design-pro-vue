<template>
  <div class="container">
    <a-breadcrumb style="margin-bottom: 20px">
      <a-breadcrumb-item>{{ $t('menu.user') }}</a-breadcrumb-item>
      <a-breadcrumb-item>{{ $t('menu.user.setting') }}</a-breadcrumb-item>
    </a-breadcrumb>
    <div class="wrapper">
      <div class="sidebar">
        <a-menu
          mode="vertical"
          :selected-keys="selectedKeys"
          @menu-item-click="onClickMenuItem"
        >
          <a-menu-item v-for="menu in menuList" :key="menu.key">
            {{ menu.title }}
          </a-menu-item>
        </a-menu>
      </div>
      <div class="content">
        <component :is="renderComponent" />
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref, computed } from 'vue';
import { useI18n } from 'vue-i18n';
import Info from './components/info.vue';

export default defineComponent({
  components: {
    Info,
  },
  setup() {
    const { t } = useI18n();

    const menuList = computed(() => [
      {
        key: 'info',
        title: t('userSetting.menu.title.info'),
        component: 'Info',
      },
      {
        key: 'account',
        title: t('userSetting.menu.title.account'),
        component: 'Info',
      },
      {
        key: 'password',
        title: t('userSetting.menu.title.password'),
        component: 'Info',
      },
      {
        key: 'message',
        title: t('userSetting.menu.title.message'),
        component: 'Info',
      },
      {
        key: 'result',
        title: t('userSetting.menu.title.result'),
        component: 'Info',
      },
      {
        key: 'data',
        title: t('userSetting.menu.title.data'),
        component: 'Info',
      },
    ]);
    const selectedKeys = ref([menuList.value[0].key]);
    const onClickMenuItem = (name) => {
      selectedKeys.value = [name];
    };
    const renderComponent = computed(() => {
      return (
        menuList.value.find((el) => el.key === selectedKeys.value[0])
          ?.component ?? 'Info'
      );
    });
    return {
      menuList,
      selectedKeys,
      renderComponent,
      onClickMenuItem,
    };
  },
});
</script>
<style scoped lang="less">
.container {
  padding: 20px;
}

.wrapper {
  display: flex;
  background-color: var(--color-bg-2);

  .sidebar {
    width: 200px;
    border-right: 1px solid var(--color-border);
  }

  .content {
    flex: 1;
    padding: 20px 24px;
  }
}
:deep(.section-title) {
  margin-top: 0;
  margin-bottom: 16px;
  font-size: 14px;
}
</style>
