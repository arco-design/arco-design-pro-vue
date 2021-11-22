<template>
  <a-card :bordered="false">
    <a-tabs default-active-tab="liveMethod">
      <a-tab-pane
        key="liveMethod"
        :title="$t('monitor.tab.title.liveMethod')"
      />
      <a-tab-pane
        key="onlinePopulation"
        :title="$t('monitor.tab.title.onlinePopulation')"
      />
    </a-tabs>
    <div class="data-statistic-content">
      <a-radio-group :default-value="3" type="button">
        <a-radio :value="1">{{ $t('monitor.liveMethod.normal') }}</a-radio>
        <a-radio :value="2">{{ $t('monitor.liveMethod.flowControl') }}</a-radio>
        <a-radio :value="3">{{ $t('monitor.liveMethod.video') }}</a-radio>
        <a-radio :value="4">{{ $t('monitor.liveMethod.web') }}</a-radio>
      </a-radio-group>

      <div class="data-statistic-list-wrapper">
        <div class="data-statistic-list-header">
          <a-button type="text">{{ $t('monitor.editCarousel') }}</a-button>
          <a-button disabled>{{ $t('monitor.startCarousel') }}</a-button>
        </div>
        <div class="data-statistic-list-content">
          <DataStatisticList />
        </div>
      </div>
    </div>
  </a-card>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import DataStatisticList from './data-statistic-list.vue';

export default defineComponent({
  components: {
    DataStatisticList,
  },
  setup() {
    //
  },
});
</script>
<style scoped lang="less">
.data-statistic {
  &-content {
    padding: 20px 0;
  }

  &-list {
    &-header {
      margin-top: 16px;
      display: flex;
      justify-content: space-between;
    }

    &-content {
      margin-top: 16px;
    }
  }
}
</style>
