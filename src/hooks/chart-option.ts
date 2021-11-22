import { ref } from 'vue';
import { EChartOption } from 'echarts';

// 主要是为了配置时候有代码提示。

export default function useChartOption(sourceOption: EChartOption) {
  const chartOption = ref<EChartOption>(sourceOption);
  return {
    chartOption,
  };
}
