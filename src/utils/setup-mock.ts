export default (config: { mock?: boolean; setup: () => void }) => {
  const { mock = process.env.NODE_ENV === 'development', setup } = config;
  if (mock === false) return;
  setup();
};

export const successResponseWrap = (data: any) => {
  return {
    data,
    status: 'ok',
    msg: '请求成功',
    code: 20000,
  };
};

export const failResponseWrap = (data: any, code = 50000, msg: string) => {
  return {
    data,
    status: 'fail',
    msg,
    code,
  };
};
