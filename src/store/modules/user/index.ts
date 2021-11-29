import { Module } from 'vuex';
import { UserStateTypes, RootState } from '@/store/interface';
import { getters } from './getters';
import { actions } from './actions';
import { mutations } from './mutations';
import { state } from './state';

// Module
const user: Module<UserStateTypes, RootState> = {
  state,
  getters,
  mutations,
  actions,
};

export default user;
