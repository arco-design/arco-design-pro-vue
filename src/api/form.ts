import request from '@/utils/request';
import { Options, NodeOptions } from '@/types/global';

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
  return request<NodeOptions[]>({
    url: '/api/cluster/list',
    method: 'post',
  });
}

export interface LineListRes {
  name: string;
  purpose: string;
  cluster: string[];
  type: string;
  dns: boolean;
  subDomain: boolean;
  psm: string;
  strategy: string;
}

export function queryLineList(params: { cluster: string[] }) {
  return request<Options[]>({
    url: '/api/line/list',
    method: 'get',
    params,
  });
}
