// store.ts
import { InjectionKey } from 'vue';
import { createStore, useStore as baseUseStore, Store } from 'vuex';

export interface State {
  count: number;
}

// eslint-disable-next-line symbol-description
export const key: InjectionKey<Store<State>> = Symbol();

const store = createStore<State>({
  state: {
    count: 0,
  },
});
export default store;
// 定义自己的 `useStore` 组合式函数
export function useStore() {
  return baseUseStore(key);
}
