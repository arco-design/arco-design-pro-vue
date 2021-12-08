import { ActionTree, ActionContext } from 'vuex';
import { UserStateTypes } from './state';
import { ActionTypes } from './action-types';
import { MutationTypes } from './mutation-types';
import { UserMutationsTypes } from './mutations';
import { RootState } from '@/store/interface';
import {
  login as userLogin,
  logout as userLogout,
  getUserInfo,
  LoginData,
} from '@/api/user';
import { setToken, clearToken } from '@/utils/auth';

export type UserAugmentedActionContext = {
  commit<K extends keyof UserMutationsTypes>(
    key: K,
    payload: Parameters<UserMutationsTypes[K]>[1]
  ): ReturnType<UserMutationsTypes[K]>;
} & Omit<ActionContext<UserStateTypes, RootState>, 'commit'>;

export interface UserActionsTypes {
  [ActionTypes.USER_INFO]({
    commit,
  }: UserAugmentedActionContext): Promise<unknown>;
  [ActionTypes.USER_LOGIN](
    { commit }: UserAugmentedActionContext,
    payload: LoginData
  ): Promise<unknown>;
  [ActionTypes.USER_LOGOUT]({
    commit,
  }: UserAugmentedActionContext): Promise<unknown>;
}

export const actions: ActionTree<UserStateTypes, RootState> & UserActionsTypes =
  {
    [ActionTypes.USER_INFO]({ commit }) {
      return new Promise((resolve, reject) => {
        getUserInfo().then(
          (res) => {
            commit(MutationTypes.USER_SET_INFO, res.data);
            resolve(res);
          },
          (err) => {
            reject(err);
          }
        );
      });
    },
    [ActionTypes.USER_LOGIN](ctx, loginForm) {
      return new Promise((resolve, reject) => {
        userLogin(loginForm).then(
          (res) => {
            setToken(res.data.token);
            resolve(res);
          },
          (err) => {
            clearToken();
            reject(err);
          }
        );
      });
    },
    [ActionTypes.USER_LOGOUT]({ commit }) {
      return new Promise((resolve, reject) => {
        userLogout().then(
          (res) => {
            commit(MutationTypes.USER_RESET_INFO, undefined);
            clearToken();
            resolve(res);
          },
          (err) => {
            reject(err);
          }
        );
      });
    },
  };
