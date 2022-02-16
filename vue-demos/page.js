import { resolveDynamicComponent } from 'vue';

import { useRoute } from 'vue-router';

let styleNode;

const domains = [
  '//localhost',
  '//arco.bytedance.net',
  '//arco.design',
  '//arco.boe.bytedance.net',
];

const toggleLoading = (show) => {
  const node = document.querySelector('#loadingNode');
  if (node) {
    node.style.display = show ? '' : 'none';
  } else {
    console.error('loading node is null ');
  }
};

const lessModifyVars = async (vars) => {
  if (typeof window.less.modifyVars === 'function') {
    return await window.less.modifyVars(vars);
  } else if (window.less) {
    console.error('less.modifyVars is not a function ');
  }
};

let prevType;

let timerRef;

const Page = {
  mounted() {
    const handler = async (e) => {
      const { data, origin } = e;
      if (domains.every((key) => origin.indexOf(key) === -1)) {
        console.error('origin is valid');
        return;
      }
      if (data) {
        if (timerRef && prevType === data.type) {
          clearTimeout(timerRef);
        }
        prevType = data.type;
        // 这里使用settimeout是为了避免iframe内部js的执行阻塞父页面的渲染
        timerRef = setTimeout(async () => {
          const { type, info } = data;

          if (type === 'compileLess') {
            toggleLoading(true);
            setTimeout(async () => {
              await lessModifyVars(info);
              toggleLoading(false);
            }, 0);
          } else if (type === 'compiling') {
            toggleLoading(info);
          } else if (type === 'compilePreview') {
            lessModifyVars(info.tokens);

            if (styleNode) {
              document.head.removeChild(styleNode);
            } // stylenode 中包含自定义css的编译，所以移除掉
            const defaultId = `${info.themeId}_customize_style_first_render`;
            const defaultNode = document.getElementById(defaultId);

            if (defaultNode) {
              document.head.removeChild(defaultNode);
            }
            styleNode = document.createElement('style');

            styleNode.innerHTML = info.styleContent;

            document.head.appendChild(styleNode);
          } else if (type === 'customerLess') {
            toggleLoading(true);
            const { code, componentName, themeId } = info;
            const customerId = `${componentName}_customize_style`;
            const defaultId = `${themeId}_customize_style_first_render`;
            if (typeof window.less.render === 'function') {
              window.less.render(code, (err, output) => {
                toggleLoading(false);
                if (err) {
                  console.error('render customerLess failed', err);
                  // Message.error('编译失败！');
                } else {
                  const originNode = document.getElementById(customerId);
                  const defaultNode = document.getElementById(defaultId);

                  if (defaultNode) {
                    document.head.removeChild(defaultNode);
                  }
                  if (originNode) {
                    document.head.removeChild(originNode);
                  }

                  if (output) {
                    const styleNode = document.createElement('style');
                    styleNode.id = customerId;
                    styleNode.innerHTML = output.css;
                    document.head.appendChild(styleNode);
                  }
                }
              });
            }
          } else if (type === 'setDarkTheme') {
            document.body.setAttribute('arco-theme', info ? 'dark' : 'light');
          }

          timerRef = undefined;
        }, 0);
      }
    };
    window.addEventListener('message', handler, false);
    return () => {
      if (timerRef) {
        clearTimeout(timerRef);
        timerRef = undefined;
      }
      window.removeEventListener('message', handler);
    };
  },
  setup() {
    const route = useRoute();
    let name = window.Vue.reactive(route.hash.replace('#', ''));

    // 当参数更改时获取用户信息
    window.Vue.watch(
      () => route.hash,
      async (hash) => {
        name = hash.replace('#', '');
      }
    );

    return () => {
      console.log(route, name, 'demo');
      const Demo = resolveDynamicComponent('Demo' + name);
      return (
        <div id={'demos-wrapper-' + name}>
          <Demo />
        </div>
      );
    };
  },
};

export default Page;
