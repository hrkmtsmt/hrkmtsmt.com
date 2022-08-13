import { Html, Head, Main, NextScript } from 'next/document';

const Document = () => {
  return (
    <Html lang={'ja'}>
      <Head />
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
