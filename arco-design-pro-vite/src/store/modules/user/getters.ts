import { GetterTree } from 'vuex';
import { RootState } from '@/store/interface';
import { UserStateTypes } from './state';

export interface UserGettersTypes {
  userInfo(state: UserStateTypes): UserStateTypes;
}

export const getters: GetterTree<UserStateTypes, RootState> & UserGettersTypes =
  {
    userInfo: (state: UserStateTypes) => {
      return { ...state };
    },
  };
