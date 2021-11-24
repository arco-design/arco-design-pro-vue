import request from '@/utils/request';

export function queryProfileBasic() {
  return request({
    url: '/api/profile/basic',
    method: 'post',
  });
}
