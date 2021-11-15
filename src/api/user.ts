import request, { HttpResponse } from '@/utils/request';

export interface ILoginData {
  username: string;
  password: string;
}
export function login(data: ILoginData): Promise<HttpResponse> {
  return request({
    url: '/api/user/login',
    method: 'post',
    data,
  });
}

export function logout() {
  return request({
    url: '/api/user/logout',
    method: 'post',
  });
}

export function getUserInfo(): Promise<HttpResponse> {
  return request({
    url: '/api/user/info',
    method: 'post',
  });
}
