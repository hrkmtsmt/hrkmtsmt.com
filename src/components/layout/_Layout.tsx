import React from 'react';
import { Header } from '@src/_components/layout/Header';
import { Footer } from '../_Footer';

type Props = {
  children: React.ReactNode;
};

export const Layout = (props: Props) => {
  return (
    <React.Fragment>
      <Header />
      {props.children}
      <Footer />
    </React.Fragment>
  );
};
