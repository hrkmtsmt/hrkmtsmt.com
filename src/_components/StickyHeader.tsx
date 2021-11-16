import React, { useState, useEffect } from "react";
import Link from "next/link";
import styled from "styled-components";
import { ThemeToggle } from "@src/components/ThemeToggel";
import { Props } from "./types";

const Container = styled.nav`
  position: fixed;
  list-style: none;
  width: 100vw;
  height: 100vh;
  left: 0;
  top: 0;
  z-index: 99;
  visibility: hidden;
  padding: 0 32px;
  &[aria-expanded="true"] {
    visibility: visible;
  }
`;

const List = styled.ul`
  display: flex;
  flex-direction: column;
  max-width: var(--max-width);
  width: 100%;
  margin: 0 auto;
  padding: 160px 0 32px;
`;

const Item = styled.li`
  transform: translateX(-100%);
  transition: ease-in-out 0.2s;
  font-size: 36px;
  line-height: 80px;
`;

const Anchor = styled.a`
  font-weight: 700;
  text-decoration: none;
  color: var(--primary-color);
`;

const BackgroundPrimary = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 40px;
  position: fixed;
  top: 20px;
  right: calc((100% - var(--max-width)) / 2);
  background: var(--primary-color);
  z-index: -1;
  transform: scale(1);
  transition: ease-in-out 0.4s;
  transition-delay: 0.2s;
  &[aria-expanded="true"] {
    transform: scale(200);
    transition: ease-in-out 0.2s;
  }
`;

const BackgroundBase = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 40px;
  position: fixed;
  top: 20px;
  right: calc((100% - var(--max-width)) / 2);
  background: var(--base-color);
  z-index: -1;
  transform: scale(1);
  transition: ease-in-out 0.2s;
  &[aria-expanded="true"] {
    transform: scale(200);
    transition: ease-in-out 0.4s;
    transition-delay: 0.2s;
  }
`;

const SlideNav: React.VFC<Props> = (props) => {
  return (
    <Container aria-expanded={props.ariaExpanded}>
      <List>
        <Item>
          <Link href={"/about"} passHref>
            <Anchor>About</Anchor>
          </Link>
        </Item>
      </List>
      <BackgroundPrimary aria-expanded={props.ariaExpanded} />
      <BackgroundBase aria-expanded={props.ariaExpanded} />
    </Container>
  );
};

const AAA = styled.nav`
  position: fixed;
  height: 80px;
  top: -80px;
  left: 0;
  transition: ease-in-out 0.2s;
  width: 100%;
  padding: 0 32px;
  z-index: 99;
  &[aria-expanded="true"] {
    top: 0;
    transition: ease-in-out 0.2s;
  }
`;

const BBB = styled.div`
  width: 100%;
  max-width: var(--max-width);
  height: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Button = styled.button`
  font-size: 24px;
  width: 40px;
  height: 40px;
  color: var(--base-color);
  background: var(--primary-color);
  border-radius: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
`;

export const StickyHeader = () => {
  const [isScrollDown, setIsScrollDown] = useState(false);
  useEffect(() => {
    addEventListener("scroll", () => {
      const scrollY = window.pageYOffset;
      if (scrollY > 300) {
        setIsScrollDown(true);
      } else {
        setIsScrollDown(false);
      }
    });
  }, []);

  const [isOpen, setIsOpen] = useState(false);
  return (
    <React.Fragment>
      <AAA aria-expanded={isScrollDown}>
        <BBB>
          <ThemeToggle />
          <Button onClick={() => setIsOpen((prevsIsOpen) => !prevsIsOpen)}>
            <i
              id={"hamburger-open"}
              className={"c-hamburger-button-icon is-visible i-menu"}
            ></i>
            <i
              id={"hamburger-close"}
              className={"c-hamburger-button-icon i-close"}
            ></i>
          </Button>
        </BBB>
      </AAA>
      <SlideNav ariaExpanded={isOpen} />
    </React.Fragment>
  );
};

export const StickyHeaderAndSlideNav = () => {
  const [isActive, setIsActive] = useState(false);
  return (
    <React.Fragment>
      <SlideNav aria-expanded={isActive} />
    </React.Fragment>
  );
};
