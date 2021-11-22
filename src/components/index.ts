/* eslint-disable import/extensions */
import { App } from 'vue';
import * as echarts from 'echarts';
import { use } from 'echarts/core';
import { CanvasRenderer } from 'echarts/renderers';
import { BarChart, LineChart, PieChart } from 'echarts/charts';
import { GridComponent, TooltipComponent } from 'echarts/components';
import walden from '@/config/echarts-theme/walden.json';
import Chart from './chart/index.vue';

// echarts.regs
// 手动引入 ECharts 各模块来减小打包体积
echarts.registerTheme('walden', walden);

use([
  CanvasRenderer,
  BarChart,
  LineChart,
  PieChart,
  GridComponent,
  TooltipComponent,
]);

export default {
  install(Vue: App) {
    Vue.component('Chart', Chart);
  },
};
