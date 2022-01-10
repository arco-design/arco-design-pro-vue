<template>
  <a-spin :loading="loading" style="width: 100%">
    <a-card
      class="general-card"
      :title="title"
      :header-style="{ paddingBottom: '12px' }"
    >
      <div class="content">
        <a-statistic
          v-if="!loading"
          :value="count"
          :show-group-separator="true"
        />
        <a-typography-text class="percent-text" type="danger">
          {{ growth }}%
          <icon-arrow-rise />
        </a-typography-text>
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
import { queryDataChainGrowth, DataChainGrowth } from '@/api/visualization';

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
    const count = ref(0);
    const growth = ref(0);
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
        formatter: '{c}',
      },
      series: [
        {
          data: [] as unknown[],
          type: props.chartType,
          showSymbol: false,
          smooth: true,
          barWidth: 7,
          barGap: '0',
          lineStyle: {
            color: '#4080FF',
          },
        },
      ],
    });
    const fetchData = async (params: DataChainGrowth) => {
      try {
        const { data } = await queryDataChainGrowth(params);
        const { chartData } = data;
        count.value = data.count;
        growth.value = data.growth;
        chartData.data.value.forEach((el, idx) => {
          if (props.chartType === 'bar') {
            chartOption.value.series[0].data.push({
              value: el,
              itemStyle: {
                color: idx % 2 ? '#468DFF' : '#86DF6C',
              },
            });
          } else {
            chartOption.value.series[0].data.push(el);
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
      count,
      growth,
      chartOption,
    };
  },
});
</script>

<style scoped lang="less">
.content {
  display: flex;
  align-items: center;
  width: 100%;
  margin-bottom: 12px;
}
.percent-text {
  margin-left: 16px;
}
.chart {
  width: 100%;
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
