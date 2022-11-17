import { api } from '@src/api';
import { APIS } from '@src/constants/apis';
import type { GetServerSideProps } from 'next';
import type { ArticleLink } from '@src/pages/api/v1/article-links/types';

type Props = {
  articleLinks: Array<ArticleLink>;
};

export type PageProps = Props;

export const getServerSideProps: GetServerSideProps = async () => {
  const articleLinksGetResponse = await api.get<Array<ArticleLink>>(
    APIS.ARTICLE_LINKS
  );
  if (articleLinksGetResponse instanceof Error) return null;

  const props: Props = {
    articleLinks: articleLinksGetResponse
  };

  return { props };
};
