import { createI18n } from 'vue-i18n';
import en from './en-US';
import cn from './zh-CN';

const i18n = createI18n({
  locale: 'cn',
  fallbackLocale: 'en',
  messages: {
    en,
    cn,
  },
});

export default i18n;
