import { GetterTree } from 'vuex';
import { AppGettersTypes, AppStateTypes, RootState } from '@/store/interface';

export const getters: GetterTree<AppStateTypes, RootState> & AppGettersTypes = {
  appCurrentSetting: (state: AppStateTypes) => {
    return { ...state };
  },
};
