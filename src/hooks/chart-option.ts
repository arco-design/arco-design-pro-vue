import { ref } from 'vue';
import { EChartOption } from 'echarts';

// for code hints

export default function useChartOption(sourceOption: EChartOption) {
  const chartOption = ref<EChartOption>(sourceOption);
  return {
    chartOption,
  };
}
