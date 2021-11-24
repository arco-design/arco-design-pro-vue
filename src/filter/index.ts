import { App } from 'vue';

// Global Filters

export const installFilter = (app: App) => {
  app.config.globalProperties.$filters = {
    currencyUSD(value: string | number) {
      return `$${value}`;
    },
  };
};
