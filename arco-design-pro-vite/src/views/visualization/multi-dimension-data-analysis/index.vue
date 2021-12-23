<template>
  <div class="container">
    <a-breadcrumb class="container-breadcrumb">
      <a-breadcrumb-item>
        <icon-home />
      </a-breadcrumb-item>
      <a-breadcrumb-item>{{ $t('menu.visualization') }}</a-breadcrumb-item>
      <a-breadcrumb-item>
        {{ $t('menu.visualization.multiDimensionDataAnalysis') }}
      </a-breadcrumb-item>
    </a-breadcrumb>

    <a-space direction="vertical" :size="12" style="width: 100%">
      <a-row :gutter="16">
        <a-col :span="18">
          <DataOverview />
        </a-col>
        <a-col :span="6">
          <a-space style="width: 100%" direction="vertical" :size="16">
            <UserActions />
            <ContentTypeDistribution />
          </a-space>
        </a-col>
      </a-row>
      <DataChainGrowth />
      <ContentPublishingSource />
    </a-space>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import DataOverview from './components/data-overview.vue';
import DataChainGrowth from './components/data-chain-growth.vue';
import UserActions from './components/user-actions.vue';
import ContentTypeDistribution from './components/content-type-distribution.vue';
import ContentPublishingSource from './components/content-publishing-source.vue';

export default defineComponent({
  components: {
    DataOverview,
    DataChainGrowth,
    UserActions,
    ContentTypeDistribution,
    ContentPublishingSource,
  },
});
</script>

<style scoped lang="less">
.container {
  padding: 20px;
}

:deep(.section-titile) {
  margin-top: 0;
  margin-bottom: 16px;
  font-size: 16px;
}

:deep(.chart-wrap) {
  height: 264px;
}
</style>
