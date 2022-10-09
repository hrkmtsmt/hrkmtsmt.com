import React from 'react';
import { TemplateLayout } from '@src/components/Layout';
import { Grid } from '@src/components/Grid';
import { PostCard } from '@src/components/PostCard';
import { Section } from '@src/components/Section';
import { getServerSideProps } from './index.logic';
import type { NextPage } from 'next';
import type { PageProps } from './index.logic';
import { DynamicHead } from '@src/components/DynamicHead';

const Page: NextPage<PageProps> = (props) => {
  const ogpImage = {
    url: '/image/ogp-image.png',
    width: 1200,
    height: 628
  };

  if (!props.articleLinks) return <React.Fragment />;

  return (
    <React.Fragment>
      <DynamicHead
        title={'Frontend Engineer'}
        description={"I'm hrkmtsmt!"}
        ogpImage={ogpImage}
      />
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
    </React.Fragment>
  );
};

export { getServerSideProps };

export default Page;
