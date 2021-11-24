<template>
  <div class="container">
    <a-breadcrumb class="container-breadcrumb">
      <a-breadcrumb-item>{{ $t('menu.visualization') }}</a-breadcrumb-item>
      <a-breadcrumb-item>
        {{ $t('menu.visualization.dataAnalysis') }}
      </a-breadcrumb-item>
    </a-breadcrumb>
    <div class="wrapper">
      <a-space direction="vertical" :size="24" style="width: 100%">
        <div>
          <a-typography-title class="title-fix" :heading="6">
            {{ $t('dataAnalysis.title.publicOpinion') }}
          </a-typography-title>
          <PublicOpinion />
        </div>
        <div>
          <a-typography-title class="title-fix" :heading="6">
            {{ $t('dataAnalysis.title.reportStuckRate') }}
          </a-typography-title>
          <ReportStuckRate />
        </div>
        <div>
          <a-typography-title class="title-fix" :heading="6">
            {{ $t('dataAnalysis.title.detail') }}
          </a-typography-title>
          <DetailTable />
        </div>
      </a-space>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import PublicOpinion from './components/public-opinion.vue';
import DetailTable from './components/detail-table.vue';
import ReportStuckRate from './components/report-stuck-rate.vue';

export default defineComponent({
  components: {
    PublicOpinion,
    ReportStuckRate,
    DetailTable,
  },
});
</script>
<style scoped lang="less">
.container {
  padding: 16px;
}

.wrapper {
  padding: 20px;
  background-color: var(--color-bg-2);
}
.title-fix {
  margin: 0 0 12px 0;
  font-size: 14;
}
</style>
