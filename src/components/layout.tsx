import React from "react";
import { Header } from "../../src/components/header";
import { Footer } from "../../src/components/footer";
type Props = {
  children?: React.ReactNode;
};
export const Layout = (props: Props) => {
  return (
    <React.Fragment>
      <div className={"l-overflow-hidden"}>
        <Header />
        <main className={"l-main"}>{props.children}</main>
        <Footer />
      </div>
    </React.Fragment>
  );
};
