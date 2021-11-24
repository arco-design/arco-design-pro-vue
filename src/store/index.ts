import { InjectionKey } from 'vue';
import {
  createStore,
  useStore as baseUseStore,
  Store,
  createLogger,
} from 'vuex';
import { debug } from '@/utils/env';
import appStore, { DefaultSetting } from './modules/app';
import userStore, { UserState } from './modules/user';

export interface StateModuler {
  app: DefaultSetting;
  user: UserState;
}

export const key: InjectionKey<Store<StateModuler>> = Symbol('store');

const store = createStore<StateModuler>({
  modules: {
    app: appStore,
    user: userStore,
  },
  strict: debug,
  plugins: debug ? [createLogger()] : [],
});
export default store;
// 定义自己的 `useStore` 组合式函数
export function useStore() {
  return baseUseStore(key);
}
