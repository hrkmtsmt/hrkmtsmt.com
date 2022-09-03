import React from 'react';
import { GitHub, Instagram, Twitter } from 'react-feather';
import { Main } from '@src/components/Layout/Main';
import { Header } from '@src/components/Layout/Header';
import { Footer } from '@src/components/Layout/Footer';
import { DarkModeToggle } from '@src/components/DarkModeToggle';
import type { MainProps } from '@src/components/Layout/Main';
import type { HeaderProps } from '@src/components/Layout/Header';
import type { FooterProps } from '@src/components/Layout/Footer';

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

type TemplateLayoutProps = {
  mainContent: Props['mainContent'];
};

export const TemplateLayout: React.FC<TemplateLayoutProps> = (props) => {
  const headerMenus: HeaderProps['headerMenus'] = [
    {
      name: 'About',
      link: '/about'
    }
  ];

  const socialLinks: FooterProps['socialLinks'] = [
    {
      name: 'github',
      link: 'https://github.com/hrkmtsmt',
      children: <GitHub size={16} strokeWidth={2.4} />
    },
    {
      name: 'twitter',
      link: 'https://twitter.com/hrkmtsmt',
      children: <Twitter size={16} strokeWidth={2.4} />
    },
    {
      name: 'instagram',
      link: 'https://instagram.com/hrkmtsmt',
      children: <Instagram size={16} strokeWidth={2.4} />
    }
  ];

  return (
    <Layout
      headerMenus={headerMenus}
      mainContent={props.mainContent}
      socialLinks={socialLinks}
      copyright={'hrkmtsmt'}
    />
  );
};
