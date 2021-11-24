import request from '@/utils/request';

export function queryMessageList() {
  return request({
    url: '/api/message/list',
    method: 'post',
  });
}

interface MessageStatus {
  ids: number;
}

export function setMessageStatus(data: MessageStatus) {
  return request({
    url: '/api/message/read',
    method: 'post',
    data,
  });
}

export function queryChatList() {
  return request({
    url: '/api/chat/list',
    method: 'post',
  });
}
