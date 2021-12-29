<template>
  <a-spin :loading="loading" style="width: 100%">
    <a-card :bordered="false" :header-style="{ border: 'none' }">
      <template #title>
        {{ $t('multiDAnalysis.card.title.contentTypeDistribution') }}
      </template>
      <Chart style="width: 100%; height: 300px" :option="chartOption" />
    </a-card>
  </a-spin>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import useLoading from '@/hooks/loading';

export default defineComponent({
  setup() {
    const chartOption = ref({
      legend: {
        left: 'center',
        data: ['UGC原创', '国外网站', '转载文章', '行业报告', '其他'],
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
            left: '9.6%',
            top: 'center',
            style: {
              text: '纯文本',
              textAlign: 'center',
              fill: '#4E5969',
              fontSize: 14,
              lineWidth: 10,
            },
          },
          {
            type: 'text',
            left: 'center',
            top: 'center',
            style: {
              text: '图文类',
              textAlign: 'center',
              fill: '#4E5969',
              fontSize: 14,
              lineWidth: 10,
            },
          },
          {
            type: 'text',
            left: '86.6%',
            top: 'center',
            style: {
              text: '视频类',
              textAlign: 'center',
              fill: '#4E5969',
              fontSize: 14,
              lineWidth: 10,
            },
          },
        ],
      },
      series: [
        {
          type: 'pie',
          radius: ['50%', '70%'],
          center: ['11%', '50%'],
          label: {
            formatter: '{d}% ',
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
              name: 'UGC原创',
              itemStyle: {
                color: '#249EFF',
              },
            },
            {
              value: [334271],
              name: '国外网站',
              itemStyle: {
                color: '#846BCE',
              },
            },
            {
              value: [445694],
              name: '转载文章',
              itemStyle: {
                color: '#21CCFF',
              },
            },
            {
              value: [445694],
              name: '行业报告',
              itemStyle: {
                color: '#0E42D2',
              },
            },
            {
              value: [445694],
              name: '其他',
              itemStyle: {
                color: '#86DF6C',
              },
            },
          ],
        },
        {
          type: 'pie',
          radius: ['50%', '70%'],
          center: ['50%', '50%'],
          label: {
            formatter: '{d}% ',
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
              name: 'UGC原创',
              itemStyle: {
                color: '#249EFF',
              },
            },
            {
              value: [334271],
              name: '国外网站',
              itemStyle: {
                color: '#846BCE',
              },
            },
            {
              value: [445694],
              name: '转载文章',
              itemStyle: {
                color: '#21CCFF',
              },
            },
            {
              value: [445694],
              name: '行业报告',
              itemStyle: {
                color: '#0E42D2',
              },
            },
            {
              value: [445694],
              name: '其他',
              itemStyle: {
                color: '#86DF6C',
              },
            },
          ],
        },
        {
          type: 'pie',
          radius: ['50%', '70%'],
          center: ['88%', '50%'],
          label: {
            formatter: '{d}% ',
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
              name: 'UGC原创',
              itemStyle: {
                color: '#249EFF',
              },
            },
            {
              value: [334271],
              name: '国外网站',
              itemStyle: {
                color: '#846BCE',
              },
            },
            {
              value: [445694],
              name: '转载文章',
              itemStyle: {
                color: '#21CCFF',
              },
            },
            {
              value: [445694],
              name: '行业报告',
              itemStyle: {
                color: '#0E42D2',
              },
            },
            {
              value: [445694],
              name: '其他',
              itemStyle: {
                color: '#86DF6C',
              },
            },
          ],
        },
      ],
    });
    const { loading } = useLoading(false);
    return {
      chartOption,
      loading,
    };
  },
});
</script>

<style scoped lang="less"></style>
