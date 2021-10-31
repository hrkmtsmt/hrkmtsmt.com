import React from "react";
import Link from "next/link";
import styled from "styled-components";
import { Props } from "@src/_components/types";
import { mediaQuery } from "@src/styles/style";

export const Nav = styled.nav`
  list-style-type: none;
  padding: 0;
`;

export const HorizonalList = styled.ul`
  list-style-type: none;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
`;

const Anchor = styled.a`
  font-weight: 700;
  text-decoration: none;
  color: var(--primary-color);
  display: flex;
  align-items: center;
`;

export const NavItem = styled.li`
  display: flex;
  align-items: center;
`;

export const NavLink: React.VFC<Props> = (props) => {
  return (
    <NavItem>
      <Link href={props.href} passHref>
        <Anchor>{props.children}</Anchor>
      </Link>
    </NavItem>
  );
};
