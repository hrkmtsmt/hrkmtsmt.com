import React, { useState } from "react";
import { Layout } from "../components/layout";
import { LinkButton } from "../components/link-button";
import { Section } from "../components/section";
export default function Error() {
  const [count, setCount] = useState(404);
  return (
    <Layout>
      <Section id={"404"} title={"Not Found"} caption={undefined} desc={undefined}>
        <div className={"l-grid-full l-flex-center"}>
          <div className={"p-error-nav"}>
            <LinkButton link={"/"} cta={"Go back"} />
          </div>
        </div>
        <div className={"l-grid-full l-flex-center"}>
          <div className={"p-error-number"}>{count}</div>
        </div>
        <div className={"l-grid-full l-flex-center"}>
          <div className={"p-error-nav"}>
            <button onClick={() => setCount(count - 1)} className={"p-error-nav-button"}>
              <i className={"ci-minus"}></i>
            </button>
            <button onClick={() => setCount(count + 1)} className={"p-error-nav-button"}>
              <i className={"ci-plus"}></i>
            </button>
          </div>
        </div>
      </Section>
    </Layout>
  );
}
