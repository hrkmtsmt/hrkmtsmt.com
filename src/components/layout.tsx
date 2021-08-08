import React from "react";
import { Footer } from "./Footer";
type Props = {
  children?: React.ReactNode;
};
export const Layout = (props: Props) => {
  return (
    <React.StrictMode>
      <main className={"l-main"}>{props.children}</main>
      <Footer />
    </React.StrictMode>
  );
};
