/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    API_BASE_URL: process.env.API_BASE_URL
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
