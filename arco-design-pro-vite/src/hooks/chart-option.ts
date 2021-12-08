import { ref } from 'vue';
import { EChartsOption } from 'echarts';

// for code hints

export default function useChartOption(sourceOption: EChartsOption) {
  const chartOption = ref<EChartsOption>(sourceOption);
  return {
    chartOption,
  };
}
