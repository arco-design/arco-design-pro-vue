import axios from 'axios';

export interface MenuListItem {
  path: string;
  name: string;
  meta: {
    locale: string;
    requiresAuth: boolean;
    icon?: string;
    order: number;
    roles?: string[];
  };
  children?: MenuListItem[];
}

export function queryMenuList() {
  return axios.get<MenuListItem[]>('/api/menu');
}
