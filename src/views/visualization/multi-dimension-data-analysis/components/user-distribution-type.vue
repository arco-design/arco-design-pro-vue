<template>
  <a-card :bordered="false">
    <a-typography-title class="section-titile" :heading="6">
      {{ $t('multiDAnalysis.card.title.userDistributionType') }}
    </a-typography-title>
    <div class="chart-wrap">
      <Chart :option="chartOption" />
    </div>
  </a-card>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import useChartOption from '@/hooks/chart-option';

export default defineComponent({
  setup() {
    const { chartOption } = useChartOption({
      grid: {
        left: 40,
        right: 0,
        top: 20,
        bottom: 20,
      },
      legend: {
        left: 'center',
        data: ['开发者', '设计师', '其他'],
        bottom: 0,
        icon: 'circle',
        itemWidth: 8,
      },
      tooltip: {
        show: true,
        trigger: 'item',
      },
      series: [
        {
          type: 'pie',
          radius: ['40%', '70%'],
          center: ['50%', '50%'],
          data: [
            {
              value: 64,
              name: '开发者',
              type: 'pie',
            },
            {
              value: 33,
              name: '设计师',
              type: 'pie',
            },
            {
              value: 5,
              name: '其他',
              type: 'pie',
            },
          ],
        },
      ],
    });
    return {
      chartOption,
    };
  },
});
</script>
<style scoped lang="less"></style>
