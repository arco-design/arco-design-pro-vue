import { AxiosPromise } from 'axios';

import request, { HttpResponse } from '@/utils/request';

export function queryFeedbackList(): AxiosPromise<HttpResponse> {
  return request({
    url: '/api/feedback/list',
    method: 'post',
  });
}

export function queryReportStuckRate(): AxiosPromise<HttpResponse> {
  return request({
    url: '/api/report-stuck-rate',
    method: 'post',
  });
}

export interface IDataChainGrowth {
  quota: string;
}

export function queryDataChainGrowth(
  data: IDataChainGrowth
): AxiosPromise<HttpResponse> {
  return request({
    url: '/api/data-chain-growth',
    method: 'post',
    data,
  });
}

export interface IDownloadHistory {
  time: string[];
  showCompetitor: string;
}
export function queryDownloadHistory(
  formData: IDownloadHistory
): AxiosPromise<HttpResponse> {
  return request({
    url: '/api/download-history',
    method: 'get',
    params: formData,
  });
}
