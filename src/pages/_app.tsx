import { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import { ThemeProvider } from '@src/components/ThemeProvider';
import { store } from '@src/store';
import 'tailwindcss/tailwind.css';

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <Provider store={store}>
      <ThemeProvider>
        <Component {...pageProps} />
      </ThemeProvider>
    </Provider>
  );
};

export default App;
