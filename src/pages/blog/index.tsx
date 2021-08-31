import React from "react";
import { Main } from "../../components/layout/main";
import { Section } from "../../components/layout/section";
import { Layout } from "../../components/layout/layout";
import { Medium } from "../../components/layout/grid";
import { PostCard } from "../../../src/components/post-card";
type Props = {
  blogs: any;
};
export default function Blog({ blogs }: Props) {
  return (
    <Layout>
      <Main>
        <Section
          id={"blog"}
          title={"Blog"}
          caption={undefined}
          desc={undefined}
        >
          {blogs.map((blog: any) => (
            <Medium key={blog.id}>
              <PostCard
                title={blog.title}
                category={blog.tag}
                slug={`/blog/${blog.id}`}
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
export const getStaticProps = async () => {
  const res = await fetch(`${endpoint}blog`, key);
  const data = await res.json();
  return {
    props: {
      blogs: data.contents,
    },
  };
};
