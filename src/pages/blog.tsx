import React from "react";
import { Main } from "../../src/components/main";
import { Section } from "../../src/components/section";
import { Layout } from "../../src/components/layout";
import { PostCard } from "../../src/components/post-card";
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
                  category={blog.tag}
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
