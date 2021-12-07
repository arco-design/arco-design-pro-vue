import { GetterTree } from 'vuex';
import { UserStateTypes } from './state';
import { RootState } from '@/store/interface';

export interface UserGettersTypes {
  userInfo(state: UserStateTypes): UserStateTypes;
}

export const getters: GetterTree<UserStateTypes, RootState> & UserGettersTypes =
  {
    userInfo: (state: UserStateTypes) => {
      return { ...state };
    },
  };
