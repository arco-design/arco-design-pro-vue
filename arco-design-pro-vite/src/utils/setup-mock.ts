export default ({ mock, setup }: { mock?: boolean; setup: () => void }) => {
  setup();
};

export const successResponseWrap = (data: unknown) => {
  return {
    data,
    status: 'ok',
    msg: '请求成功',
    code: 20000,
  };
};

export const failResponseWrap = (data: unknown, code = 50000, msg: string) => {
  return {
    data,
    status: 'fail',
    msg,
    code,
  };
};
