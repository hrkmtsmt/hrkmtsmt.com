import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Helmet } from "../components/Helmet";
import { Main } from "../components/layout/Main";
import { Section } from "../components/layout/Section";
import { Layout } from "../components/layout/Layout";
import { Large } from "../components/layout/Grid";
import { FeatureBox } from "../components/FeatureBox";
import { Accordion } from "../components/Accordion";
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
            }}
          >
            {intro.map((intro: any, index) => (
              <SwiperSlide key={index}>
                <FeatureBox title={intro.title} desc={intro.desc} image={intro.image} />
              </SwiperSlide>
            ))}
          </Swiper>
        </Section>
        <Section id={"q-and-a"} title={"Q&A"}>
          {intro.map((intro: any, index) => (
            <Large key={index}>
              <Accordion question={intro.title} answer={intro.desc} />
            </Large>
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
