import Mock from 'mockjs';
import setupMock, { successResponseWrap } from '@/utils/setup-mock';

setupMock({
  setup() {
    // 保存个人信息
    Mock.mock(new RegExp('/api/user/save-info'), () => {
      return successResponseWrap('ok');
    });
  },
});
