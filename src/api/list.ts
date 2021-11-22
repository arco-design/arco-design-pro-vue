import { AxiosPromise } from 'axios';
import request, { HttpResponse } from '@/utils/request';

export interface IPolicyParams {
  page: number;
  pageSize: number;
  createdTimeStart?: string;
  createdTimeEnd?: string;
  keyword?: string;
}
export function queryPolicyList(
  params: IPolicyParams
): AxiosPromise<HttpResponse> {
  return request({
    url: '/api/list/policy',
    method: 'get',
    params,
  });
}

export function queryRecentList(params = []): AxiosPromise<HttpResponse> {
  return request({
    url: '/api/list/service/recent',
    method: 'get',
    params,
  });
}

export function queryDevList(params = []): AxiosPromise<HttpResponse> {
  return request({
    url: '/api/list/service/dev',
    method: 'get',
    params,
  });
}

export function queryDocsList(params = []): AxiosPromise<HttpResponse> {
  return request({
    url: '/api/list/docs',
    method: 'get',
    params,
  });
}
