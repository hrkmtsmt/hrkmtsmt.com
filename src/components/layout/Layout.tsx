import React from "react";
import { Header } from "../Header";
import { Footer } from "../Footer";
type Props = {
  children: React.ReactNode;
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
