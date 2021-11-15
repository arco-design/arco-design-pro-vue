import Mock from 'mockjs';
import setupMock from '@/utils/setup-mock';
// import { ILoginData } from '@/api/user';
import { IMockParams } from '@/types/mock';
import { isLogin } from '@/utils/auth';

setupMock({
  setup() {
    // Mock.XHR.prototype.withCredentials = true;

    // 用户信息
    Mock.mock(new RegExp('/api/user/info'), () => {
      if (isLogin()) {
        return {
          status: 'ok',
          data: {
            name: '王立群',
            avatar:
              'https://lf1-xgcdn-tos.pstatp.com/obj/vcloud/vadmin/start.8e0e4855ee346a46ccff8ff3e24db27b.png',
            email: 'wangliqun@email.com',
            job: 'frontend',
            jobName: '前端艺术家',
            organization: 'Frontend',
            organizationName: '前端',
            location: 'beijing',
            locationName: '北京',
            introduction: '人潇洒，性温存',
            personalWebsite: 'https://www.arco.design',
          },
          code: 20000,
          msg: '请求成功',
        };
      }
      return {
        status: 'error',
        msg: '未登录',
        code: 50008,
      };
    });

    // 登录
    Mock.mock(new RegExp('/api/user/login'), (params: IMockParams) => {
      const { username, password } = JSON.parse(params.body);
      if (!username) {
        return {
          status: 'error',
          msg: '用户名不能为空',
          code: 50000,
        };
      }
      if (!password) {
        return {
          status: 'error',
          msg: '密码不能为空',
          code: 50000,
        };
      }
      if (username === 'admin' && password === 'admin') {
        return {
          status: 'ok',
          data: {
            token: '12345',
          },
          code: 20000,
          msg: '请求成功',
        };
      }
      return {
        status: 'error',
        msg: '账号或者密码错误',
        code: 50000,
      };
    });
    // 登录
    Mock.mock(new RegExp('/api/user/logout'), () => {
      return {
        status: 'ok',
        msg: '成功',
        code: 20000,
      };
    });
  },
});
