import React from "react";
import { Header } from "../header";
import { Footer } from "../footer";
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
