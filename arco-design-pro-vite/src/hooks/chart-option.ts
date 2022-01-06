import { computed, ComputedRef } from 'vue';
import { EChartsOption } from 'echarts';
import { useStore } from '@/store';

// for code hints

interface optionsFn {
  (isDark: ComputedRef<boolean>): EChartsOption;
}

export default function useChartOption(
  sourceOption: EChartsOption | optionsFn
) {
  const store = useStore();

  const chartOption = computed<EChartsOption>(() => {
    if (typeof sourceOption === 'function') {
      // echarts support https://echarts.apache.org/zh/theme-builder.html
      // It's not used here
      // TODO echarts themes
      const isDark = computed(() => {
        return store.state.app.theme === 'dark';
      });
      return sourceOption(isDark);
    }
    return sourceOption;
  });
  return {
    chartOption,
  };
}
