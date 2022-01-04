<template>
  <div class="container">
    <Breadcrumb
      :items="['menu.visualization', 'menu.visualization.dataAnalysis']"
    />
    <a-space direction="vertical" :size="12" fill>
      <a-space direction="vertical" :size="16" fill>
        <div class="space-unit">
          <PublicOpinion />
        </div>
        <div>
          <a-row :gutter="20">
            <a-col :span="16">
              <ContentPublishRatio />
            </a-col>
            <a-col :span="8">
              <PopularAuthor />
            </a-col>
          </a-row>
        </div>
        <div>
          <ContentPeriodAnalysis />
        </div>
      </a-space>
    </a-space>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import PublicOpinion from './components/public-opinion.vue';
import ContentPeriodAnalysis from './components/content-period-analysis.vue';
import ContentPublishRatio from './components/content-publish-ratio.vue';
import PopularAuthor from './components/popular-author.vue';

export default defineComponent({
  components: {
    PublicOpinion,
    ContentPeriodAnalysis,
    ContentPublishRatio,
    PopularAuthor,
  },
});
</script>

<style scoped lang="less">
.container {
  padding: 0 20px 20px 20px;
  margin-bottom: 20px;
}

.space-unit {
  background-color: var(--color-bg-2);
  border-radius: 4px;
}

.title-fix {
  margin: 0 0 12px 0;
  font-size: 14;
}
:deep(.section-titile) {
  margin: 0 0 12px 0;
  font-size: 14px;
}
</style>
