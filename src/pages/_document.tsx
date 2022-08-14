import { Html, Head, Main, NextScript } from 'next/document';

const Document = () => {
  return (
    <Html lang={'ja'}>
      <Head>
        <link
          rel='preload'
          href='/fonts/qualion-round.woff'
          as='font'
          type='font/woff'
          crossOrigin='anonymous'
        />
        <link
          rel='preload'
          href='/fonts/qualion-round.woff2'
          as='font'
          type='font/woff2'
          crossOrigin='anonymous'
        />
      </Head>
      <body
        className={
          'bg-white font-qualion text-font-primary-light duration-[0.4s] ease-in-out dark:bg-black dark:text-font-primary-dark '
        }
      >
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

export default Document;
