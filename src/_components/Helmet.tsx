import React from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';

type Props = {
  title?: string;
  desc?: string;
  image?: string;
};

export const Helmet = (props: Props) => {
  const router = useRouter();
  const path = router.asPath;
  const ogType = () => {
    if (path === '/') {
      return 'website';
    } else {
      return 'article';
    }
  };
  return (
    <Head>
      <meta name='viewport' content='width=device-width, initial-scale=1.0' />
      <title key={props.title}>{props.title}</title>
      <link
        rel='icon'
        type='image/svg+xml'
        href='/Users/hrkmtsmt/Projects/hrkmtsmt/src/pulic/favicon.svg'
      />
      <meta property='og:title' content={props.title} />
      <meta property='og:description' content={props.desc} />
      <meta property='og:image' content={props.image} />
      <meta property='og:url' content={path} />
      <meta property='og:type' content={ogType()} />
      <meta property='og:locale' content='ja_JP' />
      <meta name='twitter:card' content='summary_large_image' />
      <meta name='twitter:site' content='@hrkmtsmt' />

      <meta property='og:site_name' content='hrkmtsmt' />
      <meta property='fb:app_id' content='189027196570007' />
    </Head>
  );
};
