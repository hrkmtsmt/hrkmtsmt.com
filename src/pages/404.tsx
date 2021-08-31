import React, { useState } from "react";
import { Layout } from "../components/layout/layout";
import { LinkButton } from "../../src/components/link-button";
import { Main } from "../components/layout/main";
import { Section } from "../components/layout/section";
export default function Error() {
  const [count, setCount] = useState(404);
  return (
    <Layout>
      <Main>
        <Section
          id={"404"}
          title={"Not Found"}
          caption={undefined}
          desc={undefined}
        >
          <div className={"l-grid-full"}>
            <div className={"p-error-nav"}>
              <LinkButton link={"/"} cta={"Go back"} />
            </div>
          </div>
          <div className={"l-grid-full"}>
            <div className={"p-error-number"}>{count}</div>
          </div>
          <div className={"l-grid-full"}>
            <div className={"p-error-nav"}>
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
          </div>
        </Section>
      </Main>
    </Layout>
  );
}
