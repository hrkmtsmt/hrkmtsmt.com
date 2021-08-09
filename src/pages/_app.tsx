import React from "react";
import "../styles/reset.css";
import "../styles/coolicons.css";
import "../styles/style.scss";
import "swiper/swiper.scss";
import { AppProps } from "next/app";
import { Layout } from "../components/layout";
const App = ({ Component, pageProps }: AppProps): JSX.Element => {
  return (
    <React.Fragment>
      <Layout />
      <Component {...pageProps} />
    </React.Fragment>
  );
};
export default App;
