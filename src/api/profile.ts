import { AxiosPromise } from 'axios';

import request, { HttpResponse } from '@/utils/request';

export function queryProfileBasic(): AxiosPromise<HttpResponse> {
  return request({
    url: '/api/profile/basic',
    method: 'post',
  });
}
