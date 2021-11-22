//
export const installFilter = (app) => {
  app.config.globalProperties.$filters = {
    currencyUSD(value: string | number) {
      return `$${value}`;
    },
  };
};
