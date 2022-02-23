import axios from 'axios';

export type themesItem = {
  owners: string[];
  depLibrary: string;
  cover: string;
  logo: string;
  allowFork: boolean;
  _id: string;
  author: string;
  themeName: string;
  status: string;
  themeId: number;
  config: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
  packageName: string;
  publishStatus: string;
  version: string;
  primaryColor: string;
  ownerInfos: any[];
  unpkgHost: string;
};

export type themesListRes = {
  list: Array<themesItem>;
  total: number;
};

export interface themesListReq {
  pageSize: number;
  currentPage: number;
  depLibrary: string;
}

export function queryThemesList(params: themesListReq) {
  return axios.get<themesListRes>('/official-api/themes/api/open/themes/list', {
    params,
  });
}
