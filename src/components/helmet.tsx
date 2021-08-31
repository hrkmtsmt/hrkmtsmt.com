import React from "react";
import Head from "next/head";
import { useRouter } from "next/router";
type Props = {
  title: string | undefined;
  desc: string | undefined;
  image: string | undefined;
};
export const Helmet = (props: Props) => {
  const router = useRouter();
  const path = router.asPath;
  const ogType = () => {
    if (path === "/") {
      return "website";
    } else {
      return "article";
    }
  };
  return (
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title key={props.title}>{props.title}</title>
      <link
        rel="icon"
        href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text x=%2250%%22 y=%2250%%22 style=%22dominant-baseline:central;text-anchor:middle;font-size:90px;%22>😸</text></svg>"
      ></link>
      <meta property="og:title" content={props.title} />
      <meta property="og:description" content={props.desc} />
      <meta property="og:image" content={props.image} />
      <meta property="og:url" content={path} />
      <meta property="og:type" content={ogType()} />
      <meta property="og:locale" content="ja_JP" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@hrkmtsmt" />
      <meta property="og:site_name" content="hrkmtsmt" />
      <meta property="fb:app_id" content="189027196570007" />
    </Head>
  );
};
