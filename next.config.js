/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    MY_ID: process.env.MY_ID,
    API_BASE_URL: process.env.API_BASE_URL,
    MEASUREMENT_ID: process.env.MEASUREMENT_ID
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
