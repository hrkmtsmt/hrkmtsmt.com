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
import { Grid, Full, Small } from "../components/layout/grid";
import zenn from "../../rss/data.json";
type Props = {
  works: [];
};
export default function Home({ works }: Props) {
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
          <Section id={"zenn"} title={"Zenn"}>
            <Full>
              <Grid>
                {zenn.map((data: any) => (
                  <Small key={data.id}>
                    <PostCard title={data.title} path={data.link} />
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
          <Section id={"work"} title={"Works"}>
            <Carousel array={works} dir={"work"} endNumber={10} />
          </Section>
        </Main>
      </div>
    </Layout>
  );
}
const endpoint: string | undefined = process.env.ENDPOINT;
const key: {} = {
  headers: { "X-API-KEY": process.env.API_KEY },
};
export const getStaticProps = async () => {
  const res = await fetch(`${endpoint}work`, key);
  const data = await res.json();
  return {
    props: {
      works: data.contents,
    },
  };
};
