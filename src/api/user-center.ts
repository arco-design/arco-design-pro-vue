import request from '@/utils/request';

export interface LatestProjectRecord {
  id: number;
  name: string;
  description: string;
  contributors: {
    name: string;
    email: string;
    avatar: string;
  }[];
}
export function queryLatestProjectList() {
  return request<LatestProjectRecord[]>({
    url: '/api/user/latest-project/list',
    method: 'post',
  });
}

export interface LatestActivity {
  id: number;
  title: string;
  description: string;
  avatar: string;
}
export function queryLatestActivity() {
  return request<LatestActivity[]>({
    url: '/api/user/latest-activity',
    method: 'post',
  });
}

export interface VisitsRecord {
  name: string;
  visits: number;
  growth: number;
}

export function queryVisits() {
  return request<VisitsRecord[]>({
    url: '/api/user/visits',
    method: 'post',
  });
}

export interface ProjectRecord {
  id: number;
  content: string;
}

export function queryProjectAndTeamList() {
  return request<ProjectRecord[]>({
    url: '/api/user/project-and-team/list',
    method: 'post',
  });
}

export function saveUserInfo() {
  return request({
    url: '/api/user/save-info',
    method: 'post',
  });
}
