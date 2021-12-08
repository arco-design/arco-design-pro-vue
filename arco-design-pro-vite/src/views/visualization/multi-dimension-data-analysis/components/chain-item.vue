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
import {
  queryDataChainGrowth,
  DataChainGrowth,
  DataChainGrowthRes,
} from '@/api/visualization';

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
    const chartOption = ref({
      grid: {
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
      },
      xAxis: {
        type: 'category',
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
          data: [] as number[],
          type: props.chartType,
          showSymbol: false,
          barWidth: 4,
          barGap: '0',
        },
        {
          name: '2002',
          data: [] as number[],
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
  display: inline-block;
  width: 130px;
}

.chart {
  display: inline-block;
  width: calc(100% - 130px);
  height: 80px;
  vertical-align: bottom;
}

.unit {
  padding-left: 8px;
  font-size: 12px;
}

.label {
  padding-right: 8px;
  font-size: 12px;
}
</style>
