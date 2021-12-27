import React, { useEffect } from 'react';
import Link from 'next/link';
import { Logo } from '@src/_components/Logo';
import { StickyHeader } from './StickyHeader';
import { ThemeSwitch } from './ThemeToggel';

export const Header = () => {
  return (
    <header id={'header'} className={'l-header'}>
      <div className={'l-header-inner'}>
        <nav className={'c-header-nav'}>
          <h1 id={'header-logo'} className={'c-logo'}>
            <Logo />
          </h1>
          <ul className={'c-header-nav-list'}>
            <li className={'c-header-nav-item'}>
              <Link href={'/about'}>
                <a className={'c-header-nav-link'}>About</a>
              </Link>
            </li>
            <li className={'c-header-nav-item'}>
              <Link href={'/blog'}>
                <a className={'c-header-nav-link'}>Blog</a>
              </Link>
            </li>
            <li className={'c-header-nav-item'}>
              <Link href={'/contact'}>
                <a className={'c-header-nav-link'}>Contact</a>
              </Link>
            </li>
          </ul>
          <ThemeSwitch />
        </nav>
        <StickyHeader />
      </div>
    </header>
  );
};
