<template>
  <a-spin :loading="loading" style="width: 100%">
    <a-card
      class="general-card"
      :title="$t('multiDAnalysis.card.title.contentPublishingSource')"
    >
      <Chart style="width: 100%; height: 300px" :option="chartOption" />
    </a-card>
  </a-spin>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue';
import useLoading from '@/hooks/loading';
import useThemes from '@/hooks/themes';

export default defineComponent({
  setup() {
    const { isDark } = useThemes();

    const graphicElementStyle = computed(() => {
      return {
        textAlign: 'center',
        fill: isDark.value ? 'rgba(255,255,255,0.7)' : '#4E5969',
        fontSize: 14,
        lineWidth: 10,
        fontWeight: 'bold',
      };
    });
    const chartOption = computed(() => {
      return {
        legend: {
          left: 'center',
          data: ['UGC原创', '国外网站', '转载文章', '行业报告', '其他'],
          bottom: 0,
          icon: 'circle',
          itemWidth: 8,
          textStyle: {
            color: isDark.value ? 'rgba(255,255,255,0.7)' : '#4E5969',
          },
          itemStyle: {
            borderWidth: 0,
          },
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
                ...graphicElementStyle.value,
              },
            },
            {
              type: 'text',
              left: 'center',
              top: 'center',
              style: {
                text: '图文类',
                ...graphicElementStyle.value,
              },
            },
            {
              type: 'text',
              left: '86.6%',
              top: 'center',
              style: {
                text: '视频类',
                ...graphicElementStyle.value,
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
              color: isDark.value ? 'rgba(255, 255, 255, 0.7)' : '#4E5969',
            },
            itemStyle: {
              borderColor: isDark.value ? '#000' : '#fff',
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
              color: isDark.value ? 'rgba(255, 255, 255, 0.7)' : '#4E5969',
            },
            itemStyle: {
              borderColor: isDark.value ? '#000' : '#fff',
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
              color: isDark.value ? 'rgba(255, 255, 255, 0.7)' : '#4E5969',
            },
            itemStyle: {
              borderColor: isDark.value ? '#000' : '#fff',
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
      };
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
