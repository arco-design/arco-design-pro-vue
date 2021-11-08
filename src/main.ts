import { createApp } from 'vue';

import ArcoVue from '@arco-design/web-vue';
import router from './router';

import store from './store';
import i18n from './locale';

import App from './App.vue';

import '@arco-design/web-vue/dist/arco.css';

const app = createApp(App);

app.use(ArcoVue, {
  componentPrefix: 'arco',
});

app.use(router);
app.use(store);
app.use(i18n);

app.mount('#app');
