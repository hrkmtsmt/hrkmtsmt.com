import { api } from '@src/api';
import convert from 'xml-js';
import type { NextApiRequest, NextApiResponse } from 'next';

export type ArticleLink = {
  media: string;
  title: string;
  url: string;
  publishedAt: string;
};

type ZennRSS = {
  rss: {
    link: { _text: string };
    generator: { _text: string };
    channel: {
      item: Array<{
        title: { _cdata: string };
        link: { _text: string };
        pubDate: { _text: string };
      }>;
    };
  };
};

type QiitaRSS = {
  _declaration: { id: { _text: string } };
  feed: {
    link: { a: { _text: string } };
    entry: [
      {
        title: { _text: string };
        url: { _text: string };
        published: { _text: string };
      }
    ];
  };
};

const handler = async (request: NextApiRequest, response: NextApiResponse) => {
  if (request.method.toLocaleLowerCase() !== 'get') {
    return response.status(405).end();
  }

  const zennXml = await api.get<string>(
    '/cors-anywhere?endpoint=https://zenn.dev/hrkmtsmt/feed'
  );

  const qiitaXml = await api.get<string>(
    '/cors-anywhere?endpoint=https://qiita.com/hrkmtsmt/feed'
  );

  if (zennXml instanceof Error || qiitaXml instanceof Error) return;

  const zennRSS = convert.xml2js(zennXml, {
    compact: true
  }) as ZennRSS;

  const zennArticleLinks: Array<ArticleLink> = zennRSS.rss.channel.item.map(
    (item) => {
      return {
        media: 'Zenn',
        title: item.title._cdata,
        url: item.link._text,
        publishedAt: item.pubDate._text
      };
    }
  );

  const qiitaRSS = convert.xml2js(qiitaXml, {
    compact: true
  }) as QiitaRSS;

  const qiitaArticleLinks: Array<ArticleLink> = qiitaRSS.feed.entry.map(
    (item) => {
      return {
        media: 'Qiita',
        title: item.title._text,
        url: item.url._text,
        publishedAt: item.published._text
      };
    }
  );

  const articleLinks = zennArticleLinks
    .concat(qiitaArticleLinks)
    .sort((a, b) => {
      return Number(new Date(b.publishedAt)) - Number(new Date(a.publishedAt));
    });

  response.status(200).json(articleLinks);
};

export default handler;
