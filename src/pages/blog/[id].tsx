import React from "react";
import { Post, PostTag } from "../../components/Post";
import { Layout } from "@src/_components/layout/Layout";
import { Main } from "../../components/layout/_Main";
import { Grid, Article, Sidebar } from "../../components/layout/_Grid";
import { StickyNav } from "@src/_components/StickyNav";
import { ProfileCard } from "@src/_components/ProfileCard";
import { ENDPOINT, API_KEY } from "../../config/environment-variable";

import {
  Navigation,
  NavHorizonal,
  NavItem,
} from "../../components/_Navigation";

type Props = {
  blog: {
    title?: string;
    body?: HTMLElement;
    dir: string;
    image?: any;
    updatedAt: string;
    desc?: string;
    category?: any;
    tag?: [] | any;
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
              category={blog.category}
              date={blog.updatedAt}
              desc={blog.desc}
              body={blog.body}
              dir={blog.dir}
              tag={
                <Navigation>
                  <NavHorizonal>
                    {blog.tag?.map((data: any, index: number) => {
                      return (
                        <NavItem key={index}>
                          <PostTag tag={data.tag} />
                        </NavItem>
                      );
                    })}
                  </NavHorizonal>
                </Navigation>
              }
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

const dir = "blog";
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
      blog: data,
    },
  };
};
