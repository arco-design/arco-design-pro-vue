import { ActionTree } from 'vuex';
import { ActionTypes } from './action-types';
import { MutationTypes } from './mutation-types';
import { UserActionsTypes, UserStateTypes, RootState } from '@/store/interface';
import {
  login as userLogin,
  logout as userLogout,
  getUserInfo,
} from '@/api/user';
import { setToken, clearToken } from '@/utils/auth';

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
