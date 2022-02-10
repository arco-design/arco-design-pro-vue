<template>
  <main class="demo-page-preview">
    <a-affix>
      <a-tabs
        v-model:active-key="activeTab"
        class="demo-page-tab"
        type="rounded"
      >
        <a-tab-pane :key="1" title="通用" />
        <a-tab-pane :key="2" title="导航" />
        <a-tab-pane :key="3" title="数据展示" />
        <a-tab-pane :key="4" title="数据输入" />
        <a-tab-pane :key="5" title="反馈" />
      </a-tabs>
    </a-affix>
    <div>
      <Common v-if="activeTab === 1" />
      <Navigator v-else-if="activeTab === 2" />
      <DataDisplay v-else-if="activeTab === 3" />
      <DataInput v-else-if="activeTab === 4" />
      <Feedback v-else-if="activeTab === 5" />
    </div>
  </main>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import Common from './common.vue';
import Navigator from './navigator.vue';
import DataDisplay from './data-display.vue';
import DataInput from './data-input.vue';
import Feedback from './feedback/index.vue';

export default defineComponent({
  components: {
    Common,
    Navigator,
    DataDisplay,
    DataInput,
    Feedback,
  },
  setup() {
    const activeTab = ref(1);
    return {
      activeTab,
    };
  },
});
</script>

<style scoped lang="less">
.demo-page-preview {
  padding: 12px 20px 20px;
}

.demo-page-tab {
  padding: 8px 0;
  background-color: var(--color-fill-2);
}
:deep(.component-demo-list) {
  margin-bottom: 12px;
  padding: 16px 58px 36px;
  background-color: var(--color-bg-1);
  border-radius: 6px;
}

.component-demo-item {
  margin-top: 20px;
}

.component-demo-item-large {
  margin-top: 28px;
}

.component-demo-item > * {
  margin-right: 16px;
}

.arco-avatar-trigger-icon-mask {
  opacity: 1;
}

.demo-item-column > * {
  margin-bottom: 16px;
  width: 100%;
}

.demo-item-column > *:last-child {
  margin-bottom: 0 !important;
}

.arco-message-wrapper,
.arco-notification-wrapper {
  position: relative;
}

.arco-message-wrapper > div {
  text-align: left !important;
}

.arco-message-wrapper-top {
  top: 0;
}

.arco-modal-wrapper {
  position: relative;
}

.component-demo-btn {
  display: inline-block;
  margin-right: 16px;
}

.component-demo-btn > * {
  margin-top: 20px;
}

.arco-slider-road.arco-slider-road-vertical {
  min-height: 132px;
}

.arco-affix {
  z-index: 1500;
}
</style>

<style lang="less">
body[arco-theme='dark'] .demo-page-tab {
  background-color: var(--color-bg-2);
}
.demo-page-tab {
  .arco-tabs-nav-type-rounded .arco-tabs-tab:hover,
  .arco-tabs-nav-type-rounded .arco-tabs-tab-active,
  .arco-tabs-nav-type-rounded .arco-tabs-tab-active:hover {
    background-color: var(--color-bg-1);
  }
}
</style>
