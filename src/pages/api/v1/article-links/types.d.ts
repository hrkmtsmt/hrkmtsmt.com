export type ArticleLink = {
  media: string;
  title: string;
  url: string;
  publishedAt: string;
};

export type ParsedZennXML = {
  rss: {
    channel: {
      item: Array<{
        title: string;
        description: string;
        link: string;
        pubDate: string;
      }>;
    };
  };
};

export type ParsedQiitaXML = {
  feed: {
    entry: Array<{
      title: string;
      content: string;
      url: string;
      published: string;
    }>;
  };
};
