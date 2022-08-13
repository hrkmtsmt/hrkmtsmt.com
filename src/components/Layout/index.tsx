import React from 'react';
import { Main } from '@src/components/Main';
import { Header } from '@src/components/Header';
import { Footer } from '@src/components/Footer';
import { DarkModeToggle } from '../DarkModeToggle';
import type { MainProps } from '@src/components/Main';
import type { HeaderProps } from '@src/components/Header';
import type { FooterProps } from '@src/components/Footer';

type Props = {
  mainContent: MainProps['children'];
  headerMenus: HeaderProps['headerMenus'];
  socialLinks: FooterProps['socialLinks'];
  copyright: FooterProps['copyright'];
};

const Component: React.FC<Props> = (props) => {
  return (
    <div className={'grid min-h-[100vh] grid-cols-1 grid-rows-1'}>
      <Header headerMenus={props.headerMenus} />
      <DarkModeToggle />
      <Main>{props.mainContent}</Main>
      <Footer socialLinks={props.socialLinks} copyright={props.copyright} />
    </div>
  );
};

export const Layout = React.memo(Component);
