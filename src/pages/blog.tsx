import React from "react";
import { Main } from "../components/Main";
import { Section } from "../components/Section";
import { Layout } from "../components/Layout";
import { PostCard } from "../components/PostCard";
type Props = {
  blogs: any;
};
export default function Blog({ blogs }: Props) {
  return (
    <Layout>
      <Main>
        <Section id={"blog"} title={"Blog"} caption={""} desc={undefined}>
          <div className={"l-grid-full l-grid"}>
            {blogs.map((blog: any) => (
              <div key={blog.id} className={"l-grid-medium"}>
                <PostCard
                  title={blog.title}
                  category={blog.category.category}
                  slug={`/blog/${blog.id}`}
                />
              </div>
            ))}
          </div>
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
