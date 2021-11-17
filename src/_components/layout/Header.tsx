import React from "react";
import styled from "styled-components";
import Link from "next/link";
import { Logo } from "@src/_components/Logo";
import { StickyHeader } from "@src/_components/StickyHeader";
import { mediaQuery } from "@src/styles/style";
import { Props } from "../types";

const Wrapper = styled.header`
  width: 100%;
  height: 80px;
  padding: 0 32px;
  z-index: 999;
  transition: ease-in-out 0.2s;

  ${mediaQuery.tablet} {
    padding: 0 24px;
  }

  ${mediaQuery.mobile} {
    padding: 0 16px;
  }
`;

const Inner = styled.div`
  max-width: var(--max-width);
  width: 100%;
  height: 100%;
  margin: 0 auto;
  display: flex;
`;

const Nav = styled.nav`
  display: flex;
  align-items: center;
`;

const List = styled.ul`
  display: flex;
  align-items: center;
`;

const Item = styled.li`
  margin: 0 16px 0 0;
  line-height: 40px;

  &:last-child {
    margin: 0;
  }
`;

const Anchor = styled.a`
  display: block;
  font-weight: 700;
  color: var(--primary-color);
  font-size: 36px;
  line-height: 40px;
  position: relative;
  transition: ease-in-out 0.2s;
  &::before {
    content: "";
    display: block;
    position: absolute;
    width: 8px;
    height: 8px;
    border-radius: 8px;
    background: var(--primary-color);
    bottom: -32px;
    left: 50%;
    opacity: 0;
    transform: translate(-50%, -50%);
    -webkit-transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    transition: ease-in-out 0.2s;
  }
  &:hover {
    color: var(--primary-color-dark);
    transition: ease-in-out 0.2s;
    &::before {
      background: var(--primary-color-dark);
      opacity: 1;
      bottom: -16px;
      transition: ease-in-out 0.2s;
    }
  }
`;

const ItemLink: React.VFC<Props> = (props) => {
  return (
    <Link href={props.href} passHref>
      <Item>
        <Anchor>{props.label}</Anchor>
      </Item>
    </Link>
  );
};

export const Header: React.VFC = () => {
  return (
    <Wrapper>
      <Inner>
        <Nav>
          <List>
            <Item>
              <Logo />
            </Item>
            <ItemLink href={"/about"} label={"About"} />
            <ItemLink href={"/blog"} label={"Blog"} />
          </List>
        </Nav>
        <StickyHeader />
      </Inner>
    </Wrapper>
  );
};
