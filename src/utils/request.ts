import axios, { AxiosRequestConfig, AxiosResponse, AxiosPromise } from 'axios';
import { Message, Modal } from '@arco-design/web-vue';
import store from '@/store';
import { A_USER_LOGOUT } from '@/store/modules/action-type';
// import useUser from '@/hooks/user';
export interface HttpResponse<T = unknown> {
  status: number;
  msg: string;
  code: number;
  data: T;
}

// create an axios instance
const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API, // url = base url + request url
  // withCredentials: true, // send cookies when cross-domain requests
  timeout: 5000, // request timeout
});

// request interceptor
service.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    // do something before request is sent
    return config;
  },
  (error) => {
    // do something with request error
    // console.log(error); // for debug
    return Promise.reject(error);
  }
);

// interface ResolvedFn<T=any> {
//   (val: T): T | Promise<T>
// }
// interface MixInterceptor<T> extends AxiosResponse {
//   // response: ResolvedFn<AxiosResponse>
// }
// response interceptor

service.interceptors.response.use(
  (response: AxiosResponse<HttpResponse>) => {
    const res = response.data;
    // console.log(res);
    // if the custom code is not 20000, it is judged as an error.
    if (res.code !== 20000) {
      Message.error({
        content: res.msg || 'Error',
        duration: 5 * 1000,
      });
      // 50008: Illegal token; 50012: Other clients logged in; 50014: Token expired;
      if (
        [50008, 50012, 50014].includes(res.code) &&
        response.config.url !== '/api/user/info'
      ) {
        Modal.error({
          title: 'Confirm logout',
          content:
            'You have been logged out, you can cancel to stay on this page, or log in again',
          okText: 'Re-Login',
          async onOk() {
            await store.dispatch(A_USER_LOGOUT);
            window.location.reload();
          },
        });
      }
      return Promise.reject(new Error(res.msg || 'Error'));
    }
    return response;
  },
  (error) => {
    Message.error({
      content: error.msg,
      duration: 5 * 1000,
    });
    return Promise.reject(error);
  }
);

function serviceWrap<T>(
  opts: AxiosRequestConfig
): AxiosPromise<HttpResponse<T>> {
  return service(opts);
}
async function baseService<T>(
  opts: AxiosRequestConfig
): Promise<HttpResponse<T>> {
  const { data } = await serviceWrap<T>(opts);
  return data;
}

export default baseService;
