import request from '@/utils/request';

export interface StepFormRes {
  name: string;
  purpose: string;
  cluster: string[];
  type: string;
  dns: boolean;
  subDomain: boolean;
  psm: string;
  strategy: string;
}

export function queryStepForm() {
  return request<StepFormRes>({
    url: '/api/step-form',
    method: 'post',
  });
}

export function queryClusterList() {
  return request({
    url: '/api/cluster/list',
    method: 'post',
  });
}

export function queryLineList(params: string) {
  return request({
    url: '/api/line/list',
    method: 'get',
    params,
  });
}
