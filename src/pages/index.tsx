import React from "react";
import { Helmet } from "../components/helmet";
import { FirstView } from "../components/top/first-view";
import { Section } from "../components/section";
import { Layout } from "../components/layout";
import { PostCard } from "../components/post-card";
import { MediaCard } from "../components/media-card";
import { LinkButton } from "../components/link-button";
import { Swiper, SwiperSlide } from "swiper/react";
type Props = {
  intro: any;
  blogs: any;
  works: any;
};
export default function Home({ blogs, works, intro }: Props) {
  const title = "hrkmtsmt";
  const description = "こんにちは!これは説明文です!";
  return (
    <div className={"l-hidden"}>
      <Layout>
        <FirstView />
        <Helmet title={title} desc={description} image={undefined} />
        <Section title={"Introduction"} caption={undefined} desc={undefined}>
          {intro.map((intro: any) => (
            <div key={intro.title} className={"l-grid-medium"}>
              <div className={"c-feature-box"}>
                <div className={"c-feature-box-emoji"}>{intro.emoji}</div>
                <h3 className={"c-feature-box-title"}>{intro.title}</h3>
                <div className={"c-feature-box-desc"}>{intro.desc}</div>
              </div>
            </div>
          ))}
        </Section>
        <Section title={"Works"} caption={undefined} desc={undefined}>
          <Swiper
            className={"l-grid-full"}
            pagination={{ clickable: true }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log("slide change")}
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
            {works.slice(-10).map((work: any) => (
              <SwiperSlide key={work.id} className={""}>
                <MediaCard title={work.title} slug={`/work/${work.id}`} />
              </SwiperSlide>
            ))}
          </Swiper>
        </Section>
        <Section title={"Blog"} caption={undefined} desc={undefined}>
          <div className={"l-grid-full l-grid"}>
            {blogs.slice(-4).map((blog: any) => (
              <div key={blog.id} className={"l-grid-small"}>
                <PostCard
                  title={blog.title}
                  category={blog.category.category}
                  slug={`/blog/${blog.id}`}
                />
              </div>
            ))}
          </div>
          <div className={"l-grid-full l-flex-center"}>
            <LinkButton link={"/blog"} cta={"a"} />
          </div>
        </Section>
      </Layout>
    </div>
  );
}
const endpoint: any = process.env.ENDPOINT;
const key: {} = {
  headers: { "X-API-KEY": process.env.API_KEY },
};
export const getStaticProps = async () => {
  const res = [
    await fetch(`${endpoint}work`, key),
    await fetch(`${endpoint}blog`, key),
    await fetch(`${endpoint}feature/intro`, key),
  ];
  const data = [await res[0].json(), await res[1].json(), await res[2].json()];
  return {
    props: {
      works: data[0].contents,
      blogs: data[1].contents,
      intro: data[2].body,
    },
  };
};
