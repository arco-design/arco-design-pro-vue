<template>
  <a-layout class="layout">
    <div v-if="navbar" class="layout-navbar">
      <NavBar />
    </div>
    <a-layout>
      <a-layout>
        <a-layout-sider
          v-if="menu"
          class="layout-sider"
          :style="{ width: menuWidth, paddingTop: navbar ? '60px' : '' }"
        >
          <div class="menu-wrapper">
            <Menu :style="{ width: menuWidth }" />
          </div>
        </a-layout-sider>
        <a-layout class="layout-content" :style="paddingStyle">
          <a-layout-content>
            <router-view />
          </a-layout-content>
          <Footer v-if="footer" />
        </a-layout>
      </a-layout>
    </a-layout>
  </a-layout>
</template>
<script lang="ts">
import { defineComponent, computed } from 'vue';
import baseStore, { useStore } from '@/store';
import NavBar from '@/components/navbar/index.vue';
import Menu from '@/components/menu/index.vue';
import Footer from '@/components/footer/index.vue';
import { ActionTypes } from '@/store/modules/user/action-types';

export default defineComponent({
  components: {
    NavBar,
    Menu,
    Footer,
  },
  async beforeRouteEnter(to, from, next) {
    try {
      await baseStore.dispatch(ActionTypes.USER_INFO);
      next();
    } catch (error) {
      next({
        name: 'login',
        query: {
          redirect: to.name,
          ...to.query,
        },
      });
    }
  },
  setup() {
    const store = useStore();
    const appState = store.state.app;
    const navbarHeight = `60px`;
    const navbar = computed(() => appState.navbar);
    const menu = computed(() => appState.menu);
    const footer = computed(() => appState.footer);
    const menuWidth = computed(() => `${appState.menuWidth}px`);
    const paddingStyle = computed(() => {
      const paddingLeft = menu.value ? { paddingLeft: menuWidth.value } : {};
      const paddingTop = navbar.value ? { paddingTop: navbarHeight } : {};
      return { ...paddingLeft, ...paddingTop };
    });

    return {
      navbar,
      menu,
      footer,
      menuWidth,
      paddingStyle,
    };
  },
});
</script>
<style scoped lang="less">
@nav-size-height: 60px;
@layout-max-width: 1100px;

.layout {
  width: 100%;
  height: 100%;
}

.layout-navbar {
  position: fixed;
  width: 100%;
  min-width: @layout-max-width;
  top: 0;
  left: 0;
  height: @nav-size-height;
  z-index: 100;
}

.layout-sider {
  position: fixed;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 99;
  box-sizing: border-box;

  &::after {
    content: '';
    display: block;
    position: absolute;
    top: 0;
    right: -1px;
    width: 1px;
    height: 100%;
    background-color: var(--color-border);
  }

  > :deep(.arco-layout-sider-children) {
    overflow-y: hidden;
  }
}

.menu-wrapper {
  overflow: auto;
  height: 100%;
}

.layout-content {
  background-color: var(--color-fill-2);
  min-width: @layout-max-width;
  min-height: 100vh;
  transition: padding-left 0.2s;
  box-sizing: border-box;
}

:deep(.container-breadcrumb) {
  margin-bottom: 20px;
}
</style>
