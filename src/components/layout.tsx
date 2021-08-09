import React from "react";
import { Loader } from "./loader";
import { Header } from "./header";
import { Footer } from "./footer";
type Props = {
  children?: React.ReactNode;
};
export const Layout = (props: Props) => {
  return (
    <React.StrictMode>
      <Loader />
      <Header />
      <main className={"l-main"}>{props.children}</main>
      <Footer />
    </React.StrictMode>
  );
};
