import { useState, useEffect, useCallback } from 'react';
import Parser from 'rss-parser';

type Item = {
  title: string;
  link: string;
  creator: string;
  isoDate: string;
};

export const useFetchArticleLinksFromRSS = () => {
  const [articleLinks, setArticleLinks] = useState<Array<Item>>([]);
  const parser = new Parser();

  useEffect(() => {
    (async () => {
      const CORS_PROXY = '/api?endpoint=' as const;
      const url = 'https://zenn.dev/hrkmtsmt/feed';
      await parser.parseURL(CORS_PROXY + url, (error, feed) => {
        if (error) throw error;
        const results = feed.items.map((item) => {
          return {
            title: item.title,
            link: item.link,
            creator: item.creator,
            isoDate: item.isoDate
          };
        });
        setArticleLinks(results);
      });
    })();
  }, []);

  return { articleLinks };
};
