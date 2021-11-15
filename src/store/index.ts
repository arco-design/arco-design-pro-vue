import { InjectionKey } from 'vue';
import { createStore, useStore as baseUseStore, Store } from 'vuex';
import appStore, { IDefaultSetting } from './modules/app';
import userStore, { IUserState } from './modules/user';

export interface IState {
  app: IDefaultSetting;
  user: IUserState;
}

export const key: InjectionKey<Store<IState>> = Symbol('store');

const store = createStore<IState>({
  modules: {
    app: appStore,
    user: userStore,
  },
});
export default store;
// 定义自己的 `useStore` 组合式函数
export function useStore() {
  return baseUseStore(key);
}
