import Mock from 'mockjs';
import setupMock, { successResponseWrap } from '@/utils/setup-mock';

setupMock({
  setup() {
    Mock.mock(new RegExp('/api/profile/basic'), () => {
      return successResponseWrap({
        status: 2,
        video: {
          mode: '自定义',
          acquisition: {
            resolution: '720*1280',
            frameRate: 15,
          },
          encoding: {
            resolution: '720*1280',
            rate: {
              min: 300,
              max: 800,
              default: 1500,
            },
            frameRate: 15,
            profile: 'high',
          },
        },
        audio: {
          mode: '自定义',
          acquisition: {
            channels: 8,
          },
          encoding: {
            channels: 8,
            rate: 128,
            profile: 'ACC-LC',
          },
        },
      });
    });
  },
});
