const API_BASE_PATH = '/api/v1' as const;

const APIS = {
  ARTICLE_LINKS: {
    NAME: 'Article Links',
    PATH: `${API_BASE_PATH}/article-links`
  },
  CORS_ANYWHERE: {
    NAME: 'CORS Anywhere',
    PATH: `${API_BASE_PATH}/cors-anywhere?endpoint=`
  },
  AUTH: {
    NAME: 'Auth',
    PATH: `${API_BASE_PATH}/auth`
  }
} as const;

const PAGES = {
  HOME: { NAME: 'Home', PATH: '/' },
  ABOUT: { NAME: 'About', PATH: '/about' }
} as const;

const ASSETS_BASE_PATH = '/assets' as const;

const ASSETS = {
  IMAGES: { NAME: 'Images', PATH: `${ASSETS_BASE_PATH}/images` },
  FONTS: { NAME: 'Fonts', PATH: `${ASSETS_BASE_PATH}/fonts` },
  FAVICON: { NAME: 'Favicon', PATH: `${ASSETS_BASE_PATH}/favicon` }
} as const;

export const PATHS = { PAGES, APIS, ASSETS } as const;
