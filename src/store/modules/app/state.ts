import defaultSettings from '@/config/settings.json';

export interface AppStateTypes {
  theme: string;
  colorWeek: boolean;
  navbar: boolean;
  menu: boolean;
  menuCollapse: boolean;
  footer: boolean;
  themeColor: string;
  menuWidth: number;
  [key: string]: unknown;
}

const defaultTheme = localStorage.getItem('arco-theme') || 'light';

Reflect.defineProperty(defaultSettings, 'theme', {
  value: defaultTheme,
});

export const state: AppStateTypes = {
  ...defaultSettings,
};
