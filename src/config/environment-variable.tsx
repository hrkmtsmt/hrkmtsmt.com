export const ENDPOINT: string | undefined = process.env.ENDPOINT;
export const API_KEY: {} = {
  headers: { 'X-MICROCMS-API-KEY': process.env.API_KEY },
};
