import "../styles/reset.css";
import "../styles/coolicons.css";
import "../styles/style.scss";
import "swiper/swiper.scss";
import { AppProps } from "next/app";
import React from "react";
const App = ({ Component, pageProps }: AppProps): JSX.Element => {
  return (
    <React.Fragment>
      <Component {...pageProps} />
    </React.Fragment>
  );
};
export default App;
