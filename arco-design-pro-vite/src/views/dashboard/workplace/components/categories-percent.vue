<template>
  <a-spin :loading="loading" style="width: 100%">
    <a-card
      class="bottom-card"
      :bordered="false"
      :header-style="{ border: 'none' }"
    >
      <template #title>
        {{ $t('workplace.categoriesPercent') }}
      </template>
      <Chart style="width: 100%; height: 310px" :option="chartOption" />
    </a-card>
  </a-spin>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import useLoading from '@/hooks/loading';
import useChartOption from '@/hooks/chart-option';

export default defineComponent({
  setup() {
    const { loading } = useLoading();
    const { chartOption } = useChartOption({
      legend: {
        left: 'center',
        data: ['纯文本', '图文类', '视频类'],
        bottom: 0,
        icon: 'circle',
        itemWidth: 8,
      },
      tooltip: {
        show: true,
        trigger: 'item',
      },
      graphic: {
        elements: [
          {
            type: 'text',
            left: 'center',
            top: '40%',
            style: {
              text: '内容量',
              textAlign: 'center',
              fill: '#4E5969',
              fontSize: 12,
            },
          },
          {
            type: 'text',
            left: 'center',
            top: '50%',
            style: {
              text: '928,531',
              textAlign: 'center',
              fill: '#4E5969',
              fontSize: 16,
              fontWeight: 500,
            },
          },
        ],
      },
      series: [
        {
          type: 'pie',
          radius: ['50%', '70%'],
          center: ['50%', '50%'],
          label: {
            formatter: '{text|{b}:{d}%}\n{value|{c}} ',
            rich: {
              text: {
                fontSize: 12,
                color: '#4E5969',
              },
              value: {
                fontSize: 13,
                color: '#1D2129',
                lineHeight: 24,
                fontWeight: 'bold',
              },
            },
          },
          itemStyle: {
            borderColor: '#fff',
            borderWidth: 1,
          },
          data: [
            {
              value: [148564],
              name: '纯文本',
              itemStyle: {
                color: '#249EFF',
              },
            },
            {
              value: [334271],
              name: '图文类',
              itemStyle: {
                color: '#313CA9',
              },
            },
            {
              value: [445694],
              name: '视频类',
              itemStyle: {
                color: '#21CCFF',
              },
            },
          ],
        },
      ],
    });
    return {
      loading,
      chartOption,
    };
  },
});
</script>

<style scoped lang="less"></style>
