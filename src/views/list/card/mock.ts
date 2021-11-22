import Mock from 'mockjs';
// import qs from 'query-string';
import setupMock, { successResponseWrap } from '@/utils/setup-mock';
// import { IPolicyParams } from '@/api/list';
// import { IGetParams } from '@/types/global';

// const { Random } = Mock;

// const data = Mock.mock({
//   'list|55': [
//     {
//       'id|8': /[A-Z][a-z][-][0-9]/,
//       'name|4-8': /[A-Z]/,
//       'workflow|4': /[A-Z][a-z][-][0-9]/,
//       'period': `${Random.date('m')} Min`,
//       'statistic|1-4': /[1-9]/,
//       'status': Random.pick(['success', 'pending', 'failed']),
//       'createdTime': Random.datetime(),
//       'deadline': Random.datetime(),
//     },
//   ],
// });

const serviceList = [
  {
    icon: 'code',
    title: '云服务器',
    description: '灵活的服务器，带宽与存储服务。',
    enable: true,
  },
  {
    icon: 'edit',
    title: '性能测试',
    description: '灵活的服务器，带宽与存储服务。',
    enable: true,
  },
  {
    icon: 'user',
    title: '稳定性测试',
    description: '灵活的服务器，带宽与存储服务。',
    enable: true,
  },
];

const docsList = [
  {
    title: '视频点播',
    description:
      '本文档为您介绍了如何在 Ubuntu 系统以及 Apache 2 中安装字节云 SSL 证书',
  },
];

setupMock({
  setup() {
    // 获取表单数据
    Mock.mock(new RegExp('/api/list/service/recent'), () => {
      const count = 3;
      return successResponseWrap(
        new Array(count).fill(0).map((_, index) => ({
          ...serviceList[index % serviceList.length],
          id: Mock.Random.guid(),
        }))
      );
    });

    // 获取表单数据
    Mock.mock(new RegExp('/api/list/service/dev'), () => {
      const count = 9;
      return successResponseWrap(
        new Array(count).fill(0).map((_, index) => ({
          ...serviceList[index % serviceList.length],
          id: Mock.Random.guid(),
        }))
      );
    });

    // 获取表单数据
    Mock.mock(new RegExp('/api/list/docs'), () => {
      const count = 3;
      return successResponseWrap(
        new Array(count).fill(0).map((_, index) => ({
          ...docsList[index % docsList.length],
          id: Mock.Random.guid(),
        }))
      );
    });
  },
});
