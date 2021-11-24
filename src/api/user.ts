import request from '@/utils/request';

export interface LoginData {
  username: string;
  password: string;
}

export interface LoginRes {
  token: string;
}
export function login(data: LoginData) {
  return request<LoginRes>({
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

export function getUserInfo() {
  return request({
    url: '/api/user/info',
    method: 'post',
  });
}
