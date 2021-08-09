import React from "react";
import { Header } from "./header";
import { Footer } from "./footer";
type Props = {
  children?: React.ReactNode;
};
export const Layout = (props: Props) => {
  return (
    <React.StrictMode>
      <Header />
      <main className={"l-main"}>{props.children}</main>
      <Footer />
    </React.StrictMode>
  );
};
