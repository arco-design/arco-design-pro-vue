import defaultSettings from '@/config/settings.json';
import { AppStateTypes } from '@/store/interface';

const defaultTheme = localStorage.getItem('arco-theme') || 'light';

Reflect.defineProperty(defaultSettings, 'theme', {
  value: defaultTheme,
});

export const state: AppStateTypes = {
  ...defaultSettings,
};
