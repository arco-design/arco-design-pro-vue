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
    payload: Partial<UserStateTypes>
  ) {
    Object.keys(payload).forEach((_key) => {
      const key = _key as keyof UserStateTypes;
      const value: UserStateTypes[keyof UserStateTypes] = payload[key];
      (<typeof value>state[key]) = value;
    });
  },
  [MutationTypes.USER_RESET_INFO](state: UserStateTypes) {
    Object.keys(state).forEach((key) => {
      Reflect.deleteProperty(state, key);
    });
  },
};
