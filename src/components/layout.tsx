import React from "react";
import { Header } from "../../src/components/Header";
import { Footer } from "../../src/components/Footer";
type Props = {
  children?: React.ReactNode;
};
export const Layout = (props: Props) => {
  return (
    <React.Fragment>
      <Header />
      {props.children}
      <Footer />
    </React.Fragment>
  );
};
