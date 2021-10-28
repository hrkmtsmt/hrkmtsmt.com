import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Helmet } from "../components/Helmet";
import { Main } from "../components/layout/Main";
import { Section } from "../components/layout/Section";
import { Layout } from "../components/layout/Layout";
import { Grid, Large } from "../components/layout/Grid";
import { FeatureBox } from "../components/_FeatureBox";
import { List, ListItem } from "../components/List";
import { Accordion } from "../components/Accordion";
import { ENDPOINT, API_KEY } from "../config/environment-variable";
type Props = {
  about: any;
  feature: any;
  questionAndAnswer: any;
};
export default function About({ about, feature, questionAndAnswer }: Props) {
  console.log(feature);
  const title = "hrkmtsmt";
  const desc = "こんにちは!これは説明文です!";
  return (
    <Layout>
      <Helmet title={title} desc={desc} />
      <Main>
        <Grid id={"p-about-hero"}>
          <Large>
            <div>
              <h1 className={"p-about-hero-title"}>{about.title}</h1>
              <p className={"p-about-hero-desc"}>{about.desc}</p>
            </div>
          </Large>
          <Large>
            <div
              className={"p-about-hero-image"}
              dangerouslySetInnerHTML={{
                __html: about.svg,
              }}
            />
          </Large>
        </Grid>
        <Section id={feature.id} title={feature.title}>
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
            {feature.repeaterField.map((data: any) => (
              <SwiperSlide key={data.title}>
                <FeatureBox
                  title={data.title}
                  desc={data.desc}
                  svg={{ __html: data.svg }}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </Section>
        <Section id={questionAndAnswer.fieldId} title={questionAndAnswer.title}>
          <Large>
            <List>
              {questionAndAnswer.repeaterField.map((data: any) => (
                <ListItem key={data.text}>
                  <Accordion question={data.text} answer={data.textarea} />
                </ListItem>
              ))}
            </List>
          </Large>
        </Section>
      </Main>
    </Layout>
  );
}

export const getStaticProps = async () => {
  const res = await fetch(`${ENDPOINT}about`, API_KEY);
  const data = await res.json();
  return {
    props: {
      about: data.contents[0].about,
      questionAndAnswer: data.contents[0].questionAndAnswer,
      feature: data.contents[0].feature,
    },
  };
};
