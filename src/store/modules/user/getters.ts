import { GetterTree } from 'vuex';
import { UserGettersTypes, UserStateTypes, RootState } from '../../interface';

export const getters: GetterTree<UserStateTypes, RootState> & UserGettersTypes =
  {
    userInfo: (state: UserStateTypes) => {
      return { ...state };
    },
  };
