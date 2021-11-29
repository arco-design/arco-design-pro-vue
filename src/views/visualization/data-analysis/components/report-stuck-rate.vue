<template>
  <a-spin :loading="loading" style="width: 100%; height: 230px">
    <Chart style="width: 100%; height: 230px" :option="chartOption" />
  </a-spin>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue';
import useLoading from '@/hooks/loading';
import useChartOption from '@/hooks/chart-option';

import {
  queryReportStuckRate,
  ReportStuckRateRecord,
} from '@/api/visualization';

export default defineComponent({
  setup() {
    const { loading, setLoading } = useLoading(true);
    const chartRef = ref(null);
    const { chartOption } = useChartOption({
      grid: {
        left: '3%',
        right: 0,
        top: '20',
        bottom: '20',
      },
      xAxis: {
        type: 'category',
        data: [],
      },
      yAxis: {
        type: 'value',
        axisLabel: {
          formatter: '{value}%',
        },
      },
      tooltip: {
        show: true,
        trigger: 'axis',
      },
      series: [
        {
          data: [],
          type: 'line',
        },
        {
          data: [],
          type: 'line',
        },
      ],
    });
    const fetchData = async () => {
      setLoading(true);
      try {
        const { data: chartData } = await queryReportStuckRate();
        chartData.forEach((el: ReportStuckRateRecord) => {
          if (el.name === 'A类型') {
            chartOption.value.xAxis.data.push(el.x);
            chartOption.value.series[0].data.push(el.y);
          } else {
            chartOption.value.series[1].data.push(el.y);
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
      chartRef,
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
