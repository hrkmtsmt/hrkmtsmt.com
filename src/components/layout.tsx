import React from "react";
import { LoadingIndicator } from "./loading-indicator";
import { Header } from "./header";
import { Footer } from "./footer";
type Props = {
  children?: React.ReactNode;
};
export const Layout = (props: Props) => {
  return (
    <React.StrictMode>
      <LoadingIndicator />
      <Header />
      <main className={"l-main"}>{props.children}</main>
      <Footer />
    </React.StrictMode>
  );
};
