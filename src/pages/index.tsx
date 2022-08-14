import React from 'react';
import { GitHub, Instagram, Twitter } from 'react-feather';
import { Layout } from '@src/components/Layout';
import { Grid } from '@src/components/Grid';
import { PostCard } from '@src/components/PostCard';
import { Section } from '@src/components/Section';
import { useFetchArticleLinksFromRSS } from '@src/hooks/useFetchArticleLinksFromRSS';
import type { HeaderProps } from '@src/components/Header';
import type { FooterProps } from '@src/components/Footer';

const Index = () => {
  const { articleLinks } = useFetchArticleLinksFromRSS();

  const headerMenus: HeaderProps['headerMenus'] = [
    {
      name: 'About',
      link: '/about'
    }
  ];

  const socialLinks: FooterProps['socialLinks'] = [
    {
      name: 'github',
      link: 'https://github.com/hrkmtsmt',
      children: <GitHub size={16} strokeWidth={2.4} />
    },
    {
      name: 'twitter',
      link: 'https://twitter.com/hrkmtsmt',
      children: <Twitter size={16} strokeWidth={2.4} />
    },
    {
      name: 'instagram',
      link: 'https://instagram.com/hrkmtsmt',
      children: <Instagram size={16} strokeWidth={2.4} />
    }
  ];

  return (
    <Layout
      headerMenus={headerMenus}
      mainContent={
        <Section title={'Articles'}>
          <Grid>
            {articleLinks.map((articleLink) => {
              return (
                <Grid.Column key={articleLink.link} size={'medium'}>
                  <PostCard
                    tag={'Zenn'}
                    title={articleLink.title}
                    href={articleLink.link}
                  />
                </Grid.Column>
              );
            })}
          </Grid>
        </Section>
      }
      socialLinks={socialLinks}
      copyright={'hrkmtsmt'}
    />
  );
};

export default Index;
