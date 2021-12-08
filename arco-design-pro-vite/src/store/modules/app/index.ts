import { Module } from 'vuex';
import { RootState } from '@/store/interface';
import { state, AppStateTypes } from './state';
import { getters } from './getters';
import { actions } from './actions';
import { mutations } from './mutations';

// Module
const app: Module<AppStateTypes, RootState> = {
  state,
  getters,
  mutations,
  actions,
};

export default app;
