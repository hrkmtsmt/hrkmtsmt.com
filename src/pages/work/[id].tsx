import React from "react";
import { Helmet } from "../../../src/components/helmet";
import { Post } from "../../../src/components/post";
import { Layout } from "../../components/layout/layout";
import { Main } from "../../components/layout/main";
import { Grid, Article, Sidebar } from "../../components/layout/grid";
import { StickyNav } from "../../components/sticky-nav";
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
export default function Works({ work }: Props) {
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
            <StickyNav />
          </Sidebar>
        </Grid>
      </Main>
    </Layout>
  );
}
const endpoint: any = process.env.ENDPOINT;
const key: {} = {
  headers: { "X-API-KEY": process.env.API_KEY },
};
export const getStaticPaths = async () => {
  const res = await fetch(`${endpoint}work`, key);
  const data = await res.json();
  const paths = (data.contents || []).map((data: any) => `/work/${data.id}`);
  return { paths, fallback: false };
};
export const getStaticProps = async (context: any) => {
  const id = context.params.id;
  const res = await fetch(`${endpoint}work/${id}`, key);
  const work = await res.json();
  return {
    props: {
      work: work,
    },
  };
};
