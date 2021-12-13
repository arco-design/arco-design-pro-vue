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

export const state: AppStateTypes = {
  ...defaultSettings,
};
