<template>
  <div class="container">
    <a-breadcrumb class="container-breadcrumb">
      <a-breadcrumb-item>
        <icon-home />
      </a-breadcrumb-item>
      <a-breadcrumb-item>{{ $t('menu.visualization') }}</a-breadcrumb-item>
      <a-breadcrumb-item>
        {{ $t('menu.visualization.dataAnalysis') }}
      </a-breadcrumb-item>
    </a-breadcrumb>
    <a-space direction="vertical" :size="12" style="width: 100%">
      <a-space direction="vertical" :size="16" style="width: 100%">
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
  padding: 16px;
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
