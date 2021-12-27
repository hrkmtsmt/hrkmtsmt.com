import React, { useEffect } from 'react';
import { AppProps } from 'next/app';
import { LoadingIndicator } from '../components/LoadingIndicator';
import 'swiper/swiper.scss';
import '../../src/styles/reset.css';
import '../../src/styles/digicons.css';
import '../../src/styles/style.scss';
import '../../src/styles/package.scss';

const App = ({ Component, pageProps }: AppProps): JSX.Element => {
  return (
    <React.Fragment>
      <Component {...pageProps} />
      <LoadingIndicator />
    </React.Fragment>
  );
};
export default App;
