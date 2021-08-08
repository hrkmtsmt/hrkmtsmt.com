import React from "react";
import { Layout } from "../../components/layout";
import { Post } from "../../components/post";
import { PostCard } from "../../components/post-card";
import { Section } from "../../components/section";
type Props = {
  blog: any;
  blogs: any;
};
export default function Blog({ blog, blogs }: Props) {
  return (
    <Layout>
      <Post
        date={blog.date}
        title={blog.title}
        desc={blog.description}
        category={blog.category.category}
        image={undefined}
        body={blog.body}
        dir={blog.dir}
      />
      <Section title={"Related Posts"} caption={undefined} desc={undefined}>
        {blogs.slice(-3).map((blog: any) => (
          <div key={blog.id} className={"l-grid-medium"}>
            <PostCard
              title={blog.title}
              category={blog.category.category}
              slug={`/blog/${blog.id}`}
            />
          </div>
        ))}
      </Section>
    </Layout>
  );
}
const endpoint: any = process.env.ENDPOINT;
const key: {} = {
  headers: { "X-API-KEY": process.env.API_KEY },
};
export const getStaticPaths = async () => {
  const res = await fetch(`${endpoint}blog`, key);
  const data = await res.json();
  const paths = (data.contents || []).map((data: any) => `/blog/${data.id}`);
  return { paths, fallback: false };
};
export const getStaticProps = async (context: any) => {
  const id = context.params.id;
  const res = [
    await fetch(`${endpoint}blog/${id}`, key),
    await fetch(`${endpoint}blog`, key),
  ];
  const blog = await res[0].json();
  const blogs = await res[1].json();
  return {
    props: {
      blog: blog,
      blogs: blogs.contents,
    },
  };
};