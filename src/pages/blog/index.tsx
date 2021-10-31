import React, { useEffect } from "react";
import { Helmet } from "../../components/Helmet";
import { Main } from "../../components/layout/_Main";
import { Section } from "../../components/layout/Section";
import { Layout } from "../../components/layout/Layout";
import { Grid, Full, Small } from "../../components/layout/_Grid";
import { PostCard } from "../../components/PostCard";
import { ENDPOINT, API_KEY } from "../../config/environment-variable";

type Props = {
  blog: [];
};

export default function Blog({ blog }: Props) {
  const title = "hrkmtsmt";
  const desc = "こんにちは!これは説明文です!";
  return (
    <Layout>
      <Helmet title={title} desc={desc} />
      <div className={"l-overflow-hidden"}>
        <Main>
          <Section id={"blog"} title={"Blog"}>
            <Full>
              <Grid>
                {blog
                  .sort(function (a: any, b: any) {
                    if (a.updatedAt < b.updatedAt) {
                      return -1;
                    } else {
                      return 1;
                    }
                  })
                  .map((data: any) => (
                    <Small key={data.id}>
                      <PostCard title={data.title} path={`blog/${data.id}`} />
                    </Small>
                  ))}
              </Grid>
            </Full>
          </Section>
        </Main>
      </div>
    </Layout>
  );
}

export const getStaticProps = async () => {
  const res = await fetch(`${ENDPOINT}blog`, API_KEY);
  const data = await res.json();
  return {
    props: {
      blog: data.contents,
    },
  };
};
