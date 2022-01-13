import { debug, isExternal } from './env';

export default function tea(name?: string) {
  (window as any).collectEvent('init', {
    app_id: isExternal ? 4374 : 263440,
    channel: 'cn',
    log: true,
    autotrack: true,
  });

  (window as any).collectEvent('config', {
    _staging_flag: debug ? 1 : 0, // 是否发到测试库
    evtParams: {
      site: name || 'ArcoDesignPro-Vue',
    },
  });

  (window as any).collectEvent('start');
}
