<template>
  <div class="container">
    <div class="left-side">
      <a-space class="left-space" direction="vertical" :size="12" fill>
        <Banner />
        <DataPanel />
        <ContentChart />
      </a-space>
      <a-row :gutter="16">
        <a-col :span="12">
          <PopularContent />
        </a-col>
        <a-col :span="12">
          <CateforiesPercent />
        </a-col>
      </a-row>
    </div>
    <div class="right-side">
      <a-space style="width: 280px" direction="vertical" :size="16">
        <div class="moduler-wrap">
          <QuickOperation />
          <RecentlyVisited />
        </div>
        <Carousel />
        <Announcement />
        <Docs />
      </a-space>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Banner from './components/banner.vue';
import DataPanel from './components/data-panel.vue';
import ContentChart from './components/content-chart.vue';
import PopularContent from './components/popular-content.vue';
import CateforiesPercent from './components/categories-percent.vue';
import RecentlyVisited from './components/recently-visited.vue';
import QuickOperation from './components/quick-operation.vue';
import Announcement from './components/announcement.vue';
import Carousel from './components/carousel.vue';
import Docs from './components/docs.vue';

export default defineComponent({
  components: {
    Banner,
    DataPanel,
    ContentChart,
    PopularContent,
    CateforiesPercent,
    RecentlyVisited,
    QuickOperation,
    Announcement,
    Carousel,
    Docs,
  },
});
</script>

<style scoped lang="less">
.container {
  display: flex;
  padding: 20px;
}

.left-side {
  width: 100%;
  flex: 1;
  .left-space {
    margin-bottom: 16px;
    background-color: var(--color-bg-2);
    border-radius: 4px;
  }
}

.right-side {
  margin-left: 16px;
  flex-basis: 280px;
  // display: none;
}

.panel {
  margin-bottom: 12px;
  background-color: var(--color-bg-2);
  border-radius: 2px;
}
:deep(.bottom-card) {
  min-height: 388px;
}
:deep(.panel-border) {
  margin-bottom: 0;
  border-bottom: 1px solid rgb(var(--gray-2));
}
.moduler-wrap {
  border-radius: 4px;
  background-color: var(--color-bg-2);
  :deep(.text) {
    font-size: 12px;
    text-align: center;
    color: rgb(var(--gray-8));
  }

  :deep(.wrapper) {
    margin-bottom: 8px;
    text-align: center;
    cursor: pointer;

    &:last-child {
      .text {
        margin-bottom: 0;
      }
    }
    &:hover {
      .icon {
        color: rgb(var(--arcoblue-6));
        background-color: #e8f3ff;
      }
      .text {
        color: rgb(var(--arcoblue-6));
      }
    }
  }

  :deep(.icon) {
    display: inline-block;
    width: 32px;
    height: 32px;
    margin-bottom: 4px;
    color: rgb(var(--dark-gray-1));
    line-height: 32px;
    font-size: 16px;
    text-align: center;
    background-color: rgb(var(--gray-1));
    border-radius: 4px;
  }
}
</style>
