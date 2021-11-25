import request from '@/utils/request';
import { UserStateTypes } from '@/store/interface';

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
  return request<UserStateTypes>({
    url: '/api/user/info',
    method: 'post',
  });
}
