import { NextApiRequest, NextApiResponse } from 'next';
import Parser from 'rss-parser';
import type { Item } from 'rss-parser';

export type ArticleLink = {
  title: string;
  url: string;
  updatedAt: string;
};

const handler = async (request: NextApiRequest, response: NextApiResponse) => {
  if (request.method.toLocaleLowerCase() !== 'get') {
    return response.status(405).end();
  }
  const parser = new Parser();

  const result = await parser.parseURL(
    `${process.env.API_BASE_URL}/cors-anywhere?endpoint=https://zenn.dev/hrkmtsmt/feed`
  );

  const articleLinks: Array<ArticleLink> = result.items.map((item: Item) => {
    return {
      title: item.title,
      url: item.link,
      updatedAt: item.isoDate
    };
  });
  response.status(200).json(articleLinks);
};

export default handler;
