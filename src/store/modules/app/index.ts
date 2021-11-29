import { Module } from 'vuex';
import { AppStateTypes, RootState } from '@/store/interface';
import { getters } from './getters';
import { actions } from './actions';
import { mutations } from './mutations';
import { state } from './state';

// Module
const app: Module<AppStateTypes, RootState> = {
  state,
  getters,
  mutations,
  actions,
};

export default app;
