<template>
  <div class="container">
    <Banner />
    <div class="content">
      <div class="left-side">
        <a-row>
          <DataPanel />
          <a-col :span="12" style="padding-right: 12px">
            <TeamInfo />
            <ProjectProgress />
            <RecentlyVisited />
          </a-col>
          <a-col :span="12">
            <RecentlyProjects />
            <ConsumeRecord />
          </a-col>
        </a-row>
      </div>
      <div class="right-side">
        <a-space style="width: 100%" direction="vertical" :size="12">
          <QuickOperation />
          <Carousel />
          <Docs />
        </a-space>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Banner from './components/banner.vue';
import DataPanel from './components/data-panel.vue';
import TeamInfo from './components/team-info.vue';
import ProjectProgress from './components/project-progress.vue';
import RecentlyVisited from './components/recently-visited.vue';
import RecentlyProjects from './components/recently-projects.vue';
import ConsumeRecord from './components/consume-record.vue';
import QuickOperation from './components/quick-operation.vue';
import Carousel from './components/carousel.vue';
import Docs from './components/docs.vue';

export default defineComponent({
  components: {
    Banner,
    DataPanel,
    TeamInfo,
    ProjectProgress,
    RecentlyVisited,
    RecentlyProjects,
    ConsumeRecord,
    QuickOperation,
    Carousel,
    Docs,
  },
});
</script>

<style scoped lang="less">
.content {
  display: flex;
  padding: 20px;
}

.left-side {
  flex: 1;
}

.right-side {
  width: 280px;
  margin-left: 12px;
}

.panel {
  margin-bottom: 12px;
  background-color: var(--color-bg-2);
  border-radius: 2px;
}
</style>
