<template>
  <a-spin :loading="loading" style="width: 100%">
    <a-card
      class="bottom-card"
      :bordered="false"
      :header-style="{ border: 'none' }"
    >
      <template #title>
        {{ $t('dataAnalysis.contentPublishRatio') }}
      </template>
      <template #extra>
        <a-link>{{ $t('workplace.viewMore') }}</a-link>
      </template>
      <Chart style="width: 100%; height: 347px" :option="chartOption" />
    </a-card>
  </a-spin>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
// import { EChartsOption } from 'echarts';
import useLoading from '@/hooks/loading';
import { queryContentPublish, ContentPublishRecord } from '@/api/visualization';

export default defineComponent({
  setup() {
    const { loading, setLoading } = useLoading(true);
    const chartOption = ref({
      grid: {
        left: '4%',
        right: 0,
        top: '20',
        bottom: '60',
      },
      legend: {
        bottom: 0,
        icon: 'circle',
        textStyle: {
          color: '#4E5969',
        },
      },
      xAxis: {
        type: 'category',
        data: [] as string[],
        axisLine: {
          lineStyle: {
            color: '#A9AEB8',
          },
        },
        axisTick: {
          show: true,
          alignWithLabel: true,
          lineStyle: {
            color: '#86909C',
          },
        },
        axisLabel: {
          color: '#86909C',
        },
      },
      yAxis: {
        type: 'value',
        axisLabel: {
          color: '#86909C',
          formatter(value: number, idx: number) {
            if (idx === 0) return `${value}`;
            return `${value / 1000}k`;
          },
        },
      },
      tooltip: {
        show: true,
        trigger: 'axis',
        formatter(arr: unknown) {
          const [d, d1, d2] = arr;
          return `<div>
            <p class="tooltip-title">${d.axisValueLabel}</p>
            <div class="content-panel">
              <p>
                <span style="background-color: ${
                  d.color
                }" class="tooltip-item-icon"></span>
                <span>
                ${d.seriesName}
                </span>
              </p>
              <span class="tooltip-value">
                ${Number(d.value).toLocaleString()}
              </span>
            </div>
            <div class="content-panel">
              <p>
                <span style="background-color: ${
                  d1.color
                }" class="tooltip-item-icon"></span>
                <span>
                ${d1.seriesName}
                </span>
              </p>
              <span class="tooltip-value">
              ${Number(d1.value).toLocaleString()}
              </span>
            </div>
            <div class="content-panel">
              <p>
                <span style="background-color: ${
                  d2.color
                }" class="tooltip-item-icon"></span>
                <span>
                ${d2.seriesName}
                </span>
              </p>
              <span class="tooltip-value">
              ${Number(d2.value).toLocaleString()}
              </span>
            </div>
          </div>`;
        },
        className: 'echarts-tooltip-diy',
      },
      series: [
        {
          name: '纯文本',
          data: [] as number[],
          stack: 'one',
          type: 'bar',
          barWidth: 16,
          color: '#246EFF',
        },
        {
          name: '图文类',
          data: [] as number[],
          stack: 'one',
          type: 'bar',
          color: '#00B2FF',
        },
        {
          name: '视频类',
          data: [] as number[],
          stack: 'one',
          type: 'bar',
          color: '#81E2FF',
        },
      ],
    });
    const fetchData = async () => {
      setLoading(true);
      try {
        const { data: chartData } = await queryContentPublish();
        chartOption.value.xAxis.data = chartData[0].x;
        chartData.forEach((el: ContentPublishRecord) => {
          if (el.name === '纯文本') {
            chartOption.value.series[0].data = el.y;
          } else if (el.name === '图文类') {
            chartOption.value.series[1].data = el.y;
          }
          chartOption.value.series[2].data = el.y;
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
      chartOption,
    };
  },
});
</script>

<style scoped lang="less"></style>
