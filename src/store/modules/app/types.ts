import { Store as VuexStore, CommitOptions, DispatchOptions } from 'vuex';

import { AppStateTypes } from './state';
import { AppMutationsTypes } from './mutations';
import { AppGettersTypes } from './getters';
import { AppActionsTypes } from './actions';

export type AppStoreModuleTypes<S = AppStateTypes> = Omit<
  VuexStore<S>,
  'commit' | 'getters' | 'dispatch'
> & {
  commit<
    K extends keyof AppMutationsTypes,
    P extends Parameters<AppMutationsTypes[K]>[1]
  >(
    key: K,
    payload?: P,
    options?: CommitOptions
  ): ReturnType<AppMutationsTypes[K]>;
} & {
  getters: {
    [K in keyof AppGettersTypes]: ReturnType<AppGettersTypes[K]>;
  };
} & {
  // overwrite state
  [K in keyof AppStateTypes]: AppStateTypes[K];
} & {
  dispatch<K extends keyof AppActionsTypes>(
    key: K,
    payload?: Parameters<AppActionsTypes[K]>[1],
    options?: DispatchOptions
  ): ReturnType<AppActionsTypes[K]>;
};
