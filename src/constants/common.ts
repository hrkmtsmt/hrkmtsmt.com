const HANDLE_NAME = 'hrkmtsmt';

export const COMMON = {
  NAME: 'Hiroki Matsumoto',
  HANDLE_NAME,
  SITE_DOMAIN: 'https://hrkmtsmt.com',
  EXTERNAL_SERVICE: {
    ZENN: {
      NAME: 'Zenn',
      URL: `https://zenn.dev/${HANDLE_NAME}`,
      FEED: `https://zenn.dev/${HANDLE_NAME}/feed`
    },
    QIITA: {
      NAME: 'Qiita',
      URL: `https://qiita.com/${HANDLE_NAME}`,
      FEED: `https://qiita.com/${HANDLE_NAME}/feed`
    },
    GITHUB: {
      NAME: 'GitHub',
      URL: `https://github.com/${HANDLE_NAME}`
    },
    TWITTER: {
      NAME: 'Twitter',
      URL: `https://twitter.com/${HANDLE_NAME}`
    },
    INSTAGRAM: {
      NAME: 'Instagram',
      URL: `https://instagram.com/${HANDLE_NAME}`
    }
  }
} as const;
