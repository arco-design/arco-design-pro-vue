import { AxiosPromise } from 'axios';

import request, { HttpResponse } from '@/utils/request';

export interface IStepFormRes {
  name: string;
  purpose: string;
  cluster: string[];
  type: string;
  dns: boolean;
  subDomain: boolean;
  psm: string;
  strategy: string;
}

// type IStepRes = HttpResponse<IStepFormRes>;

export function queryStepForm(): AxiosPromise<HttpResponse> {
  return request({
    url: '/api/step-form',
    method: 'post',
  });
}

export function queryClusterList(): AxiosPromise<HttpResponse> {
  return request({
    url: '/api/cluster/list',
    method: 'post',
  });
}

export function queryLineList(params: string): AxiosPromise<HttpResponse> {
  return request({
    url: '/api/line/list',
    method: 'get',
    params,
  });
}
