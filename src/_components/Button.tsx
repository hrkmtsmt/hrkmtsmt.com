import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import { URL } from '@src/_components/types';

type Button = URL & {
  cta: string;
};

const Wrapper = styled.a`
  position: relative;
  display: flex;
  width: fit-content;
  padding: 0 20px;
  line-height: 40px;
  font-weight: 700;
  border-radius: 40px;
  text-align: center;
  color: var(--base-color);
  background: var(--primary-color);
  overflow: hidden;
  z-index: 1;
  transition: ease-in-out 0.2s;
  &:hover {
    color: var(--primary-color);
    background: var(--primary-color-light);
    transition: ease-in-out 0.2s;
  }
  &::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 40px;
    background: var(--primary-color-light);
    left: 0;
    transform: translateX(-100%);
    -webkit-transform: translateX(-100%);
    transition: ease-in-out 0.2s;
    border-radius: 40px;
    z-index: -1;
  }
  &:hover::before {
    transform: translateX(0);
    -webkit-transform: translateX(0);
    transition: ease-in-out 0.2s;
  }
  &:active {
    transform: scale(0.98);
    transition: ease-in-out 0.1s;
  }
`;

export const Button: React.VFC<Button> = (props) => {
  return (
    <Link href={props.href} passHref>
      <Wrapper>{props.cta}</Wrapper>
    </Link>
  );
};
