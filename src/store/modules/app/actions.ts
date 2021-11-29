import { ActionTree } from 'vuex';
// import { ActionTypes } from './action-types';
// import { MutationTypes } from './mutation-types';
import { AppActionsTypes, AppStateTypes, RootState } from '@/store/interface';

export const actions: ActionTree<AppStateTypes, RootState> & AppActionsTypes = {
  // [ActionTypes.DEFAULT_SETTING]({ commit }) {
  //   return new Promise(() => {});
  // },
};
