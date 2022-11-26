import { COMMON } from '@src/constants/common';

export const baseURL = () => {
  if (process.env.APP_ENV === 'production') {
    return COMMON.SITE_URL.PRODUCTION;
  }
  if (process.env.APP_ENV === 'development') {
    return process.env.DEVELOPMENT_URL;
  }
  return COMMON.SITE_URL.LOCAL;
};
