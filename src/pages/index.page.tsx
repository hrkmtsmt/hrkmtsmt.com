import React from 'react';
import { TemplateLayout } from '@src/components/Layout';
import { Grid } from '@src/components/Grid';
import { PostCard } from '@src/components/PostCard';
import { Section } from '@src/components/Section';
import { getServerSideProps } from './index.logic';
import type { NextPage } from 'next';
import type { PageProps } from './index.logic';

const Page: NextPage<PageProps> = (props) => {
  if (!props.articleLinks) return <React.Fragment />;

  return (
    <TemplateLayout
      mainContent={
        <Section title={'My Articles'}>
          <Grid>
            {props.articleLinks.map((articleLink) => {
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
      }
    />
  );
};

export { getServerSideProps };

export default Page;
