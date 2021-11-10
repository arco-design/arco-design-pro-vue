<template>
  <a-layout class="layout" style="height: 400px">
    <div class="layout-navbar">
      <NavBar />
    </div>
    <a-layout>
      <a-layout>
        <a-layout-sider class="layout-sider">
          <div class="menu-wrapper">
            <Menu :routers="[]" />
          </div>
        </a-layout-sider>
        <a-layout>
          <a-layout-content class="layout-content">
            <router-view />
          </a-layout-content>
          <Footer />
        </a-layout>
      </a-layout>
    </a-layout>
  </a-layout>
</template>
<script lang="ts">
import NavBar from '@/components/navbar/index.vue';
import Menu from '@/components/menu/index.vue';
import Footer from '@/components/footer/index.vue';

export default {
  components: {
    NavBar,
    Menu,
    Footer,
  },
  setup(props) {
    console.log(props);
  },
};
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

  > :global(.arco-layout-sider-children) {
    overflow-y: hidden;
  }

  .collapseBtn {
    height: 24px;
    width: 24px;
    background-color: var(--color-fill-1);
    color: var(--color-text-3);
    border-radius: 2px;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    // 位置
    position: absolute;
    bottom: 12px;
    right: 12px;

    &:hover {
      background-color: var(--color-fill-3);
    }
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

.spin {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 400px;
}
</style>
