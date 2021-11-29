import { ModuleTree } from 'vuex';
import { RootState } from '@/store/interface';
// import { getters } from './getters';
// import { actions } from './actions';
// import { mutations } from './mutations';
// import { state } from './state';
import user from './user';
import app from './app';

// Modules
const modules: ModuleTree<RootState> = {
  user,
  app,
};

// const root: Module<RootState, RootState> = {
//   modules,
// };

export default modules;
