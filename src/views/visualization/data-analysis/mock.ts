import Mock from 'mockjs';
import qs from 'query-string';
import setupMock, { successResponseWrap } from '@/utils/setup-mock';
import { IGetParams } from '@/types/global';

setupMock({
  setup() {
    Mock.mock(new RegExp('/api/report-stuck-rate'), () => {
      const getLineData = (name: string) => {
        return new Array(12).fill(0).map((_item, index) => ({
          x: `${index * 2}时`,
          y: Mock.Random.natural(0, 100),
          name,
        }));
      };
      return successResponseWrap([
        ...getLineData('A类型'),
        ...getLineData('B类型'),
      ]);
    });

    Mock.mock(new RegExp('/api/feedback/list'), (params: IGetParams) => {
      const { page = 1, pageSize = 10 } = qs.parseUrl(params.url)
        .query as unknown as {
        page: number;
        pageSize: number;
        roomNumber: string;
        startTime: string;
        endTime: string;
      };
      const total = 55;
      const start = (page - 1) * pageSize;
      const end = Math.min(start + +pageSize, total);
      const res = Mock.mock({
        [`list|${end - start}`]: [
          {
            'id|16': /[A-Z][a-z][-][0-9]/,
            'userId|10': /[0-9]/,
            'deviceId|10': /[0-9]/,
            'system': '@pick(["IOS", "Window", "Android"])',
            'content': '@cparagraph(1)',
            'time': '@datetime()',
          },
        ],
      });

      return successResponseWrap({
        ...res,
        total,
      });
    });
  },
});
