import React from "react";
import { Helmet } from "../../components/Helmet";
import { Post } from "../../components/Post";
import { Layout } from "../../components/layout/Layout";
import { Main } from "../../components/layout/Main";
import { Grid, Article, Sidebar } from "../../components/layout/Grid";
import { StickyNav } from "../../components/StickyNav";
type Props = {
  blog: {
    title: string;
    desc: string;
    date?: string;
    category?: any;
    image?: any;
    body: HTMLElement;
    dir: string;
  };
};
export default function BlogPost({ blog }: Props) {
  return (
    <Layout>
      <Main>
        <Grid>
          <Article>
            <Post
              title={blog.title}
              desc={blog.desc}
              body={blog.body}
              dir={blog.dir}
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
const dir = "blog";
export const getStaticPaths = async () => {
  const res = await fetch(endpoint + dir, key);
  const data = await res.json();
  const paths = (data.contents || []).map((data: any) => `/${dir}/${data.id}`);
  return { paths, fallback: false };
};
export const getStaticProps = async (context: any) => {
  const id = context.params.id;
  const res = await fetch(`${endpoint + dir}/${id}`, key);
  const data = await res.json();
  return {
    props: {
      blog: data,
    },
  };
};
