import { api } from '@src/api';
import type { GetServerSideProps } from 'next';
import type { ArticleLink } from '@src/pages/api/v1/article-links/index.api';

type Props = {
  articleLinks: Array<ArticleLink>;
};

export type PageProps = Props;

export const getServerSideProps: GetServerSideProps = async () => {
  const articleLinksGetResponse = await api.get<Array<ArticleLink>>(
    '/article-links'
  );
  if (articleLinksGetResponse instanceof Error) return null;

  const props: Props = {
    articleLinks: articleLinksGetResponse
  };

  return { props };
};
