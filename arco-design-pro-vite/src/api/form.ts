import axios from 'axios';
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
  return axios.post<StepFormRes>('/api/step-form');
}

export function queryClusterList() {
  return axios.post<NodeOptions[]>('/api/cluster/list');
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
  return axios.get<Options[]>('/api/line/list', { params });
}
