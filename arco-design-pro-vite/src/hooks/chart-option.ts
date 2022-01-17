import { computed, ComputedRef } from 'vue';
import { EChartsOption } from 'echarts';
import { useStore } from '@/store';

// for code hints
// import { SeriesOption } from 'echarts';
// Because there are so many configuration items, this provides a relatively convenient code hint.
// When using vue, pay attention to the reactive issues. It is necessary to ensure that corresponding functions can be triggered, Typescript does not report errors, and code writing is convenient.
interface optionsFn {
  (isDark: ComputedRef<boolean>): EChartsOption;
}

export default function useChartOption(sourceOption: optionsFn) {
  const store = useStore();
  const isDark = computed(() => {
    return store.state.app.theme === 'dark';
  });
  const chartOption = computed<EChartsOption>(() => {
    return sourceOption(isDark);
  });
  return {
    chartOption,
  };
}
