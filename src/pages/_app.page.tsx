import React from 'react';
import { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import { ThemeProvider } from '@src/components/ThemeProvider';
import { store } from '@src/store';
import 'tailwindcss/tailwind.css';
import '@src/styles/global.css';
import '@src/styles/styles.global.scss';
import { TemplateLayout } from '@src/components/Layout';

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <Provider store={store}>
      <ThemeProvider>
        <TemplateLayout>
          <Component {...pageProps} />
        </TemplateLayout>
      </ThemeProvider>
    </Provider>
  );
};

export default App;
