import React from "react";
import { Helmet } from "../components/Helmet";
import { Main } from "../components/layout/Main";
import { Section } from "../components/layout/Section";
import { Layout } from "../components/layout/Layout";
import { Medium } from "../components/layout/Grid";
import { ENDPOINT, API_KEY } from "../config/environment-variable";
type Props = {
  intro: [];
};
export default function About({ intro }: Props) {
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

export const getStaticProps = async () => {
  const res = await fetch(`${ENDPOINT}home/introduction`, API_KEY);
  const data = await res.json();
  return {
    props: {
      intro: data.body,
    },
  };
};
