import { Store } from 'vuex';
import { StateModuler } from './index';

declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    $store: Store<StateModuler>;
  }
}
