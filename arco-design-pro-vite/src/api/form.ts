import axios from 'axios';

export interface BaseInfoModel {
  activityName: string;
  channelType: string;
  promotionTime: string[];
  promoteLink: string;
}
export interface ChannelInfoModel {
  advertisingSource: string;
  advertisingMedia: string;
  keyword: string[];
  pushNotify: boolean;
  advertisingContent: string;
}

export type UnitChannelMode = BaseInfoModel & ChannelInfoModel;

export function submitChannelForm(data: UnitChannelMode) {
  return axios.post('/api/channel-form/submit', { data });
}
