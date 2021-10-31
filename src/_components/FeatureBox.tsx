import React from "react";
import styled from "styled-components";
import { Props } from "@src/_components/types";

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  background: var(--base-color);
  border-radius: 24px;
  padding: 24px;
`;

const ImageWrapper = styled.div`
  margin: 0 auto 16px;
  svg {
    height: 160%;
    fill: var(--font-color);
  }
`;

const Title = styled.h3`
  font-weight: 700;
  font-size: 24px;
  line-height: 40px;
`;

const Desc = styled.div``;

export const FeatureBox: React.VFC<Props> = (props) => {
  return (
    <Wrapper>
      <ImageWrapper dangerouslySetInnerHTML={{ __html: props.svg }} />
      <Title>{props.title}</Title>
      <Desc>{props.desc}</Desc>
    </Wrapper>
  );
};
