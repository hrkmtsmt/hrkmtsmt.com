import React, { useState } from "react";
import { Layout } from "../../src/components/layout/layout";
import { LinkButton } from "../../src/components/link-button";
import { Main } from "../../src/components/layout/main";
import { Section } from "../../src/components/layout/section";
import { Grid, Full } from "../../src/components/layout/grid";
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
          <Full>
            <div className={"p-error-number"}>Sorry!</div>
          </Full>
          <Full></Full>
        </Section>
      </Main>
    </Layout>
  );
}
