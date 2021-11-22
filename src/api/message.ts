import { AxiosPromise } from 'axios';

import request, { HttpResponse } from '@/utils/request';

export function queryMessageList(): AxiosPromise<HttpResponse> {
  return request({
    url: '/api/message/list',
    method: 'post',
  });
}

interface IMessageStatus {
  ids: number;
}

export function setMessageStatus(
  data: IMessageStatus
): AxiosPromise<HttpResponse> {
  return request({
    url: '/api/message/read',
    method: 'post',
    data,
  });
}

export function queryChatList(): AxiosPromise<HttpResponse> {
  return request({
    url: '/api/chat/list',
    method: 'post',
  });
}
