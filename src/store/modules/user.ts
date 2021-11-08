// import defaultSettings from '@/settings.json';
const defaultTheme = localStorage.getItem('arco-theme') || 'light';

export interface GlobalState {
  theme?: string;
  //   settings?: typeof defaultSettings;
  userInfo?: {
    name?: string;
    avatar?: string;
    job?: string;
    organization?: string;
    location?: string;
    email?: string;
  };
}
const initialState: GlobalState = {
  theme: defaultTheme,
  //   settings: defaultSettings,
  userInfo: undefined,
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
