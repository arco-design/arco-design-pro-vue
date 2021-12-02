import Mock from 'mockjs';
import qs from 'query-string';
import setupMock, { successResponseWrap } from '@/utils/setup-mock';
// import { IPolicyParams } from '@/api/list';
import { GetParams } from '@/types/global';

const { Random } = Mock;

const data = Mock.mock({
  'list|55': [
    {
      'id|8': /[A-Z][a-z][-][0-9]/,
      'name|4-8': /[A-Z]/,
      'workflow|4': /[A-Z][a-z][-][0-9]/,
      'period': `${Random.date('m')} Min`,
      'statistic|1-4': /[1-9]/,
      'status': Random.pick(['success', 'pending', 'failed']),
      'createdTime': Random.datetime(),
      'deadline': Random.datetime(),
    },
  ],
});

setupMock({
  setup() {
    Mock.mock(new RegExp('/api/list/policy'), (params: GetParams) => {
      const { current = 1, pageSize = 10 } = qs.parseUrl(params.url).query;
      const p = current as number;
      const ps = pageSize as number;
      return successResponseWrap({
        list: data.list.slice((p - 1) * ps, p * ps),
        total: 55,
      });
    });
  },
});
