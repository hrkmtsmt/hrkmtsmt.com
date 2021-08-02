import "../styles/reset.css";
import "../styles/coolicons.css";
import "../styles/style.scss";
import "swiper/swiper.scss";
import { AppProps } from "next/app";
const App = ({ Component, pageProps }: AppProps): JSX.Element => {
  return <Component {...pageProps} />;
};
export default App;
