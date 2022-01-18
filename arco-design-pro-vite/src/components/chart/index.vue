<template>
  <VCharts
    v-if="renderChart"
    :option="options"
    :autoresize="autoresize"
    :style="{ width, height }"
  />
</template>

<script lang="ts">
import { defineComponent, ref, computed, nextTick } from 'vue';
import VCharts from 'vue-echarts';
import { useAppStore } from '@/store';

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
    autoresize: {
      type: Boolean,
      default: true,
    },
    width: {
      type: String,
      default: '100%',
    },
    height: {
      type: String,
      default: '100%',
    },
  },
  setup() {
    const appStore = useAppStore();
    const theme = computed(() => {
      if (appStore.theme === 'dark') return 'dark';
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

<style scoped lang="less"></style>
