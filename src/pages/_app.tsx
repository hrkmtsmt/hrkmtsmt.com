import React, { useEffect } from "react";
import { AppProps } from "next/app";
import { LoadingIndicator } from "../../src/components/loading-indicator";
import { discriminationTheme } from "../../src/utils/theme";
import "swiper/swiper.scss";
import "../../src/styles/reset.css";
import "../../src/styles/digicons.css";
import "../../src/styles/style.scss";
import "../../src/styles/package.scss";
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
