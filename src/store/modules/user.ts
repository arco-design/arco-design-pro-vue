export interface IUserState {
  name?: string;
  avatar?: string;
  job?: string;
  organization?: string;
  location?: string;
  email?: string;
}
const initialState: IUserState = {};
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
