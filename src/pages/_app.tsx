import React, { useEffect } from "react";
import "../styles/reset.css";
import "../styles/coolicons.css";
import "../styles/style.scss";
import "swiper/swiper.scss";
import { AppProps } from "next/app";
import { LoadingIndicator } from "../components/loading-indicator";
import { keepTheme } from "../components/theme";
const App = ({ Component, pageProps }: AppProps): JSX.Element => {
  useEffect(() => {
    keepTheme();
  }, []);
  return (
    <React.Fragment>
      <LoadingIndicator />
      <Component {...pageProps} />
    </React.Fragment>
  );
};
export default App;
