import React from 'react';
import { Html, Head, Main, NextScript } from 'next/document';
import Script from 'next/script';
import { PATHS } from '@src/constants/paths';

const GOOGLE_ANALYTICS_SCRIPT = `window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${process.env.GOOGLE_ANALYTICS_MEASUREMENT_ID}');` as const;

const Document: React.FC = () => {
  return (
    <Html lang={'ja'}>
      <Head>
        <link
          rel={'icon'}
          type={'image/svg+xml'}
          sizes={'32x32'}
          href={`${PATHS.ASSETS.FAVICON.PATH}/logo.svg`}
        />
        <link
          href={`${PATHS.ASSETS.FONTS.PATH}/qualion-round.woff`}
          as={'font'}
          type={'font/woff'}
        />
        <link
          href={`${PATHS.ASSETS.FONTS.PATH}/qualion-round-bold.woff`}
          as={'font'}
          type={'font/woff'}
        />
      </Head>
      <body
        className={
          'bg-white font-qualion-regular text-font-primary-light duration-[0.4s] ease-in-out dark:bg-black dark:text-font-primary-dark '
        }
      >
        <Main />
        <NextScript />
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.GOOGLE_ANALYTICS_MEASUREMENT_ID}`}
          strategy={'afterInteractive'}
        />
        <Script strategy={'afterInteractive'}>{GOOGLE_ANALYTICS_SCRIPT}</Script>
      </body>
    </Html>
  );
};

export default Document;
