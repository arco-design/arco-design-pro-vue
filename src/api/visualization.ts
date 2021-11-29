import request from '@/utils/request';

export interface FeedBackSearchParams {
  page: number;
  pageSize: number;
  roomNumber: string;
  startTime: string;
  endTime: string;
}

export interface FeedBackSearchRes {
  list: {
    id: string;
    userId: number;
    deviceId: number;
    system: string;
    content: string;
    time: string;
  }[];
  total: number;
}

export function queryFeedbackList(data: FeedBackSearchParams) {
  return request<FeedBackSearchRes>({
    url: '/api/feedback/list',
    method: 'post',
    data,
  });
}
export interface ReportStuckRateRecord {
  x: string;
  y: number;
  name: string;
}

export function queryReportStuckRate() {
  return request<ReportStuckRateRecord[]>({
    url: '/api/report-stuck-rate',
    method: 'post',
  });
}

export interface DataChainGrowth {
  quota: string;
}
export interface DataChainGrowthRes {
  count: number;
  growth: number;
  chartData: ReportStuckRateRecord[];
}
export function queryDataChainGrowth(data: DataChainGrowth) {
  return request<DataChainGrowthRes>({
    url: '/api/data-chain-growth',
    method: 'post',
    data,
  });
}

export interface DownloadHistoryParams {
  time: [string, string];
  showCompetitor: string | boolean;
}
export interface DownloadHistoryRecord {
  x: string;
  y: number;
  name: string;
}

export function queryDownloadHistory(formData: DownloadHistoryParams) {
  return request<DownloadHistoryRecord[]>({
    url: '/api/download-history',
    method: 'get',
    params: formData,
  });
}
