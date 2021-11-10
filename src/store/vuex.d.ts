import { Store } from 'vuex';
import { IState } from './index';

declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    $store: Store<IState>;
  }
}
