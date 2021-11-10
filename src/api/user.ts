import request from '@/utils/request';

interface ILoginData {
  username: string;
  password: string;
}
export function login(data: ILoginData) {
  return request({
    url: 'api/user/login',
    method: 'post',
    data,
  });
}
