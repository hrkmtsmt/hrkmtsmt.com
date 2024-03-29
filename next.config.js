/** @type {import('next').NextConfig} */

const nextConfig = {
  env: {
    APP_ENV: process.env.APP_ENV,
    DEVELOPMENT_URL: process.env.DEVELOPMENT_URL,
    GOOGLE_ANALYTICS_MEASUREMENT_ID:
      process.env.GOOGLE_ANALYTICS_MEASUREMENT_ID,
    BASIC_AUTH_USER: process.env.BASIC_AUTH_USER,
    BASIC_AUTH_PASSWORD: process.env.BASIC_AUTH_PASSWORD
  },
  pageExtensions: [
    'page.tsx',
    'page.ts',
    'page.jsx',
    'page.js',
    'api.tsx',
    'api.ts',
    'api.jsx',
    'api.js'
  ]
};

module.exports = nextConfig;
