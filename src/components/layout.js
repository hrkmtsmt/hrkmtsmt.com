import React from "react";
import { Header } from "./header";
import { Footer } from "./footer";

export const Layout = (props) => {
    return (
        <React.StrictMode>
            <Header />
            <main className={"l-main"}>{props.children}</main>
            <Footer />
        </React.StrictMode>
    );
};
