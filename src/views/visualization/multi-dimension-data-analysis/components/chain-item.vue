<template>
  <a-spin :loading="loading" style="width: 100%">
    <a-card :bordered="false">
      <div class="content">
        <a-statistic
          :title="title"
          :value="renderData.count"
          :show-group-separator="true"
        >
          <template #suffix>
            <a-typography-text type="secondary" class="unit">
              {{ $t('multiDAnalysis.unit') }}
            </a-typography-text>
          </template>
        </a-statistic>
        <div>
          <a-typography-text type="secondary" class="label">
            {{ $t('multiDAnalysis.lastMonth') }}
          </a-typography-text>
          <a-typography-text type="danger">
            {{ renderData.growth }}
            <icon-arrow-rise />
          </a-typography-text>
        </div>
      </div>
      <div class="chart">
        <Chart :option="chartOption" />
      </div>
    </a-card>
  </a-spin>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue';

import useLoading from '@/hooks/loading';
import useChartOption from '@/hooks/chart-option';
import {
  queryDataChainGrowth,
  DataChainGrowth,
  DataChainGrowthRes,
} from '@/api/visualization';

// type ChartType = 'line' | 'bar';

export default defineComponent({
  props: {
    title: {
      type: String,
      default: '',
    },
    quota: {
      type: String,
      default: '',
    },
    chartType: {
      type: String,
      default: '',
    },
  },
  setup(props) {
    const { loading, setLoading } = useLoading(true);
    const renderData = ref<DataChainGrowthRes>({
      count: 0,
      growth: 0,
      chartData: [],
    });
    const { chartOption } = useChartOption({
      grid: {
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
      },
      xAxis: {
        type: 'category',
        // data: [],
        show: false,
      },
      yAxis: {
        show: false,
      },
      tooltip: {
        show: true,
        trigger: 'axis',
      },
      series: [
        {
          name: '2001',
          data: [],
          type: props.chartType,
          showSymbol: false,
          barWidth: 4,
          barGap: '0',
        },
        {
          name: '2002',
          data: [],
          type: props.chartType,
          showSymbol: false,
          barWidth: 4,
          barGap: '0',
        },
      ],
    });
    const fetchData = async (params: DataChainGrowth) => {
      try {
        const { data } = await queryDataChainGrowth(params);
        const { chartData } = data;
        renderData.value = data;
        chartData.forEach((el) => {
          if (el.name === '2021') {
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
    fetchData({ quota: props.quota });
    return {
      loading,
      renderData,
      chartOption,
    };
  },
});
</script>
<style scoped lang="less">
.content {
  width: 130px;
  display: inline-block;
}

.chart {
  height: 80px;
  width: calc(100% - 130px);
  display: inline-block;
  vertical-align: bottom;
}

.unit {
  font-size: 12px;
  padding-left: 8px;
}

.label {
  font-size: 12px;
  padding-right: 8px;
}
</style>
