// import { Store } from 'vuex';
// import { StateModuler } from './index';

// declare module '@vue/runtime-core' {
//   interface ComponentCustomProperties {
//     $store: Store<StateModuler>;
//   }
// }

// new
import { Store } from './index';

declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    $store: Store;
  }
}
