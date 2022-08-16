import { Html, Head, Main, NextScript } from 'next/document';

const Document = () => {
  return (
    <Html lang={'ja'}>
      <Head>
        <link
          href={'/fonts/qualion-round.woff'}
          rel={'preload'}
          as={'font'}
          type={'font/woff'}
        />
        <link
          href={'/fonts/qualion-round-bold.woff'}
          rel={'preload'}
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
      </body>
    </Html>
  );
};

export default Document;
