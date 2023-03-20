import { api } from '@src/api';
import { PATHS } from '@src/constants/paths';
import type { GetServerSideProps } from 'next';
import type { ArticleLink } from '@src/pages/api/v1/article-links/types';

type Props = {
  articleLinks: Array<ArticleLink>;
};

export type PageProps = Props;

export const getServerSideProps: GetServerSideProps = async () => {
  const articleLinksGetResponse = await api.get<Array<ArticleLink>>(
    PATHS.APIS.ARTICLE_LINKS.PATH
  );
  if (articleLinksGetResponse instanceof Error) return null;

  const props: Props = {
    articleLinks: articleLinksGetResponse.value
  };

  return { props };
};
