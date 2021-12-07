import { Module } from 'vuex';
import { RootState } from '@/store/interface';
import { state, UserStateTypes } from './state';
import { getters } from './getters';
import { actions } from './actions';
import { mutations } from './mutations';

// Module
const user: Module<UserStateTypes, RootState> = {
  state,
  getters,
  mutations,
  actions,
};

export default user;
