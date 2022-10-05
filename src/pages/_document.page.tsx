import React from 'react';
import { Html, Head, Main, NextScript } from 'next/document';
import Script from 'next/script';

const GOOGLE_ANALYTICS_SCRIPT = `window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${process.env.MEASUREMENT_ID}');` as const;

const Document: React.FC = () => {
  return (
    <Html lang={'ja'}>
      <Head>
        <link
          href={'/fonts/qualion-round.woff'}
          as={'font'}
          type={'font/woff'}
        />
        <link
          href={'/fonts/qualion-round-bold.woff'}
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
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.MEASUREMENT_ID}`}
          strategy={'afterInteractive'}
        />
        <Script strategy={'afterInteractive'}>{GOOGLE_ANALYTICS_SCRIPT}</Script>
      </body>
    </Html>
  );
};

export default Document;
