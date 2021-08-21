import React, { useEffect } from "react";
import { AppProps } from "next/app";
import { LoadingIndicator } from "../components/LoadingIndicator";
import { discriminationTheme } from "../utils/theme";
import "swiper/swiper.scss";
import "../styles/reset.css";
import "../styles/coolicons.css";
import "../styles/style.scss";
import "../styles/package.scss";
const App = ({ Component, pageProps }: AppProps): JSX.Element => {
  useEffect(() => {
    discriminationTheme();
  }, []);
  return (
    <React.Fragment>
      <Component {...pageProps} />
      <LoadingIndicator />
    </React.Fragment>
  );
};
export default App;
