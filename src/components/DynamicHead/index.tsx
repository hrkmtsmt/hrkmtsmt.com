import React from 'react';
import { NextSeo } from 'next-seo';

type Props = {
  title: string;
  description: string;
  pagePath?: string;
  ogpImage: {
    url: string;
    width: number;
    height: number;
  };
};

const Component: React.FC<Props> = (props) => {
  const siteName = process.env.MY_ID;
  const pageTitle = `${props.title} | ${siteName}`;
  const pageUrl = props.pagePath
    ? process.env.DOMAIN + props.pagePath
    : process.env.DOMAIN;

  return (
    <NextSeo
      title={pageTitle}
      description={props.description}
      canonical={pageUrl}
      openGraph={{
        url: pageUrl,
        title: pageTitle,
        description: props.description,
        images: [props.ogpImage],
        site_name: siteName
      }}
      twitter={{
        site: `https://twitter.com/${process.env.MY_ID}`,
        handle: `@${process.env.MY_ID}`,
        cardType: 'summary_large_image'
      }}
    />
  );
};

export const DynamicHead = React.memo(Component);
