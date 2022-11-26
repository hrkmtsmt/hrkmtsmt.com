const API_BASE_PATH = '/api/v1' as const;

const APIS = {
  ARTICLE_LINKS: {
    NAME: 'Article Links',
    URL: `${API_BASE_PATH}/article-links`
  },
  CORS_ANYWHERE: {
    NAME: 'CORS Anywhere',
    URL: `${API_BASE_PATH}/cors-anywhere?endpoint=`
  },
  AUTH: {
    NAME: 'Auth',
    URL: `${API_BASE_PATH}/auth`
  }
} as const;

const PAGES = {
  HOME: { NAME: 'Home', URL: '/' },
  ABOUT: { NAME: 'About', URL: '/about' }
} as const;

export const PATHS = { PAGES, APIS } as const;
