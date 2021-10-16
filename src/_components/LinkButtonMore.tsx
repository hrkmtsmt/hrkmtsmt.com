import React from "react";
import Link from "next/link";
import styled from "styled-components";
import { Props } from "@src/_components/types";

const Anker = styled.a`
  display: inline-block;
  overflow: hidden;
  z-index: 1;
`;
const Container = styled.div`
  display: flex;
  position: relative;
  height: 40px;
  border-radius: 40px;
  overflow: hidden;
  z-index: 1;
  &::before {
    width: 100%;
    height: 100%;
    content: "";
    position: absolute;
    left: 0;
    border-radius: 40px;
    background: var(--primary-color);
    z-index: 0;
    transform: translateX(-100%);
    -webkit-transform: translateX(-100%);
    transition: ease-in-out 0.2s;
  }
  &:hover {
    .CTA {
      color: var(--base-color);
      transition: ease-in-out 0.2s;
      padding: 0 24px 0 10px;
    }
    .Arrow {
      transform: translateX(6px);
      -webkit-transform: translateX(6px);
      transition: ease-in-out 0.2s;
    }
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

const Arrow = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  border-radius: 40px;
  font-size: 24px;
  color: var(--base-color);
  background: var(--primary-color);
  transition: ease-in-out 0.2s;
  z-index: 1;
`;

const CTA = styled.div`
  line-height: 40px;
  font-weight: 700;
  color: var(--primary-color);
  padding: 0 16px 0 8px;
  transition: ease-in-out 0.2s;
  z-index: 1;
`;

export const LinkButtonMore: React.VFC<Props> = (props) => {
  return (
    <Link href={props.link} passHref>
      <Anker>
        <Container>
          <Arrow>
            <i className={"i-arrow-right"}></i>
          </Arrow>
          <CTA>{props.cta}</CTA>
        </Container>
      </Anker>
    </Link>
  );
};
