import React from 'react';
import Link from 'next/link';

type Props = {
  link?: any;
  className?: string;
  children?: React.ReactNode;
};

export const Navigation = (props: Props) => {
  return <nav className={'c-nav'}>{props.children}</nav>;
};

export const NavHorizonal = (props: Props) => {
  return <ul className={'c-nav-horizonal'}>{props.children}</ul>;
};

export const NavItem = (props: Props) => {
  return <li className={'c-nav-item'}>{props.children}</li>;
};

export const NavItemLink = (props: Props) => {
  return (
    <li className={'c-nav-item'}>
      <Link href={props.link}>
        <a className={'c-nav-link'}>{props.children}</a>
      </Link>
    </li>
  );
};

export const NavIcon = (props: Props) => {
  return <i className={`c-nav-icon ${props.className}`}></i>;
};
