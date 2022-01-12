import { createPinia } from 'pinia';
import { PiniaLogger } from 'pinia-logger';
import { debug } from '@/utils/env';
import { useAppStore } from './modules/app';
import { useUserStore } from './modules/user';

const pinia = createPinia();

if (debug) {
  pinia.use(
    PiniaLogger({
      showStoreName: true,
      expanded: false,
      disabled: false,
    })
  );
}

export { useAppStore, useUserStore };
export default pinia;
