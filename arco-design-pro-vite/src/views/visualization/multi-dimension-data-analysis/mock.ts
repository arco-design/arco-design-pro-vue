import Mock from 'mockjs';
import qs from 'query-string';
import setupMock, { successResponseWrap } from '@/utils/setup-mock';
import { GetParams } from '@/types/global';
import { DownloadHistoryParams } from '@/api/visualization';

setupMock({
  setup() {
    Mock.mock(new RegExp('/api/data-chain-growth'), () => {
      const year = new Date().getFullYear();
      const getLineData = (name: number) => {
        return new Array(12).fill(0).map((_item, index) => ({
          x: `${index + 1}月`,
          y: Mock.Random.natural(0, 100),
          name: String(name),
        }));
      };
      return successResponseWrap({
        count: 5670,
        growth: 206.32,
        chartData: [...getLineData(year), ...getLineData(year - 1)],
      });
    });

    Mock.mock(new RegExp('/api/download-history'), (params: GetParams) => {
      const { showCompetitor } = qs.parseUrl(params.url)
        .query as unknown as DownloadHistoryParams;
      const year = new Date().getFullYear();
      const getLineData = (name: string) => {
        return new Array(12).fill(0).map((_item, index) => ({
          x: `${year}/${index + 1}`,
          y: Mock.Random.natural(0, 75) * 1000,
          name,
        }));
      };
      const chartData = [...getLineData('开发者'), ...getLineData('设计师')];
      if (showCompetitor === 'true') {
        chartData.push(
          ...getLineData('竞品-开发者'),
          ...getLineData('竞品-设计师')
        );
      }
      return successResponseWrap(chartData);
    });
  },
});
