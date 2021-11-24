import {
  login as userLogin,
  logout as userLogout,
  getUserInfo,
  LoginData,
} from '@/api/user';

import { A_USER_LOGIN, A_USER_INFO, A_USER_LOGOUT } from './action-type';
import { M_USER_SET_INFO, M_USER_RESET_INFO } from './mutation-type';

import { setToken, clearToken } from '@/utils/auth';

export interface UserState {
  name?: string;
  avatar?: string;
  job?: string;
  organization?: string;
  location?: string;
  email?: string;
  introduction?: string;
  personalWebsite?: string;
}

const initialState: UserState = {};
const mutations = {
  [M_USER_SET_INFO](state: UserState, userInfo: UserState) {
    Object.keys(userInfo).forEach((key) => {
      state[key as keyof UserState] = userInfo[key as keyof UserState];
    });
  },
  [M_USER_RESET_INFO](state: UserState) {
    Object.keys(state).forEach((key) => {
      state[key as keyof UserState] = '';
    });
  },
};
const actions = {
  // user login
  [A_USER_LOGIN]({ commit }, loginForm: LoginData) {
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
  // // get user info
  [A_USER_INFO]({ commit }) {
    return new Promise((resolve, reject) => {
      getUserInfo().then(
        (res) => {
          commit(M_USER_SET_INFO, res.data);
          resolve(res);
        },
        (err) => {
          reject(err);
        }
      );
    });
  },
  // // user logout
  [A_USER_LOGOUT]({ commit }) {
    return new Promise((resolve, reject) => {
      userLogout().then(
        (res) => {
          commit(M_USER_RESET_INFO);
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
export const getters = {
  userInfo(state: UserState) {
    return { ...state };
  },
};

export const moduleName = 'USER';

export default {
  // namespaced: true,
  state: initialState,
  mutations,
  actions,
  getters,
};
