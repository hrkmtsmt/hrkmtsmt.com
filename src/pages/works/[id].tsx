import React from "react";
import { Helmet } from "../../components/Helmet";
import { Post } from "../../components/Post";
import { Layout } from "../../components/layout/Layout";
import { Main } from "../../components/layout/_Main";
import { Grid, Article, Sidebar } from "../../components/layout/_Grid";
import { StickyNav } from "../../components/StickyNav";
import { ProfileCard } from "../../components/ProfileCard";
import { API_KEY, ENDPOINT } from "@src/config/environment-variable";

type Props = {
  work: {
    title: string;
    desc: string;
    date?: string;
    category?: any;
    image?: any;
    body: HTMLElement;
    dir: string;
  };
};

export default function WorksPost({ work }: Props) {
  return (
    <Layout>
      <Helmet title={work.title} desc={work.desc} />
      <Main>
        <Grid>
          <Article>
            <Post
              title={work.title}
              desc={work.desc}
              body={work.body}
              dir={work.dir}
              image={work.image.url}
            />
          </Article>
          <Sidebar>
            <StickyNav>
              <ProfileCard />
            </StickyNav>
          </Sidebar>
        </Grid>
      </Main>
    </Layout>
  );
}

const dir = "works";
export const getStaticPaths = async () => {
  const res = await fetch(ENDPOINT + dir, API_KEY);
  const data = await res.json();
  const paths = (data.contents || []).map((data: any) => `/${dir}/${data.id}`);
  return { paths, fallback: false };
};
export const getStaticProps = async (context: any) => {
  const id = context.params.id;
  const res = await fetch(`${ENDPOINT + dir}/${id}`, API_KEY);
  const data = await res.json();
  return {
    props: {
      work: data,
    },
  };
};
