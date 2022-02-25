// import { computed } from 'vue';
import { useAppStore } from '@/store';

let styleNode: HTMLStyleElement;

const domains = [
  '//localhost',
  '//arco.bytedance.net',
  '//arco.design',
  '//arco.boe.bytedance.net',
];

const toggleLoading = (show: boolean) => {
  const node = document.querySelector('#loadingNode') as HTMLSpanElement;
  if (node) {
    node.style.display = show ? '' : 'none';
  } else {
    console.error('loading node is null ');
  }
};
// eslint-disable-next-line consistent-return
const lessModifyVars = async (vars: any) => {
  if (typeof window.less.modifyVars === 'function') {
    const result = await window.less.modifyVars(vars);
    return result;
  }
  console.error('less.modifyVars is not a function ');
};
export default function useThemesActions() {
  const appStore = useAppStore();

  window.addEventListener(
    'message',
    (messageEvent) => {
      console.log(messageEvent, 'messageEvent');
      if (domains.every((key) => origin.indexOf(key) === -1)) {
        console.error('origin is valid');
        return;
      }
      const { type, info } = messageEvent.data;
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
          document.head.removeChild(defaultNode as HTMLElement);
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
          window.less.render(code, (err: any, output: { css: string }) => {
            toggleLoading(false);
            if (err) {
              console.error('render customerLess failed', err);
            } else {
              const originNode = document.getElementById(customerId);
              const defaultNode = document.getElementById(defaultId);

              if (defaultNode) {
                document.head.removeChild(defaultNode as HTMLElement);
              }
              if (originNode) {
                document.head.removeChild(originNode as HTMLElement);
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
        console.log(info, '__info______');
        document.body.setAttribute('arco-theme', info ? 'dark' : 'light');
      }
    },
    false
  );
  const defaultTheme = window.parent.document.body.getAttribute('arco-theme');
  appStore.toggleTheme(defaultTheme === 'dark');
}
