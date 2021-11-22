<template>
  <a-spin :loading="loading" style="width: 100%">
    <a-card :bordered="false">
      <a-typography-title class="section-titile" :heading="6">
        {{ $t('multiDAnalysis.card.title.downloadHistory') }}
      </a-typography-title>
      <a-form :model="formData">
        <a-row justify="space-between" style="width: 100%">
          <a-col :span="12">
            <a-form-item no-style field="time">
              <a-range-picker v-model="formData.time" />
            </a-form-item>
          </a-col>
          <a-col :span="12" style="text-align: right">
            <a-form-item
              no-style
              field="showCompetitor"
              trigger-prop-name="checked"
            >
              <a-checkbox v-model="formData.showCompetitor">{{
                $t('multiDAnalysis.showCompetitor')
              }}</a-checkbox>
            </a-form-item>
          </a-col>
        </a-row>
      </a-form>
      <div class="chart">
        <Chart :option="chartOption" />
      </div>
    </a-card>
  </a-spin>
</template>
<script lang="ts">
import { defineComponent, reactive, watch } from 'vue';
import dayjs from 'dayjs';

import useLoading from '@/hooks/loading';
import useChartOption from '@/hooks/chart-option';
import { queryDownloadHistory, IDownloadHistory } from '@/api/visualization';

const DATE_FORMAT = 'YYYY-MM-DD';

export default defineComponent({
  setup() {
    const { loading, setLoading } = useLoading();
    const { chartOption } = useChartOption({
      grid: {
        left: 40,
        right: 0,
        top: 20,
        bottom: 20,
      },
      xAxis: {
        type: 'category',
        data: [],
        show: true,
      },
      yAxis: {
        show: true,
        splitNumber: 4,
        axisLabel: {
          formatter(value) {
            return `${value / 1000}K`;
          },
        },
      },
      tooltip: {
        show: true,
        trigger: 'axis',
      },
      series: [
        {
          name: '开发者',
          data: [],
          type: 'line',
          symbol: 'circle',
        },
        {
          name: '设计师',
          data: [],
          type: 'line',
          symbol: 'circle',
        },
        {
          name: '竞品-开发者',
          data: [],
          type: 'line',
          symbol: 'circle',
        },
        {
          name: '竞品-设计师',
          data: [],
          type: 'line',
          symbol: 'circle',
        },
      ],
    });
    const formData = reactive({
      time: [
        dayjs().subtract(1, 'day').format(DATE_FORMAT),
        dayjs().format(DATE_FORMAT),
      ],
      showCompetitor: false,
    });
    const fetchData = (formData: IDownloadHistory) => {
      setLoading(true);
      queryDownloadHistory(formData)
        .then((res) => {
          chartOption.value.xAxis.data = [];
          chartOption.value.series.forEach((el) => {
            el.data = [];
          });
          res.data.forEach((el) => {
            if (el.name === '开发者') {
              chartOption.value.xAxis.data.push(el.x);
              chartOption.value.series[0].data.push(el.y);
            } else if (el.name === '设计师') {
              chartOption.value.series[1].data.push(el.y);
            } else if (el.name === '竞品-设计师') {
              chartOption.value.series[2].data.push(el.y);
            } else if (el.name === '竞品-开发者') {
              chartOption.value.series[3].data.push(el.y);
            }
          });
          setLoading(false);
        })
        .finally(() => {
          setLoading(false);
        });
    };
    watch(
      formData,
      () => {
        fetchData(formData);
      },
      { deep: true, immediate: true }
    );
    // fetchData();
    return {
      loading,
      chartOption,
      formData,
    };
  },
});
</script>
<style scoped lang="less">
.chart {
  height: 248px;
}
</style>
