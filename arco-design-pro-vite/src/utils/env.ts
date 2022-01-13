export const debug = process.env.NODE_ENV !== 'production';

export const isExternal =
  // eslint-disable-next-line no-restricted-globals
  location.host === (window as any).arcoConfig?.externalHostName;
