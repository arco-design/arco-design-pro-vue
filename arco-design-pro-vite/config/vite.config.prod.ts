import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';
import svgLoader from 'vite-svg-loader';

export default defineConfig({
  mode: 'production',
  plugins: [vue(), vueJsx(), svgLoader({ svgoConfig: {} })],
});
