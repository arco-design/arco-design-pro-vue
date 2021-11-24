import Mock from 'mockjs';
import qs from 'query-string';
import setupMock, { successResponseWrap } from '@/utils/setup-mock';
import { Options, GetParams } from '@/types/global';

setupMock({
  setup() {
    // 获取表单数据
    Mock.mock(new RegExp('/api/step-form'), () => {
      return successResponseWrap({
        name: 'arco.design',
        purpose: 'Arco Design 官网',
        cluster: 'inner_develop_cluster',
        type: 'web',
        dns: true,
        subDomain: true,
        psm: 'arco.tlb.site',
        strategy: 'all',
      });
    });

    // 保存表单数据
    Mock.mock(new RegExp('/api/domain/apply'), () => {
      return successResponseWrap(true);
    });

    // 业务集群数据
    Mock.mock(new RegExp('/api/cluster/list'), () => {
      return successResponseWrap([
        {
          value: 'inner_develop_cluster',
          label: '内网研发业务集群',
        },
        {
          value: 'toutiao',
          label: '头条产品服务',
          children: [
            {
              value: 'toutiao_cluster_1',
              label: '头条业务集群1',
            },
            {
              value: 'toutiao_cluster_2',
              label: '头条业务集群2',
            },
          ],
        },
        {
          value: 'other',
          label: '其他产品服务',
          children: [
            {
              value: 'internal_cluster_1',
              label: '国内产品业务集群',
            },
            {
              value: 'foreign_cluster_1',
              label: '国外产品业务集群',
            },
          ],
        },
      ]);
    });

    // 线路
    Mock.mock(new RegExp('/api/line/list'), (params: GetParams) => {
      const { cluster } = qs.parseUrl(params.url).query;
      let res: Options[] = [];
      if (cluster) {
        res = [
          {
            value: `${cluster}_single`,
            label: `${cluster}-单机房`,
          },
          {
            value: `${cluster}_view`,
            label: `${cluster}-多机房`,
          },
        ];
      }
      return successResponseWrap(res);
    });
  },
});
