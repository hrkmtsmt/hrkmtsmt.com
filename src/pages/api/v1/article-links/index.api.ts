import { api } from '@src/api';
import { XMLParser } from 'fast-xml-parser';
import { PATHS } from '@src/constants/paths';
import { COMMON } from '@src/constants/common';
import type { NextApiRequest, NextApiResponse } from 'next';
import type { ArticleLink, ParsedZennXML, ParsedQiitaXML } from './types';

type XMLString = string;

const handler = async (request: NextApiRequest, response: NextApiResponse) => {
  if (request.method.toLocaleLowerCase() !== 'get') {
    return response.status(405).end();
  }

  const zennXML = await api.get<XMLString>(
    PATHS.APIS.CORS_ANYWHERE.PATH + COMMON.EXTERNAL_SERVICE.ZENN.FEED
  );

  const qiitaXML = await api.get<XMLString>(
    PATHS.APIS.CORS_ANYWHERE.PATH + COMMON.EXTERNAL_SERVICE.QIITA.FEED
  );
  
  if (zennXML.isFailure() || qiitaXML.isFailure()) {
    return;
  }

  const xmlParser = new XMLParser();

  const parsedZennXML = xmlParser.parse(zennXML.value) as ParsedZennXML;
  const zennArticles = parsedZennXML.rss.channel.item.map((article) => {
    return {
      title: article.title,
      description: article.description,
      url: article.link,
      publishedAt: new Date(article.pubDate).toISOString()
    };
  });

  const parsedQiitaXML = xmlParser.parse(qiitaXML.value) as ParsedQiitaXML;
  const qiitaArticles = parsedQiitaXML.feed.entry.map((article) => {
    return {
      title: article.title,
      description: article.content,
      url: article.url,
      publishedAt: new Date(article.published).toISOString()
    };
  });

  const articles: Array<ArticleLink> = zennArticles
    .concat(qiitaArticles)
    .map((article) => {
      const _media = article.url
        .split('/')
        .find((string) => string.match(/\./))
        .split('.')
        .shift();
      const media = _media.charAt(0).toUpperCase() + _media.slice(1);
      return {
        media,
        ...article
      };
    })
    .sort((a, b) => {
      return Number(new Date(b.publishedAt)) - Number(new Date(a.publishedAt));
    });

  console.log(articles)

  response.status(200).json(articles);
  response.status(200).end();
};

export default handler;
