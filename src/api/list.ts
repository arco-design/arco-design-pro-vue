import request from '@/utils/request';

export interface PolicyParams {
  page: number;
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
  return request<PolicyListRes>({
    url: '/api/list/policy',
    method: 'get',
    params,
  });
}

export function queryRecentList(params = []) {
  return request({
    url: '/api/list/service/recent',
    method: 'get',
    params,
  });
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
  return request<ServiceRecord[]>({
    url: '/api/list/service/dev',
    method: 'get',
    params,
  });
}

export function queryDocsList(params = []) {
  return request({
    url: '/api/list/docs',
    method: 'get',
    params,
  });
}
