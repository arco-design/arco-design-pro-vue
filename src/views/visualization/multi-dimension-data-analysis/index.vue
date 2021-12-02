<template>
  <div class="container">
    <a-breadcrumb class="container-breadcrumb">
      <a-breadcrumb-item>{{ $t('menu.visualization') }}</a-breadcrumb-item>
      <a-breadcrumb-item>
        {{ $t('menu.visualization.multiDimensionDataAnalysis') }}
      </a-breadcrumb-item>
    </a-breadcrumb>
    <a-space direction="vertical" :size="12" style="width: 100%">
      <DataOverview />
      <DataChainGrowth />
      <div>
        <a-row :gutter="12">
          <a-col :span="16">
            <DownloadHistory />
          </a-col>
          <a-col :span="8">
            <DownloadRaking />
          </a-col>
        </a-row>
      </div>
      <div>
        <a-row :gutter="12">
          <a-col :span="6">
            <UserDistributionGeo />
          </a-col>
          <a-col :span="6">
            <UserDistributionType />
          </a-col>
          <a-col :span="6">
            <ProductEvaluation />
          </a-col>
          <a-col :span="6">
            <ActiveContributors />
          </a-col>
        </a-row>
      </div>
    </a-space>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import DataOverview from './components/data-overview.vue';
import DataChainGrowth from './components/data-chain-growth.vue';
import DownloadHistory from './components/download-history.vue';
import DownloadRaking from './components/download-ranking.vue';
import UserDistributionGeo from './components/user-distribution-geo.vue';
import UserDistributionType from './components/user-distribution-type.vue';
import ProductEvaluation from './components/product-evaluation.vue';
import ActiveContributors from './components/active-contributors.vue';

export default defineComponent({
  components: {
    DataOverview,
    DataChainGrowth,
    DownloadHistory,
    DownloadRaking,
    UserDistributionGeo,
    UserDistributionType,
    ProductEvaluation,
    ActiveContributors,
  },
});
</script>

<style scoped lang="less">
.container {
  padding: 16px;
}

:deep(.section-titile) {
  margin-top: 0;
  margin-bottom: 16px;
  font-size: 14px;
}

:deep(.chart-wrap) {
  height: 264px;
}
</style>
