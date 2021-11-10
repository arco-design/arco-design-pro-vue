/* eslint-disable import/extensions */
import defaultSettings from '@/config/settings.json';

const defaultTheme = localStorage.getItem('arco-theme') || 'light';

Reflect.defineProperty(defaultSettings, 'theme', {
  value: defaultTheme,
});

// defaultSettings.theme = localStorage.getItem('arco-theme') || 'light';

export interface IDefaultSetting {
  theme: string;
  colorWeek: boolean;
  navbar: boolean;
  menu: boolean;
  footer: boolean;
  themeColor: string;
  menuWidth: number;
}
const initialState: IDefaultSetting = {
  ...defaultSettings,
};
const mutations = {};
const actions = {
  // user login
  // login({ commit }, loginInfo) {},
  // // get user info
  // getInfo({ commit, state }) {},
  // // user logout
  // logout({ commit, state, dispatch }) {},
};
export default {
  namespaced: true,
  state: initialState,
  mutations,
  actions,
};
