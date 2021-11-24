import request from '@/utils/request';

export interface FeedBackSearchParams {
  page: number;
  pageSize: number;
  roomNumber: number;
  startTime: string;
  endTime: string;
}

export function queryFeedbackList(data: FeedBackSearchParams) {
  return request({
    url: '/api/feedback/list',
    method: 'post',
    data,
  });
}

export function queryReportStuckRate() {
  return request({
    url: '/api/report-stuck-rate',
    method: 'post',
  });
}

export interface DataChainGrowth {
  quota: string;
}

export function queryDataChainGrowth(data: DataChainGrowth) {
  return request({
    url: '/api/data-chain-growth',
    method: 'post',
    data,
  });
}

export interface DownloadHistoryParams {
  time: string[];
  showCompetitor: string;
}
export function queryDownloadHistory(formData: DownloadHistoryParams) {
  return request({
    url: '/api/download-history',
    method: 'get',
    params: formData,
  });
}
