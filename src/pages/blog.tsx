import React from "react";
import { Section } from "../../src/components/section";
import { Layout } from "../../src/components/layout";
import { PostCard } from "../../src/components/post-card";
type Props = {
  blogs: any;
};
export default function Blog({ blogs }: Props) {
  return (
    <Layout>
      <Section id={"blog"} title={"Blog"} caption={""} desc={undefined}>
        <div className={"l-grid-full l-grid"}>
          {blogs.map((blog: any) => (
            <div key={blog.id} className={"l-grid-medium"}>
              <PostCard title={blog.title} category={blog.category.category} slug={`/blog/${blog.id}`} />
            </div>
          ))}
        </div>
      </Section>
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
