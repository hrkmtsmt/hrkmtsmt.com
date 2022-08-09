import { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import { store } from '@src/store';
import 'tailwindcss/tailwind.css';

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
};

export default App;
