import { AxiosPromise } from 'axios';

import request, { HttpResponse } from '@/utils/request';

export function queryLatestProjectList(): AxiosPromise<HttpResponse> {
  return request({
    url: '/api/user/latest-project/list',
    method: 'post',
  });
}

export function queryLatestActivity(): AxiosPromise<HttpResponse> {
  return request({
    url: '/api/user/latest-activity',
    method: 'post',
  });
}

export function queryVisits(): AxiosPromise<HttpResponse> {
  return request({
    url: '/api/user/visits',
    method: 'post',
  });
}

export function queryProjectAndTeamList(): AxiosPromise<HttpResponse> {
  return request({
    url: '/api/user/project-and-team/list',
    method: 'post',
  });
}

export function saveUserInfo(): AxiosPromise<HttpResponse> {
  return request({
    url: '/api/user/save-info',
    method: 'post',
  });
}
