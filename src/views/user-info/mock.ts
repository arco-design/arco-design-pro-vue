import Mock from 'mockjs';
import setupMock from '@/utils/setup-mock';

setupMock({
  setup() {
    // 最新项目
    Mock.mock(new RegExp('/api/user/latestProjectList'), () => {
      const contributors = [
        {
          name: '秦臻宇',
          email: 'qingzhenyu@arco.design',
          avatar:
            '//p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/a8c8cdb109cb051163646151a4a5083b.png~tplv-uwbnlip3yd-webp.webp',
        },
        {
          name: '于涛',
          email: 'yuebao@arco.design',
          avatar:
            '//p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/a8c8cdb109cb051163646151a4a5083b.png~tplv-uwbnlip3yd-webp.webp',
        },
        {
          name: '宁波',
          email: 'ningbo@arco.design',
          avatar:
            '//p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/3ee5f13fb09879ecb5185e440cef6eb9.png~tplv-uwbnlip3yd-webp.webp',
        },
        {
          name: '郑曦月',
          email: 'zhengxiyue@arco.design',
          avatar:
            '//p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/8361eeb82904210b4f55fab888fe8416.png~tplv-uwbnlip3yd-webp.webp',
        },
        {
          name: '宁波',
          email: 'ningbo@arco.design',
          avatar:
            '//p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/3ee5f13fb09879ecb5185e440cef6eb9.png~tplv-uwbnlip3yd-webp.webp',
        },
      ];
      return new Array(3).fill(null).map((_item, index) => ({
        id: index,
        name: 'Arco Design System',
        description: '企业级产品设计系统',
        contributors,
      }));
    });

    // 最新动态
    Mock.mock(new RegExp('/api/user/latestActivity'), () => {
      return new Array(7).fill(null).map((_item, index) => ({
        id: index,
        title: '发布了项目 Arco Design System',
        description: '企业级产品设计系统',
        avatar:
          '//p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/a8c8cdb109cb051163646151a4a5083b.png~tplv-uwbnlip3yd-webp.webp',
      }));
    });

    // 访问量
    Mock.mock(new RegExp('/api/user/visits'), () => {
      return [
        {
          name: '主页访问量',
          visits: 5670,
          growth: 206.32,
        },
        {
          name: '项目访问量',
          visits: 5670,
          growth: 206.32,
        },
      ];
    });

    // 项目和团队列表
    Mock.mock(new RegExp('/api/user/projectAndTeamList'), () => {
      return [
        {
          id: 1,
          content: '他创建的项目',
        },
        {
          id: 2,
          content: '他参与的项目',
        },
        {
          id: 3,
          content: '他创建的团队',
        },
        {
          id: 4,
          content: '他加入的团队',
        },
      ];
    });
  },
});
