import { App, ComponentPublicInstance } from 'vue';
import request from './request';

export default function handleError(Vue: App, baseUrl: string) {
  if (!baseUrl) {
    return;
  }
  Vue.config.errorHandler = (
    err: unknown,
    instance: ComponentPublicInstance | null,
    info: string
  ) => {
    // send error info
    request({
      method: 'post',
      url: `${baseUrl}/report-error`,
      data: {
        err,
        instance,
        info,
        // location: window.location.href,
        // message: err.message,
        // stack: err.stack,
        // browserInfo: getBrowserInfo(),
        // user info
        // dom info
        // url info
        // ...
      },
    });
  };
}
