import React, { useState } from 'react';
import styled from 'styled-components';
import { Props } from '@src/_components/types';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 24px;
  overflow: hidden;
  background: var(--base-color);
`;

const Header = styled.button`
  font-weight: 700;
  padding: 24px;
`;

const Content = styled.div`
  &-answer {
    height: 0;
    overflow: hidden;
    opacity: 0;
    transform: translateY(-24px);
    transition: 0.4s ease-in-out;
    padding: 0 24px;
    &[aria-expanded='true'] {
      height: auto;
      opacity: 1;
      transform: translateY(0);
      transition: 0.4s ease-in-out;
      padding: 0 24px 24px;
      margin: -8px 0 0;
    }
  }
`;

export const Accordion: React.VFC<Props> = (props) => {
  const [isExpanded, setIsExpanded] = useState(false);
  return (
    <Wrapper>
      <Header onClick={() => setIsExpanded(!isExpanded)}>{props.header}</Header>
      <Content aria-expanded={isExpanded}>{props.content}</Content>
    </Wrapper>
  );
};
