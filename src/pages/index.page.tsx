import React from 'react';
import useSWR from 'swr';
import { TemplateLayout } from '@src/components/Layout';
import { Grid } from '@src/components/Grid';
import { PostCard } from '@src/components/PostCard';
import { Section } from '@src/components/Section';
import { Hero } from '@src/components/Hero';
import { DynamicHead } from '@src/components/DynamicHead';
import { api } from '@src/api';
import { COMMON } from '@src/constants/common';
import { PATHS } from '@src/constants/paths';
import type { NextPage } from 'next';
import type { PageProps } from './index.logic';
import type { ArticleLink } from '@src/pages/api/v1/article-links/types';

const Page: NextPage<PageProps> = () => {
  const ogpImage = {
    url: `${
      COMMON.SITE_URL.PRODUCTION + PATHS.ASSETS.IMAGES.URL
    }/ogp-image.png`,
    width: 1200,
    height: 628
  };

  const { data } = useSWR(PATHS.APIS.ARTICLE_LINKS.URL, api.get);

  const articleLinks = data as Array<ArticleLink>;

  if (!data || data instanceof Error) return <React.Fragment />;

  return (
    <React.Fragment>
      <DynamicHead
        title={'Frontend Engineer'}
        description={`I'm ${COMMON.NAME}!`}
        ogpImage={ogpImage}
      />
      <TemplateLayout
        mainContent={
          <React.Fragment>
            <Section>
              <Hero />
            </Section>
            <Section title={'My Articles'}>
              <Grid>
                {articleLinks.map((articleLink) => {
                  return (
                    <Grid.Column key={articleLink.url} size={'medium'}>
                      <PostCard
                        tag={articleLink.media}
                        title={articleLink.title}
                        href={articleLink.url}
                      />
                    </Grid.Column>
                  );
                })}
              </Grid>
            </Section>
          </React.Fragment>
        }
      />
    </React.Fragment>
  );
};

export default Page;
