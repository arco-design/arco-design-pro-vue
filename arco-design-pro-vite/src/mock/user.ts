import Mock from 'mockjs';
import setupMock, {
  successResponseWrap,
  failResponseWrap,
} from '@/utils/setup-mock';

import { MockParams } from '@/types/mock';
import { isLogin } from '@/utils/auth';

setupMock({
  setup() {
    // Mock.XHR.prototype.withCredentials = true;

    // 用户信息
    Mock.mock(new RegExp('/api/user/info'), () => {
      if (isLogin()) {
        return successResponseWrap({
          name: '王立群',
          avatar:
            '//p3-armor.byteimg.com/tos-cn-i-49unhts6dw/9448405f941c4f61426565bca8acb24e.png~tplv-49unhts6dw-image.image',
          email: 'wangliqun@email.com',
          job: 'frontend',
          jobName: '前端艺术家',
          organization: 'Frontend',
          organizationName: '前端',
          location: 'beijing',
          locationName: '北京',
          introduction: '人潇洒，性温存',
          personalWebsite: 'https://www.arco.design',
          phone: '150****0000',
          registrationDate: '2013-05-10 12:10:00',
          accountId: '15012312300',
          certification: 1,
        });
      }
      return failResponseWrap(null, 50008, '未登录');
    });

    // 登录
    Mock.mock(new RegExp('/api/user/login'), (params: MockParams) => {
      const { username, password } = JSON.parse(params.body);
      if (!username) {
        return failResponseWrap(null, 50000, '用户名不能为空');
      }
      if (!password) {
        return failResponseWrap(null, 50000, '密码不能为空');
      }
      if (username === 'admin' && password === 'admin') {
        return successResponseWrap({
          token: '12345',
        });
      }
      return failResponseWrap(null, 50000, '账号或者密码错误');
    });
    // 登出
    Mock.mock(new RegExp('/api/user/logout'), () => {
      return successResponseWrap(null);
    });
  },
});
