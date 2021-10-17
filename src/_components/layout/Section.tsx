import React from "react";
import styled from "styled-components";
import { Props } from "@src/_components/types";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  > * {
    margin: 0 0 16px;
    &:last-child {
      margin: 0;
    }
  }
`;

const Header = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const Title = styled.h2`
  display: inline-block;
  font-size: 48px;
  line-height: 56px;
  font-weight: 700;
  color: var(--primary-color);
`;

const Desc = styled.div`
  display: inline-block;
`;

const Caption = styled.div`
  font-weight: 700;
  color: var(--font-color-sub);
`;

export const Section: React.VFC<Props> = (props) => {
  return (
    <Wrapper id={props.id}>
      <Header>
        {props.caption !== undefined && <Caption>{props.caption}</Caption>}
        {props.title !== undefined && <Title>{props.title}</Title>}
        {props.desc !== undefined && <Desc>{props.desc}</Desc>}
      </Header>
      {props.children}
    </Wrapper>
  );
};
