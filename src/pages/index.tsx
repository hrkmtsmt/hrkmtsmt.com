import React, { useEffect } from "react";
import { Helmet } from "../../src/components/helmet";
import { Hero } from "../../src/components/hero";
import { Main } from "../components/layout/main";
import { Section } from "../components/layout/section";
import { Layout } from "../components/layout/layout";
import { PostCard } from "../../src/components/post-card";
import { MoreButton } from "../../src/components/more-button";
import { Universal } from "../components/layout/universal";
import { Carousel } from "../components/carousel";
import zenn from "../../src/pulic/rss.json";

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
      <Universal>
        <Hero />
      </Universal>
      <div className={"l-overflow-hidden"}>
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
          <Section id={"work"} title={"Works"}>
            <Carousel array={works} dir={"work"} endNumber={10} />
          </Section>
          <Section id={"zenn"} title={"Zenn"}>
            <Full>
              <Grid>
                {zenn.map((blog: any) => (
                  <Small key={blog.id}>
                    <PostCard title={blog.title} path={blog.link} />
                  </Small>
                ))}
              </Grid>
            </Full>
            <Full>
              <MoreButton
                link={"https://zenn.dev/hrkmtsmt"}
                cta={"View Zenn"}
              />
            </Full>
          </Section>
        </Main>
      </div>
    </Layout>
  );
}
const endpoint: any = process.env.ENDPOINT;
const key: {} = {
  headers: { "X-API-KEY": process.env.API_KEY },
};
export const getStaticProps = async () => {
  const res = [
    await fetch(`${endpoint}work`, key),
    await fetch(`${endpoint}home/introduction`, key),
  ];
  const data = [await res[0].json(), await res[1].json()];
  return {
    props: {
      works: data[0].contents,
      intro: data[1].body,
    },
  };
};
