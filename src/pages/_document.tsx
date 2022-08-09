import { Html, Head, Main, NextScript } from 'next/document';

const Document = () => {
  return (
    <Html lang={'ja'}>
      <Head />
      <body
        className={
          'font-qualion ease-in-out duration-[0.4s] bg-base text-black dark:text-white dark:bg-black'
        }
      >
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

export default Document;
