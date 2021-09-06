import React, { useEffect } from "react";
import { Helmet } from "../../src/components/helmet";
import { Main } from "../components/layout/main";
import { Section } from "../components/layout/section";
import { Layout } from "../components/layout/layout";

import { Grid, Full, Medium, Small } from "../components/layout/grid";
type Props = {
  intro: [];
  works: [];
};
export default function Home({ works, intro }: Props) {
  const title = "hrkmtsmt";
  const desc = "こんにちは!これは説明文です!";
  return (
    <Layout>
      <Helmet title={title} desc={desc} />
      <Main>
        <Section id={"introduction"} title={"Introduction"}>
          {intro.map((intro: any) => (
            <Medium key={intro.title}>
              <div className={"c-feature-box"}>
                <div className={"c-feature-box-emoji"}>{intro.emoji}</div>
                <h3 className={"c-feature-box-title"}>{intro.title}</h3>
                <div className={"c-feature-box-desc"}>{intro.desc}</div>
              </div>
            </Medium>
          ))}
        </Section>
      </Main>
    </Layout>
  );
}
const endpoint: any = process.env.ENDPOINT;
const key: {} = {
  headers: { "X-API-KEY": process.env.API_KEY },
};
export const getStaticProps = async () => {
  const res = await fetch(`${endpoint}home/introduction`, key);
  const data = await res.json();
  return {
    props: {
      intro: data.body,
    },
  };
};
