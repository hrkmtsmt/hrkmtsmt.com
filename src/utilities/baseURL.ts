import { COMMON } from '@src/constants/common';

export const baseURL = () => {
  if (process.env.NODE_ENV === 'production') {
    return COMMON.SITE_URL.PRODUCTION;
  }
  return COMMON.SITE_URL.DEVELOPMENT;
};
