<template>
  <VCharts v-if="renderChart" :option="options" :theme="theme" />
</template>

<script lang="ts">
import { defineComponent, ref, computed, nextTick } from 'vue';
import VCharts from 'vue-echarts';
import { useStore } from '@/store';

export default defineComponent({
  components: {
    VCharts,
  },
  props: {
    options: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  setup() {
    const store = useStore();
    const theme = computed(() => {
      if (store.state.app.theme === 'dark') return 'dark';
      return '';
    });
    const renderChart = ref(false);
    // wait container expand
    nextTick(() => {
      renderChart.value = true;
    });
    return {
      theme,
      renderChart,
    };
  },
});
</script>

<style scoped lang="less">
.chart-box {
  width: 100%;
}
</style>
