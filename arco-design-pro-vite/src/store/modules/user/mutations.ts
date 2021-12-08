import { MutationTree } from 'vuex';
import { MutationTypes } from './mutation-types';
import { UserStateTypes } from './state';

export type UserMutationsTypes<S = UserStateTypes> = {
  [MutationTypes.USER_RESET_INFO](state: S): void;
  [MutationTypes.USER_SET_INFO](state: S, payload: UserStateTypes): void;
};

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
