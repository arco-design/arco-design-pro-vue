import axios from 'axios';

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
  return axios.post<LatestProjectRecord[]>('/api/user/latest-project/list');
}

export interface LatestActivity {
  id: number;
  title: string;
  description: string;
  avatar: string;
}
export function queryLatestActivity() {
  return axios.post<LatestActivity[]>('/api/user/latest-activity');
}

export interface VisitsRecord {
  name: string;
  visits: number;
  growth: number;
}

export function queryVisits() {
  return axios.post<VisitsRecord[]>('/api/user/visits');
}

export interface ProjectRecord {
  id: number;
  content: string;
}

export function queryProjectAndTeamList() {
  return axios.post<ProjectRecord[]>('/api/user/project-and-team/list');
}

export function saveUserInfo() {
  return axios.post('/api/user/save-info');
}
