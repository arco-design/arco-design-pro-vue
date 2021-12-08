import { Store as VuexStore, CommitOptions, DispatchOptions } from 'vuex';
import { UserStateTypes } from './state';
import { UserMutationsTypes } from './mutations';
import { UserGettersTypes } from './getters';
import { UserActionsTypes } from './actions';

export type UserStoreModuleTypes<S = UserStateTypes> = Omit<
  VuexStore<S>,
  'commit' | 'getters' | 'dispatch'
> & {
  commit<
    K extends keyof UserMutationsTypes,
    P extends Parameters<UserMutationsTypes[K]>[1]
  >(
    key: K,
    payload?: P,
    options?: CommitOptions
  ): ReturnType<UserMutationsTypes[K]>;
} & {
  getters: {
    [K in keyof UserGettersTypes]: ReturnType<UserGettersTypes[K]>;
  };
} & {
  // overwrite state
  [K in keyof UserStateTypes]: UserStateTypes[K];
} & {
  dispatch<K extends keyof UserActionsTypes>(
    key: K,
    payload?: Parameters<UserActionsTypes[K]>[1],
    options?: DispatchOptions
  ): ReturnType<UserActionsTypes[K]>;
};
