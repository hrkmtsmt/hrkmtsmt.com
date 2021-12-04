import React from 'react';
import styled from 'styled-components';
import { Props } from '@src/_components/types';
import { mediaQuery } from '@src/styles/style';

const Inner = styled.main`
  width: 100%;
  padding: 0 32px;
  display: flex;
  flex-direction: column;
  gap: 80px;
  ${mediaQuery.tablet} {
    padding: 0 24px;
  }
  ${mediaQuery.mobile} {
    padding: 0 16px;
  }
`;

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  grid-gap: 80px;
  padding: 80px 0;
  background: var(--background-color);
  border-radius: 24px 24px 0 0;
`;

export const Main: React.VFC<Props> = (props) => {
  return (
    <Inner id={props.id}>
      <Wrapper>{props.children}</Wrapper>
    </Inner>
  );
};
