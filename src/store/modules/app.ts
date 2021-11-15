/* eslint-disable import/extensions */
import defaultSettings from '@/config/settings.json';
import { M_APP_UPDATE_SETTING, M_TOGGLE_THEME } from './mutation-type';

const defaultTheme = localStorage.getItem('arco-theme') || 'light';

Reflect.defineProperty(defaultSettings, 'theme', {
  value: defaultTheme,
});

function changeTheme(newTheme: string) {
  localStorage.setItem('arco-theme', newTheme);
  if (newTheme === 'dark') {
    document.body.setAttribute('arco-theme', 'dark');
  } else {
    document.body.removeAttribute('arco-theme');
  }
}

export interface IDefaultSetting {
  theme: string;
  colorWeek: boolean;
  navbar: boolean;
  menu: boolean;
  footer: boolean;
  themeColor: string;
  menuWidth: number;
  [key: string]: unknown;
}
export interface ISettingPayload {
  key: string;
  value: unknown;
}
const initialState: IDefaultSetting = {
  ...defaultSettings,
};
const mutations = {
  [M_APP_UPDATE_SETTING](state: IDefaultSetting, payload: ISettingPayload) {
    const { key, value } = payload;
    state[key] = value;
  },
  [M_TOGGLE_THEME](state: IDefaultSetting) {
    const theme = state.theme === 'light' ? 'dark' : 'light';
    state.theme = theme;
    changeTheme(theme);
  },
};
const actions = {};
export default {
  // namespaced: true,
  state: initialState,
  mutations,
  actions,
};
