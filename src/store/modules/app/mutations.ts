import { MutationTree } from 'vuex';
import { MutationTypes } from './mutation-types';
import { AppMutationsTypes, AppStateTypes } from '../../interface';

export const mutations: MutationTree<AppStateTypes> & AppMutationsTypes = {
  [MutationTypes.APP_UPDATE_SETTING](
    state: AppStateTypes,
    payload: AppStateTypes
  ) {
    Object.keys(payload).forEach((key) => {
      state[key] = payload[key];
    });
  },
  [MutationTypes.TOGGLE_THEME](state: AppStateTypes) {
    Object.keys(state).forEach((key) => {
      state[key] = '';
    });
  },
};
