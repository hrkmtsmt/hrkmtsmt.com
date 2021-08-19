import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Helmet } from "../../src/components/helmet";
import { Hero } from "../../src/components/hero";
import { Main } from "../../src/components/main";
import { Section } from "../../src/components/section";
import { Layout } from "../../src/components/layout";
import { PostCard } from "../../src/components/post-card";
import { VerticalCard } from "../components/vertical-card";
import { MoreButton } from "../components/more-button";
type Props = {
  intro: any;
  blogs: any;
  works: any;
};
export default function Home({ blogs, works, intro }: Props) {
  const title = "hrkmtsmt";
  const desc = "こんにちは!これは説明文です!";
  return (
    <div className={"l-overflow-hidden"}>
      <Layout>
        <Helmet title={title} desc={desc} image={undefined} />
        <div className={"l-universal"}>
          <Hero />
        </div>
        <Main>
          <Section
            id={"introduction"}
            title={"Introduction"}
            caption={undefined}
            desc={undefined}
          >
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
          <Section
            id={"works"}
            title={"Works"}
            caption={undefined}
            desc={undefined}
          >
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
                  <VerticalCard title={work.title} path={`/work/${work.id}`} />
                </SwiperSlide>
              ))}
            </Swiper>
          </Section>
          <Section
            id={"blog"}
            title={"Blog"}
            caption={undefined}
            desc={undefined}
          >
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
            <div className={"l-grid-full"}>
              <MoreButton link={"/blog"} cta={"More Read"} />
            </div>
          </Section>
        </Main>
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
