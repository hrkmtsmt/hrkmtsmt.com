import React from "react";
import { Helmet } from "../../../src/components/helmet";
import { Post } from "../../../src/components/post";
import { PostCard } from "../../../src/components/post-card";
import { Layout } from "../../components/layout/layout";
import { Section } from "../../components/layout/section";
import { Main } from "../../components/layout/main";
import { Medium } from "../../components/layout/grid";
type Props = {
  work: any;
  works: any;
};
export default function Works({ work, works }: Props) {
  return (
    <Layout>
      <Helmet title={work.title} desc={work.description} image={undefined} />
      <Main>
        <Post
          date={work.date}
          title={work.title}
          desc={work.description}
          category={work.category.category}
          image={undefined}
          body={work.body}
          dir={work.dir}
        />
        <Section
          id={"related-posts"}
          title={"Related Posts"}
          caption={undefined}
          desc={undefined}
        >
          {works.slice(-3).map((work: any) => (
            <Medium key={work.id}>
              <PostCard
                title={work.title}
                category={work.category.category}
                path={`/work/${work.id}`}
              />
            </Medium>
          ))}
        </Section>
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
  const res = [
    await fetch(`${endpoint}work/${id}`, key),
    await fetch(`${endpoint}work`, key),
  ];
  const work = await res[0].json();
  const works = await res[1].json();
  return {
    props: {
      work: work,
      works: works.contents,
    },
  };
};
