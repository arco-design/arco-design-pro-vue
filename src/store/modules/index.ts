import { ModuleTree } from 'vuex';
import { RootState } from '@/store/interface';

import user from './user';
import app from './app';

// Modules
const modules: ModuleTree<RootState> = {
  user,
  app,
};

export default modules;
