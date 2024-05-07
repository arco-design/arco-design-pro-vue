export const debug = import.meta.env.MODE !== 'production';

// eslint-disable-next-line import/prefer-default-export
export const isExternal =
  // eslint-disable-next-line no-restricted-globals
  location.host === (window as any).arcoConfig?.externalHostName;
