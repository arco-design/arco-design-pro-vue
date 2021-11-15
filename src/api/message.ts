import request, { HttpResponse } from '@/utils/request';

export function queryMessageList(): Promise<HttpResponse> {
  return request({
    url: '/api/message/list',
    method: 'post',
  });
}

export function setMessageStatus(data: any): Promise<HttpResponse> {
  return request({
    url: '/api/message/read',
    method: 'post',
    data,
  });
}
