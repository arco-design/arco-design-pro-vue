<template>
  <a-spin :loading="loading" style="width: 100%">
    <a-card :bordered="false" :header-style="{ border: 'none' }">
      <template #title>
        {{ $t('dataAnalysis.contentPeriodAnalysis') }}
      </template>
      <Chart style="width: 100%; height: 370px" :option="chartOption" />
    </a-card>
  </a-spin>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
// import { EChartsOption } from 'echarts';
import useLoading from '@/hooks/loading';
import { queryContentPeriodAnalysis } from '@/api/visualization';

export default defineComponent({
  setup() {
    const { loading, setLoading } = useLoading(true);
    const chartOption = ref({
      grid: {
        left: '40',
        right: 0,
        top: '20',
        bottom: '100',
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
        boundaryGap: false,
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
          interval(idx: number) {
            if (idx === 0) return false;
            if (idx === chartOption.value.xAxis.data.length - 1) return false;
            return true;
          },
        },
        axisLabel: {
          color: '#86909C',
          formatter(value: number, idx: number) {
            if (idx === 0) return '';
            if (idx === chartOption.value.xAxis.data.length - 1) return '';
            return `${value}`;
          },
        },
      },
      yAxis: {
        type: 'value',
        axisLabel: {
          color: '#86909C',
          formatter: '{value}%',
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
                <span style="background-color: ${d.color}" class="tooltip-item-icon"></span><span>${d.seriesName}</span>
              </p>
              <span class="tooltip-value">${d.value}%</span>
            </div>
            <div class="content-panel">
              <p>
                <span style="background-color: ${d1.color}" class="tooltip-item-icon"></span><span>${d1.seriesName}</span>
              </p>
              <span class="tooltip-value">
              ${d1.value}%
              </span>
            </div>
            <div class="content-panel">
              <p>
                <span style="background-color: ${d2.color}" class="tooltip-item-icon"></span><span>${d2.seriesName}</span>
              </p>
              <span class="tooltip-value">
              ${d2.value}%
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
          type: 'line',
          smooth: true,
          showSymbol: false,
          color: '#246EFF',
        },
        {
          name: '图文类',
          data: [] as number[],
          type: 'line',
          smooth: true,
          showSymbol: false,
          color: '#00B2FF',
        },
        {
          name: '视频类',
          data: [] as number[],
          type: 'line',
          smooth: true,
          showSymbol: false,
          color: '#81E2FF',
        },
      ],
      dataZoom: [
        {
          bottom: 40,
          type: 'slider',
          left: 40,
          right: 14,
          height: 14,
          borderColor: 'transparent',
          handleIcon:
            'image://http://p3-armor.byteimg.com/tos-cn-i-49unhts6dw/1ee5a8c6142b2bcf47d2a9f084096447.svg~tplv-49unhts6dw-image.image',
          handleSize: '20',
          handleStyle: {
            shadowColor: 'rgba(0, 0, 0, 0.2)',
            shadowBlur: 4,
          },
          brushSelect: false,
          backgroundColor: '#F2F3F5',
        },
        {
          type: 'inside',
          start: 0,
          end: 100,
          zoomOnMouseWheel: false,
        },
      ],
    });
    const fetchData = async () => {
      setLoading(true);
      try {
        const { data: chartData } = await queryContentPeriodAnalysis();
        chartOption.value.xAxis.data = chartData.xAxis;
        chartData.data.forEach((el) => {
          if (el.name === '纯文本') {
            chartOption.value.series[0].data = el.value;
          } else if (el.name === '图文类') {
            chartOption.value.series[1].data = el.value;
          } else {
            chartOption.value.series[2].data = el.value;
          }
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

<style scoped lang="less">
.chart-box {
  width: 100%;
  height: 230px;
}
</style>
