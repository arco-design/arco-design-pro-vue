import { GetterTree } from 'vuex';
import { RootState } from '@/store/interface';
import { AppStateTypes } from './state';

export interface AppGettersTypes {
  appCurrentSetting(state: AppStateTypes): AppStateTypes;
}

export const getters: GetterTree<AppStateTypes, RootState> & AppGettersTypes = {
  appCurrentSetting: (state: AppStateTypes) => {
    return { ...state };
  },
};
