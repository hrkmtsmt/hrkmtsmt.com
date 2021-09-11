import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Helmet } from "../../src/components/helmet";
import { Hero } from "../../src/components/hero";
import { Main } from "../../src/components/layout/main";
import { Section } from "../../src/components/layout/section";
import { Layout } from "../../src/components/layout/layout";
import { Universal } from "../../src/components/layout/universal";
import { Grid, Full, Small } from "../../src/components/layout/grid";
import { PostCard } from "../../src/components/post-card";
import { MoreButton } from "../../src/components/more-button";
import { VerticalCard } from "../../src/components/vertical-card";
import zenn from "../../rss/data.json";
type Props = {
  works: [];
  blog: [];
};
export default function Home({ works, blog }: Props) {
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
          <Section id={"blog"} title={"Blog"}>
            <Full>
              <Grid>
                {blog.map((data: any) => (
                  <Small key={data.id}>
                    <PostCard title={data.title} path={`blog/${data.id}`} />
                  </Small>
                ))}
              </Grid>
            </Full>
            <Full>
              <MoreButton link={"blog"} cta={"Other Blog"} />
            </Full>
          </Section>
          <Section id={"work"} title={"Works"}>
            <Swiper
              className={"l-grid-full"}
              pagination={{ clickable: true }}
              breakpoints={{
                0: {
                  spaceBetween: 20,
                  slidesPerView: 1.33333,
                },
                576: {
                  spaceBetween: 30,
                  slidesPerView: 2,
                },
                768: {
                  spaceBetween: 40,
                  slidesPerView: 3,
                },
                992: {
                  spaceBetween: 40,
                  slidesPerView: 4,
                },
              }}
            >
              {works
                .sort(function (a: any, b: any) {
                  if (a.updatedAt < b.updatedAt) {
                    return -1;
                  } else {
                    return 1;
                  }
                })
                .slice(0, 10)
                .map((data: any, index: number) => (
                  <SwiperSlide key={index}>
                    <VerticalCard
                      title={data.title}
                      image={data.image.url}
                      path={`works/${data.id}`}
                    />
                  </SwiperSlide>
                ))}
            </Swiper>
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
  const res = [
    await fetch(`${endpoint}blog`, key),
    await fetch(`${endpoint}works`, key),
  ];
  const data = [await res[0].json(), await res[1].json()];
  return {
    props: {
      blog: data[0].contents,
      works: data[1].contents,
    },
  };
};
