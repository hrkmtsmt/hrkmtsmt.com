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

const ASSETS_BASE_PATH = '/assets' as const;

const ASSETS = {
  IMAGES: { NAME: 'Images', URL: `${ASSETS_BASE_PATH}/images` },
  FONTS: { NAME: 'Fonts', URL: `${ASSETS_BASE_PATH}/fonts` },
  FAVICON: { NAME: 'Favicon', URL: `${ASSETS_BASE_PATH}/favicon` }
} as const;

export const PATHS = { PAGES, APIS, ASSETS } as const;
