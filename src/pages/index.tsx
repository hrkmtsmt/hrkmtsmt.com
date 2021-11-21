import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Helmet } from "../components/_Helmet";
import { Hero } from "../components/Hero";
import { Main } from "../components/layout/_Main";
import { Section } from "../components/layout/_Section";
import { Layout } from "@src/_components/layout/Layout";
import { Universal } from "../components/layout/Universal";
import { Full, Small } from "../components/layout/_Grid";
import { Grid } from "../_components/layout/Grid";
import { PostCard } from "../components/PostCard";
import { LinkButtonMore } from "../components/_Button";
import { PostCardVertical } from "../components/PostCard";
import { FadeIn } from "../components/animation/FadeIn";
import { ENDPOINT, API_KEY } from "../config/environment-variable";
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
          <FadeIn effect={"a-fade-in"}>
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
                <LinkButtonMore
                  key={"https://zenn.dev/hrkmtsmt"}
                  link={"https://zenn.dev/hrkmtsmt"}
                  cta={"View Zenn"}
                />
              </Full>
            </Section>
          </FadeIn>
          <FadeIn effect={"a-fade-in"}>
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
                <LinkButtonMore link={"blog"} cta={"Other Blog"} />
              </Full>
            </Section>
          </FadeIn>
          <FadeIn effect={"a-fade-in"}>
            <Section id={"work"} title={"Works"}>
              <Swiper
                className={"l-grid-full"}
                pagination={{ clickable: true }}
                breakpoints={{
                  0: {
                    spaceBetween: 24,
                    slidesPerView: 1.33333,
                  },
                  576: {
                    spaceBetween: 24,
                    slidesPerView: 2,
                  },
                  768: {
                    spaceBetween: 32,
                    slidesPerView: 3,
                  },
                  992: {
                    spaceBetween: 32,
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
                      <PostCardVertical
                        title={data.title}
                        image={data.image.url}
                        path={`works/${data.id}`}
                      />
                    </SwiperSlide>
                  ))}
              </Swiper>
            </Section>
          </FadeIn>
        </Main>
      </div>
    </Layout>
  );
}

export const getStaticProps = async () => {
  const res = [
    await fetch(`${ENDPOINT}blog`, API_KEY),
    await fetch(`${ENDPOINT}works`, API_KEY),
  ];
  const data = [await res[0].json(), await res[1].json()];
  return {
    props: {
      blog: data[0].contents,
      works: data[1].contents,
    },
  };
};
