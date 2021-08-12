import React, { useEffect } from "react";
import { AppProps } from "next/app";
import { LoadingIndicator } from "../../src/components/loading-indicator";
import { discriminationTheme } from "../../src/utils/theme";
import "swiper/swiper.scss";
import "../../src/styles/reset.css";
import "../../src/styles/coolicons.css";
import "../../src/styles/style.scss";
const App = ({ Component, pageProps }: AppProps): JSX.Element => {
  useEffect(() => {
    discriminationTheme();
  }, []);
  return (
    <React.Fragment>
      <LoadingIndicator />
      <Component {...pageProps} />
    </React.Fragment>
  );
};
export default App;
