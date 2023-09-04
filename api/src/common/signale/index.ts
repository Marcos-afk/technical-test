import { Signale } from 'signale';

const log = new Signale();

export const signaleLog = (
  scope: string,
  message: string,
  type: keyof Signale,
) => {
  return log.scope(scope)[type](message);
};
