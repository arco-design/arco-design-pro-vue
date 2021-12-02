<template>
  <a-card :bordered="false">
    <a-typography-title class="section-titile" :heading="6">
      {{ $t('multiDAnalysis.card.title.userDistributionGeo') }}
    </a-typography-title>
    <div class="chart-wrap">
      <Chart :option="chartOption" />
    </div>
  </a-card>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import * as echarts from 'echarts';

import useChartOption from '@/hooks/chart-option';

// eslint-disable-next-line import/extensions
import worldJson from '@/assets/world.json';

echarts.registerMap('world', worldJson);

export default defineComponent({
  setup() {
    const { chartOption } = useChartOption({
      grid: {
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
      },
      tooltip: {
        show: true,
        trigger: 'item',
      },
      geo: {
        map: 'world',
        regions: [
          {
            name: 'China',
            itemStyle: {
              areaColor: '#6b9af9',
              color: '#6b9af9',
            },
          },
        ],
        zoom: 1.5,
        itemStyle: {
          borderColor: '#ccc',
          areaColor: 'transparent',
        },
      },
    });
    return {
      chartOption,
    };
  },
});
</script>
<style scoped lang="less"></style>
