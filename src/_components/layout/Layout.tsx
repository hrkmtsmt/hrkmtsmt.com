import React from 'react';
import type { Props } from '@src/_components/types';
import { Header } from '@src/_components/layout/Header';
import { Footer } from '@src/_components/layout/Footer';

export const Layout: React.VFC<Props> = (props) => {
  return (
    <React.Fragment>
      <Header />
      {props.children}
      <Footer />
    </React.Fragment>
  );
};
