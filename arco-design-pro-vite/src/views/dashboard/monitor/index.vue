<template>
  <div class="container">
    <Breadcrumb :items="['menu.dashboard', 'menu.dashboard.monitor']" />
    <div class="layout">
      <div class="layout-left-side">
        <ChatPanel />
      </div>
      <div class="layout-content">
        <a-space :size="16" direction="vertical" fill>
          <Studio />
          <DataStatistic />
        </a-space>
      </div>
      <div class="layout-right-side">
        <a-space :size="16" direction="vertical" fill>
          <StudioStatus />
          <QuickOperation />
          <StudioInformation />
        </a-space>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import ChatPanel from './components/chat-panel.vue';
import Studio from './components/studio.vue';
import DataStatistic from './components/data-statistic.vue';
import StudioStatus from './components/studio-status.vue';
import QuickOperation from './components/quick-operation.vue';
import StudioInformation from './components/studio-information.vue';

export default defineComponent({
  components: {
    ChatPanel,
    Studio,
    DataStatistic,
    StudioStatus,
    QuickOperation,
    StudioInformation,
  },
  setup() {
    //
  },
});
</script>

<style scoped lang="less">
.container {
  padding: 0 20px 20px 20px;
}

.layout {
  display: flex;

  &-left-side {
    flex-basis: 300px;
  }

  &-content {
    flex: 1;
    padding: 0 16px;
  }

  &-right-side {
    flex-basis: 280px;
  }
}
</style>

<style lang="less" scoped>
.mobile {
  .layout {
    flex-wrap: wrap;
    &-left-side {
      flex: 1;
      flex-basis: 100%;
      margin-bottom: 16px;
    }

    &-content {
      flex: none;
      flex-basis: 100%;
      padding: 0;
      order: -1;
      margin-bottom: 16px;
    }

    &-right-side {
      flex-basis: 100%;
    }
  }
}
</style>
