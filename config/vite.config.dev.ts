import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';
import svgLoader from 'vite-svg-loader';
import eslint from 'vite-plugin-eslint';

export default defineConfig({
  mode: 'development',
  server: {
    open: true,
    fs: {
      strict: true,
    },
  },
  plugins: [
    vue(),
    vueJsx(),
    svgLoader({ svgoConfig: {} }),
    eslint({
      cache: false,
      include: ['src/**/*.ts', 'src/**/*.tsx', 'src/**/*.vue'],
      exclude: ['node_modules'],
    }),
  ],
});
