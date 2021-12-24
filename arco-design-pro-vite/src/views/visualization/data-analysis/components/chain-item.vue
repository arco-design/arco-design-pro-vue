<template>
  <a-spin :loading="loading" style="width: 100%">
    <a-card :bordered="false" :style="cardStyle">
      <div class="content-wrap">
        <div class="content">
          <a-statistic
            v-if="!loading"
            :title="title"
            :value="renderData.count"
            :show-group-separator="true"
          />
          <div class="desc">
            <a-typography-text type="secondary" class="label">
              {{ $t('dataAnalysis.card.yesterday') }}
            </a-typography-text>
            <a-typography-text type="danger">
              {{ renderData.growth }}
              <icon-arrow-rise />
            </a-typography-text>
          </div>
        </div>
        <div class="chart">
          <Chart v-if="!loading" :option="chartOption" />
        </div>
      </div>
    </a-card>
  </a-spin>
</template>

<script lang="ts">
import { defineComponent, ref, PropType, CSSProperties } from 'vue';
import useLoading from '@/hooks/loading';
import {
  queryPublicOpinionAnalysis,
  PublicOpinionAnalysis,
  PublicOpinionAnalysisRes,
} from '@/api/visualization';

const barChartOptions = () => ({
  grid: {
    left: 0,
    right: 0,
    top: 10,
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
  series: {
    name: 'total',
    data: [],
    type: 'bar',
    barWidth: 7,
    itemStyle: {
      borderRadius: 2,
    },
  },
});

const lineChartOptions = () => ({
  grid: {
    left: 0,
    right: 0,
    top: 10,
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
      type: 'line',
      showSymbol: false,
      smooth: true,
      lineStyle: {
        color: '#165DFF',
        width: 3,
      },
    },
    {
      name: '2002',
      data: [] as number[],
      type: 'line',
      showSymbol: false,
      smooth: true,
      lineStyle: {
        color: '#6AA1FF',
        width: 3,
        type: 'dashed',
      },
    },
  ],
});

const pieChartOptions = () => ({
  grid: {
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
  },
  legend: {
    show: true,
    top: 'center',
    right: '0',
    orient: 'vertical',
    icon: 'circle',
    itemWidth: 6,
    itemHeight: 6,
    textStyle: {
      color: '#4E5969',
    },
  },
  tooltip: {
    show: true,
    trigger: 'axis',
  },
  series: [
    {
      name: '总计',
      type: 'pie',
      radius: ['50%', '70%'],
      label: {
        show: false,
      },
      data: [],
    },
  ],
});

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
    cardStyle: {
      type: Object as PropType<CSSProperties>,
      default: () => {
        return {};
      },
    },
  },
  setup(props) {
    const { loading, setLoading } = useLoading(true);
    let opts = null;
    if (props.chartType === 'line') {
      opts = lineChartOptions();
    } else if (props.chartType === 'bar') {
      opts = barChartOptions();
    } else {
      opts = pieChartOptions();
    }
    const renderData = ref<PublicOpinionAnalysisRes>({
      count: 0,
      growth: 0,
      chartData: [],
    });
    const chartOption = ref(opts);
    const fetchData = async (params: PublicOpinionAnalysis) => {
      try {
        const { data } = await queryPublicOpinionAnalysis(params);
        renderData.value = data;
        const { chartData } = data;
        if (props.chartType === 'bar') {
          chartData.forEach((el, idx) => {
            chartOption.value.series.data.push({
              value: el.y,
              itemStyle: {
                color: idx % 2 ? '#2CAB40' : '#86DF6C',
              },
            });
          });
        } else if (props.chartType === 'line') {
          chartData.forEach((el) => {
            if (el.name === '2021') {
              chartOption.value.series[0].data.push(el.y);
            } else {
              chartOption.value.series[1].data.push(el.y);
            }
          });
        } else {
          chartData.forEach((el) => {
            chartOption.value.series[0].data.push(el);
          });
        }
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
:deep(.arco-card-body) {
  height: 134px;
}
.content-wrap {
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: flex-end;
  white-space: nowrap;
}
:deep(.content) {
  display: inline-block;
  height: 102px;
}
:deep(.arco-statistic) {
  .arco-statistic-title {
    font-size: 16px;
    font-weight: bold;
    white-space: nowrap;
  }
  .arco-statistic-content {
    margin-top: 10px;
  }
}

.chart {
  display: inline-block;
  // width: calc(100% - 150px);
  flex: 1;
  height: 90px;
  vertical-align: bottom;
}

.label {
  padding-right: 8px;
  font-size: 12px;
}
</style>
