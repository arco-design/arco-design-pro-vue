<template>
  <a-spin :loading="loading" style="width: 100%">
    <a-card :bordered="false">
      <a-typography-title class="section-titile" :heading="6">
        {{ $t('multiDAnalysis.card.title.dataOverview') }}
      </a-typography-title>
      <a-row justify="space-between">
        <a-col
          v-for="(item, idx) in renderData"
          :key="idx"
          :span="24 / renderData.length"
        >
          <a-statistic
            :title="item.title"
            :value="item.value"
            show-group-separator
          >
            <template #prefix>
              <span
                class="statistic-prefix"
                :style="{ background: item.prefix.background }"
              >
                <component :is="item.prefix.icon" />
              </span>
            </template>
          </a-statistic>
        </a-col>
      </a-row>
      <Chart
        style="width: 100%; height: 370px; margin-top: 20px"
        :option="chartOption"
      />
    </a-card>
  </a-spin>
</template>

<script lang="ts">
import { defineComponent, computed, ref } from 'vue';
import { useI18n } from 'vue-i18n';
import { queryDataOverview } from '@/api/visualization';
import useLoading from '@/hooks/loading';

const generateSeries = (name: string, lineColor: string) => {
  return {
    name,
    data: [] as number[],
    stack: 'Total',
    type: 'line',
    smooth: true,
    emphasis: {
      focus: 'series',
    },
    lineStyle: {
      width: 2,
      color: lineColor,
    },
    showSymbol: false,
    areaStyle: {
      opacity: 0.1,
      color: lineColor,
    },
  };
};
export default defineComponent({
  setup() {
    const { t } = useI18n();
    const { loading, setLoading } = useLoading(true);
    const renderData = computed(() => [
      {
        title: t('multiDAnalysis.dataOverview.contentProduction'),
        value: 1902,
        prefix: {
          icon: 'icon-desktop',
          background: '#f53f3f',
        },
      },
      {
        title: t('multiDAnalysis.dataOverview.contentClick'),
        value: 2445,
        prefix: {
          icon: 'icon-code',
          background: '#0fc6c2',
        },
      },
      {
        title: t('multiDAnalysis.dataOverview.contentExposure'),
        value: 3034,
        prefix: {
          icon: 'icon-user',
          background: '#175dff',
        },
      },
      {
        title: t('multiDAnalysis.dataOverview.activeUsers'),
        value: 1275,
        prefix: {
          icon: 'icon-user',
          background: '#ff7d03',
        },
      },
    ]);
    const chartOption = ref({
      grid: {
        left: '2.6%',
        right: '4',
        top: '40',
        bottom: '40',
      },
      xAxis: {
        type: 'category',
        offset: 2,
        data: [] as string[],
        boundaryGap: false,
        axisLabel: {
          color: '#4E5969',
          formatter(value: number, idx: number) {
            if (idx === 0) return '';
            if (idx === chartOption.value.xAxis.data.length - 1) return '';
            return `${value}`;
          },
        },
        axisLine: {
          show: false,
        },
        axisTick: {
          show: false,
        },
        splitLine: {
          show: false,
        },
        axisPointer: {
          show: true,
          lineStyle: {
            color: '#23ADFF',
            width: 2,
          },
        },
      },
      yAxis: {
        type: 'value',
        axisLine: {
          show: false,
        },
        axisLabel: {
          formatter(value: number, idx: number) {
            if (idx === 0) return value;
            return `${value / 1000}k`;
          },
        },
      },
      tooltip: {
        trigger: 'axis',
        // showDelay: 2,
        // showContent: false,
        formatter(arr: unknown) {
          const [d, d1, d2, d3] = arr;
          return `<div>
            <p class="tooltip-title">${d.axisValueLabel}</p>
            <div class="content-panel">
              <p>
                <span style="background-color: ${
                  d.color
                }" class="tooltip-item-icon"></span><span>${d.seriesName}</span>
              </p>
              <span class="tooltip-value">${d.value.toLocaleString()}</span>
            </div>
            <div class="content-panel">
              <p>
              <span style="background-color: ${
                d1.color
              }" class="tooltip-item-icon">
              </span><span>${d1.seriesName}</span></p>
              <span class="tooltip-value">
              ${d1.value.toLocaleString()}
              </span>
            </div>
            <div class="content-panel">
              <p><span style="background-color: ${
                d2.color
              }" class="tooltip-item-icon"></span><span>${
            d2.seriesName
          }</span></p>
              <span class="tooltip-value">
              ${d2.value.toLocaleString()}
              </span>
            </div>
            <div class="content-panel">
              <p><span style="background-color: ${
                d3.color
              }" class="tooltip-item-icon"></span><span>${
            d3.seriesName
          }</span></p>
              <span class="tooltip-value">
              ${d3.value.toLocaleString()}
              </span>
            </div>
          </div>`;
        },
        className: 'echarts-tooltip-diy',
      },
      graphic: {
        elements: [
          {
            type: 'text',
            left: '2.6%',
            bottom: '18',
            style: {
              text: '12.10',
              textAlign: 'center',
              fill: '#4E5969',
              fontSize: 12,
            },
          },
          {
            type: 'text',
            right: '0',
            bottom: '18',
            style: {
              text: '12.17',
              textAlign: 'center',
              fill: '#4E5969',
              fontSize: 12,
            },
          },
        ],
      },
      series: [
        generateSeries('内容生产量', '#F77234'),
        generateSeries('内容点击量', '#33D1C9'),
        generateSeries('内容曝光量', '#3469FF'),
        generateSeries('活跃用户数', '#722ED1'),
      ],
    });
    const fetchData = async () => {
      setLoading(true);
      try {
        const { data } = await queryDataOverview();
        chartOption.value.xAxis.data = data.xAxis;
        data.data.forEach((el) => {
          if (el.name === '内容生产量') {
            chartOption.value.series[0].data = el.value;
          } else if (el.name === '内容点击量') {
            chartOption.value.series[1].data = el.value;
          } else if (el.name === '内容曝光量') {
            chartOption.value.series[2].data = el.value;
          }
          chartOption.value.series[3].data = el.value;
        });
      } catch (err) {
        // you can report use errorHandler or other
      } finally {
        setLoading(false);
      }
    };
    fetchData();
    return {
      loading,
      renderData,
      chartOption,
    };
  },
});
</script>

<style scoped lang="less">
:deep(.arco-statistic-value) {
  display: flex;
  align-items: center;
}
.statistic-prefix {
  display: inline-block;
  width: 32px;
  height: 32px;
  margin-right: 8px;
  color: var(--color-white);
  font-size: 16px;
  line-height: 32px;
  text-align: center;
  vertical-align: middle;
  border-radius: 6px;
}
</style>
