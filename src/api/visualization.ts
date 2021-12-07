import axios from 'axios';

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

export function queryFeedbackList(params: FeedBackSearchParams) {
  return axios.get<FeedBackSearchRes>('/api/feedback/list', { params });
}
export interface ReportStuckRateRecord {
  x: string;
  y: number;
  name: string;
}

export function queryReportStuckRate() {
  return axios.post<ReportStuckRateRecord[]>('/api/report-stuck-rate');
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
  return axios.post<DataChainGrowthRes>('/api/data-chain-growth', data);
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

export function queryDownloadHistory(params: DownloadHistoryParams) {
  return axios.get<DownloadHistoryRecord[]>('/api/download-history', {
    params,
  });
}
