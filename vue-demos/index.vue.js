import * as Vue from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import Demos from './routes';
import './style/index.css';

const Page = () => import('./page');
// const Icons = () => import('./icons');

window.Vue = Vue;

const router = createRouter({
  history: createWebHistory(),
  routes: [
    // {
    //   path: '/themes/demo-vue/icons',
    //   component: Icons,
    // },
    {
      path: '/themes/demo-vue/components',
      component: Page,
    },
  ],
});

const onError = (e) => {
  console.error(e);
  document.body.innerHTML = '页面资源未加载到，预览失败';
};

const appendScript = (src, resolve, reject) => {
  const script = document.createElement('script');

  script.src = src;
  script.async = true;
  script.onload = () => {
    resolve();
  };
  script.onerror = (e) => {
    reject(e);
  };
  document.body.appendChild(script);
};

Promise.all(
  ['ArcoIconPath', 'CustomIconPath'].map((key) => {
    return new Promise((resolve, reject) => {
      if (!window[key]) {
        resolve();
        return;
      }
      appendScript(window[key], resolve, reject);
    });
  })
)
  .then(() => {
    window.defaultArcoIcon = window.arcoicon;
    if (!window['custom_icon']) {
      window['custom_icon'] = window['IconBox']; // 兼容以前的路径
    }
    window.arcoicon = {
      ...window.arcoicon,
      ...window['custom_icon'],
    };

    appendScript(
      window.ArcoPath,
      () => {
        const app = Vue.createApp({
          setup() {
            return () => (
              <div>
                <router-view />
                <span
                  className="align-loading"
                  id="loadingNode"
                  style={{ display: 'none' }}
                >
                  <Spin tip="编译中..." />
                </span>
              </div>
            );
          },
        });

        app.use(router);
        app.use(window.arco, {
          componentPrefix: '',
        });
        app.use(window.arcoicon);

        Demos.forEach((item) => {
          app.component(
            'Demo' + item.name,
            window.Vue.defineAsyncComponent(item.component)
          );
        });

        app.mount('#root');
      },
      onError
    );
  })
  .catch(onError);
