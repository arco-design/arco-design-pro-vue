import { MutationTree } from 'vuex';
import { MutationTypes } from './mutation-types';
import { UserMutationsTypes, UserStateTypes } from '../../interface';

export const mutations: MutationTree<UserStateTypes> & UserMutationsTypes = {
  [MutationTypes.USER_SET_INFO](
    state: UserStateTypes,
    payload: UserStateTypes
  ) {
    Object.keys(payload).forEach((key) => {
      state[key as keyof UserStateTypes] = payload[key as keyof UserStateTypes];
    });
  },
  [MutationTypes.USER_RESET_INFO](state: UserStateTypes) {
    Object.keys(state).forEach((key) => {
      state[key as keyof UserStateTypes] = '';
    });
  },
};
