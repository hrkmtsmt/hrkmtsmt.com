import React from 'react';
import { NextSeo } from 'next-seo';
import { baseURL } from '@src/utilities/baseURL';
import { COMMON } from '@src/constants/common';

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
  const pageTitle = `${props.title} | ${COMMON.NAME}`;
  const pageUrl = props.pagePath ? baseURL() + props.pagePath : baseURL();

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
        site_name: COMMON.NAME
      }}
      twitter={{
        site: COMMON.EXTERNAL_SERVICE.TWITTER.URL,
        handle: `@${COMMON.HANDLE_NAME}`,
        cardType: 'summary_large_image'
      }}
    />
  );
};

export const DynamicHead = React.memo(Component);
