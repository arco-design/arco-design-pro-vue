import { AxiosPromise } from 'axios';

import request, { HttpResponse } from '@/utils/request';

export interface ILoginData {
  username: string;
  password: string;
}
export function login(data: ILoginData): AxiosPromise<HttpResponse> {
  return request({
    url: '/api/user/login',
    method: 'post',
    data,
  });
}

export function logout(): AxiosPromise<HttpResponse> {
  return request({
    url: '/api/user/logout',
    method: 'post',
  });
}

export function getUserInfo(): AxiosPromise<HttpResponse> {
  return request({
    url: '/api/user/info',
    method: 'post',
  });
}
