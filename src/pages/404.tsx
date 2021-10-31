import React, { useState } from "react";
import { Layout } from "../components/layout/Layout";
import { LinkButton } from "../components/Button";
import { Main } from "../components/layout/_Main";
import { Section } from "../components/layout/Section";
import { Grid, Full } from "../components/layout/_Grid";
export default function Error() {
  const [count, setCount] = useState(404);
  return (
    <Layout>
      <Main>
        <Section id={"404"} title={`Not Found ${count}`}>
          <Grid>
            <div className={"p-error-nav"}>
              <LinkButton link={"/"} cta={"Go back"} />
              <button
                onClick={() => setCount(count - 1)}
                className={"p-error-nav-button"}
              >
                <i className={"ci-minus"}></i>
              </button>
              <button
                onClick={() => setCount(count + 1)}
                className={"p-error-nav-button"}
              >
                <i className={"ci-plus"}></i>
              </button>
            </div>
          </Grid>
        </Section>
      </Main>
    </Layout>
  );
}
