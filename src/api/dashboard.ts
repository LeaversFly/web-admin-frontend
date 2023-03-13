import axios from 'axios';
import type { TableData } from '@arco-design/web-vue/es/table/interface';

export interface ContentDataRecord {
  x: string;
  y: number;
}

export function queryContentData() {
  return axios.get<ContentDataRecord[]>('/api/content-data');
}

export interface PopularRecord {
  key: number;
  clickNumber: string;
  title: string;
  increases: number;
}

export function queryPopularList(params: { type: string }) {
  return axios.get<TableData[]>('/api/popular/list', { params });
}

export function getFileListCount() {
  return axios.get<number>('/file/count');
}

export function getValidFileCount() {
  return axios.get<number>('/file/valid/count');
}

export function getYesterdayCount() {
  return axios.get<number>('/file/yesterday');
}

export function getUserCount() {
  return axios.get<number>('/user/all/count')
}

export function get8DaysFileCount() {
  return axios.get<ContentDataRecord[]>('/file/8DaysCount')
}
