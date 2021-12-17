<template>
  <a-col :span="24" class="panel">
    <a-card
      :bordered="false"
      :header-style="{ padding: 0, border: 'none' }"
      :body-style="{
        padding: 0,
      }"
    >
      <template #title>
        {{ $t('workplace.contentData') }}
      </template>
      <template #extra>
        <a-link>{{ $t('workplace.viewMore') }}</a-link>
      </template>
      <Chart style="width: 100%; height: 290px" :option="chartOption" />
    </a-card>
  </a-col>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { graphic, EChartsOption } from 'echarts';
import useLoading from '@/hooks/loading';
import { queryContentData, ContentDataRecord } from '@/api/dashboard';

export default defineComponent({
  setup() {
    const { loading, setLoading } = useLoading(true);
    const chartOption = ref({
      grid: {
        left: '2.6%',
        right: '0',
        top: '10',
        bottom: '30',
      },
      xAxis: {
        type: 'category',
        offset: 2,
        data: [] as string[],
        boundaryGap: false,
        axisLabel: {
          color: '#4E5969',
          formatter(value: number, idx: number) {
            if (idx === 0) return '';
            if (idx === chartOption.value.xAxis.data.length - 1) return '';
            return `${value}`;
          },
        },
        axisLine: {
          show: false,
        },
        axisTick: {
          show: false,
        },
        splitLine: {
          show: true,
          interval: (idx: number) => {
            if (idx === 0) return false;
            if (idx === chartOption.value.xAxis.data.length - 1) return false;
            return true;
          },
        },
        axisPointer: {
          show: true,
          lineStyle: {
            color: '#23ADFF',
            width: 2,
          },
        },
      },
      yAxis: {
        type: 'value',
        axisLine: {
          show: false,
        },
        axisLabel: {
          formatter(value: number, idx: number) {
            if (idx === 0) return value;
            return `${value}k`;
          },
        },
        splitLine: {
          show: true,
          lineStyle: {
            type: 'dashed',
          },
        },
      },
      tooltip: {
        trigger: 'axis',
        // showDelay: 2,
        // showContent: false,
        formatter([params]: unknown) {
          return `<div>
            <p class="tooltip-title">${params.axisValueLabel}</p>
            <div class="content-panel"><span>总内容量</span><span class="tooltip-value">${Number(
              params.value * 10000
            ).toLocaleString()}</span></div>
          </div>`;
        },
        className: 'echarts-tooltip-diy',
      },
      graphic: {
        elements: [
          {
            type: 'text',
            left: '2.6%',
            bottom: '8',
            style: {
              text: '2000-01-01',
              textAlign: 'center',
              fill: '#4E5969',
              fontSize: 12,
            },
          },
          {
            type: 'text',
            right: '0',
            bottom: '8',
            style: {
              text: '2000-01-07',
              textAlign: 'center',
              fill: '#4E5969',
              fontSize: 12,
            },
          },
        ],
      },
      series: [
        {
          data: [] as number[],
          type: 'line',
          smooth: true,
          emphasis: {
            focus: 'series',
          },
          // itemStyle: {
          //   color: '#f00',
          // },
          lineStyle: {
            width: 3,
            color: new graphic.LinearGradient(0, 0, 1, 0, [
              {
                offset: 0,
                color: 'rgba(30, 231, 255, 1)',
              },
              {
                offset: 0.5,
                color: 'rgba(36, 154, 255, 1)',
              },
              {
                offset: 1,
                color: 'rgba(111, 66, 251, 1)',
              },
            ]),
          },
          showSymbol: false,
          areaStyle: {
            opacity: 0.8,
            color: new graphic.LinearGradient(0, 0, 0, 1, [
              {
                offset: 0,
                color: 'rgba(17, 126, 255, 0.16)',
              },
              {
                offset: 1,
                color: 'rgba(17, 128, 255, 0)',
              },
            ]),
          },
        },
      ],
    });
    const fetchData = async () => {
      setLoading(true);
      try {
        const { data: chartData } = await queryContentData();
        chartData.forEach((el: ContentDataRecord, idx: number) => {
          chartOption.value.xAxis.data.push(el.x);
          chartOption.value.series[0].data.push(el.y);
          if (idx === 0) {
            chartOption.value.graphic.elements[0].style.text = el.x;
          }
          if (idx === chartData.length - 1) {
            chartOption.value.graphic.elements[1].style.text = el.x;
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
.panel {
  width: 100%;
  padding: 0 16px;
  margin-bottom: 0;
}
</style>

<style lang="less">
.echarts-tooltip-diy {
  background: linear-gradient(
    304.17deg,
    rgba(253, 254, 255, 0.6) -6.04%,
    rgba(244, 247, 252, 0.6) 85.2%
  ) !important;
  border: none !important;
  backdrop-filter: blur(10px) !important;
  /* Note: backdrop-filter has minimal browser support */

  border-radius: 6px !important;
  .content-panel {
    display: flex;
    justify-content: space-between;
    padding: 0 9px;
    background: rgba(255, 255, 255, 0.8);
    /* 投影 1 （数据卡片） */
    width: 164px;
    height: 32px;
    line-height: 32px;
    box-shadow: 6px 0px 20px rgba(34, 87, 188, 0.1);
    border-radius: 4px;
  }
  .tooltip-title {
    margin: 0 0 10px 0;
  }
  .tooltip-title,
  .tooltip-value {
    font-size: 13px;
    line-height: 15px;
    display: flex;
    align-items: center;
    text-align: right;
    color: #1d2129;
    font-weight: bold;
  }
}
</style>
