import {
  login as userLogin,
  logout as userLogout,
  getUserInfo,
  ILoginData,
} from '@/api/user';

import { A_USER_LOGIN, A_USER_INFO, A_USER_LOGOUT } from './action-type';
import { M_USER_SET_INFO, M_USER_RESET_INFO } from './mutation-type';

import { setToken, clearToken } from '@/utils/auth';

export interface IUserState {
  name?: string;
  avatar?: string;
  job?: string;
  organization?: string;
  location?: string;
  email?: string;
}

const initialState: IUserState = {};
const mutations = {
  [M_USER_SET_INFO](state: IUserState, userInfo: IUserState) {
    Object.keys(userInfo).forEach((key) => {
      state[key] = userInfo[key];
    });
  },
  [M_USER_RESET_INFO](state: IUserState) {
    state = {};
  },
};
const actions = {
  // user login
  [A_USER_LOGIN]({ commit }, loginForm: ILoginData) {
    // const router = useRouter(); // 如果放外侧会进行警告
    return new Promise((resolve, reject) => {
      userLogin(loginForm).then(
        (res) => {
          setToken(res.data.token as string);
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
export default {
  // namespaced: true,
  state: initialState,
  mutations,
  actions,
};
