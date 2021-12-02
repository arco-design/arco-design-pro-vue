<template>
  <a-card :bordered="false">
    <a-typography-title class="section-titile" :heading="6">
      {{ $t('multiDAnalysis.card.title.productEvaluation') }}
    </a-typography-title>
    <div class="chart-wrap">
      <Chart :option="chartOption" />
    </div>
  </a-card>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue';
import { useI18n } from 'vue-i18n';
import useChartOption from '@/hooks/chart-option';

export default defineComponent({
  setup() {
    const { t } = useI18n();
    const { chartOption } = useChartOption({
      grid: {
        left: 40,
        right: 0,
        top: 20,
        bottom: 20,
      },
      radar: {
        indicator: [
          {
            name: computed(() =>
              t('multiDAnalysis.productEvaluation.component')
            ),
            max: 2050,
          },
          {
            name: computed(() => t('multiDAnalysis.productEvaluation.docs')),
            max: 1600,
          },
          {
            name: computed(() =>
              t('multiDAnalysis.productEvaluation.feedback')
            ),
            max: 3000,
          },
          {
            name: computed(() => t('multiDAnalysis.productEvaluation.design')),
            max: 3800,
          },
          {
            name: computed(() =>
              t('multiDAnalysis.productEvaluation.community')
            ),
            max: 5200,
          },
          {
            name: computed(() => t('multiDAnalysis.productEvaluation.ecology')),
            max: 2500,
          },
        ],
      },
      tooltip: {
        show: true,
        trigger: 'item',
      },
      series: [
        {
          type: 'radar',
          radius: ['40%', '70%'],
          center: ['50%', '50%'],
          data: [
            {
              value: [1700, 1400, 2400, 2800, 3900, 1900],
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
