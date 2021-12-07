import axios from 'axios';

export interface PolicyParams {
  current: number;
  pageSize: number;
  createdTimeStart?: string;
  createdTimeEnd?: string;
  keyword?: string;
}

export interface PolicyRecord {
  id: string;
  name: string;
  workflow: string;
  period: string;
  statistic: number;
  status: 'success' | 'pending' | 'failed';
  createdTime: string;
  deadline: string;
}

export interface PolicyListRes {
  list: PolicyRecord[];
  total: number;
}

export function queryPolicyList(params: PolicyParams) {
  return axios.get<PolicyListRes>('/api/list/policy', { params });
}

export function queryRecentList(params = []) {
  return axios.get('/api/list/service/recent', { params });
}

export interface DocRecord {
  title: string;
  description: string;
}
export interface ServiceRecord extends DocRecord {
  icon: string;
  enable: boolean;
}

export function queryDevList(params = []) {
  return axios.get('/api/list/service/dev', { params });
}

export function queryDocsList(params = []) {
  return axios.get('/api/list/docs', { params });
}
