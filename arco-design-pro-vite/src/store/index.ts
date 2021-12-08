import { InjectionKey } from 'vue';
import {
  createStore,
  useStore as VuexUseStore,
  createLogger,
  Store as VuexStore,
} from 'vuex';
import { RootState } from './interface';
import {
  AppStateTypes,
  AppStoreModuleTypes,
  UserStateTypes,
  UserStoreModuleTypes,
} from './modules/interface';

import { debug } from '@/utils/env';

import modules from './modules';

export type StoreModules = {
  user: UserStoreModuleTypes;
  app: AppStoreModuleTypes;
};
export interface StateModuler {
  app: AppStateTypes;
  user: UserStateTypes;
}
const store = createStore<RootState>({
  modules,
  strict: debug,
  plugins: debug ? [createLogger()] : [],
});
export default store;

// Note: since i am spreading types, in case of same action/mutation types might override.
// we can prevent this by using namespace or completely avoiding this.

export type Store = UserStoreModuleTypes<Pick<StoreModules, 'user'>> &
  AppStoreModuleTypes<Pick<StoreModules, 'app'>>;

export const key: InjectionKey<VuexStore<StoreModules>> = Symbol('store');

export function useStore(): Store {
  return VuexUseStore(key) as unknown as Store;
}
