export interface IAnyObject {
  [key: string]: unknown;
}

export interface IOptions {
  value: unknown;
  label: string;
}

export interface IGetParams {
  body: null;
  type: string;
  url: string;
}
