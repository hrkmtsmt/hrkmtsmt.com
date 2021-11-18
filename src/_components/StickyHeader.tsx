import React, { useState, useEffect } from "react";
import Link from "next/link";
import styled from "styled-components";
import { ThemeToggle } from "@src/components/ThemeToggel";
import { mediaQuery } from "@src/styles/style";

const Container = styled.nav`
  position: fixed;
  list-style: none;
  width: 100vw;
  height: 100vh;
  left: 0;
  top: 0;
  z-index: 998;
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
  &[aria-expanded="true"] {
    transform: translateX(0);
    transition: ease-in-out 0.4s;
    transition-delay: ${(props) => (props.second / 10) * 2 + 0.4 + "s"};
  }
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
  transform: scale(0);
  transition: ease-in-out 0.4s;
  transition-delay: 0.2s;
  z-index: 997;
  &[aria-expanded="true"] {
    transform: scale(200);
    transition: ease-in-out 0.2s;
    opacity: 998;
  }
  ${mediaQuery.desktop} {
    right: 32px;
  }
  ${mediaQuery.tablet} {
    right: 24px;
  }
  ${mediaQuery.mobile} {
    right: 16px;
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
  transform: scale(0);
  transition: ease-in-out 0.2s;
  z-index: 997;
  &[aria-expanded="true"] {
    transform: scale(200);
    transition: ease-in-out 0.4s;
    transition-delay: 0.2s;
  }
  ${mediaQuery.wide} {
    right: 32px;
  }
  ${mediaQuery.tablet} {
    right: 24px;
  }
  ${mediaQuery.mobile} {
    right: 16px;
  }
`;

const ScrollContainer = styled.nav`
  position: fixed;
  height: 80px;
  top: -80px;
  left: 0;
  transition: ease-in-out 0.2s;
  width: 100%;
  padding: 0 32px;
  z-index: 999;
  &[aria-expanded="true"] {
    top: 0;
    transition: ease-in-out 0.2s;
  }
  ${mediaQuery.tablet} {
    padding: 0 24px;
  }
  ${mediaQuery.mobile} {
    padding: 0 16px;
  }
`;

const ScrollWrapper = styled.div`
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

  const [isOrder, setIsOrder] = useState(false);
  const indexDelay = (boolean: boolean, delay: number) => {
    setTimeout(() => {
      return boolean;
    }, delay);
  };

  const menus = [
    { link: "/about", label: "About" },
    { link: "/contact", label: "Contact" },
  ];

  return (
    <React.Fragment>
      <ScrollContainer aria-expanded={isScrollDown}>
        <ScrollWrapper>
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
        </ScrollWrapper>
      </ScrollContainer>
      <Container aria-expanded={isOpen}>
        <List>
          {menus.map((item, index) => (
            // secondに型エラーあり
            <Item key={index} second={index} aria-expanded={isOpen}>
              <Link href={item.link} passHref>
                <Anchor>{item.label}</Anchor>
              </Link>
            </Item>
          ))}
        </List>
      </Container>
      <BackgroundPrimary aria-expanded={isOpen} />
      <BackgroundBase aria-expanded={isOpen} />
    </React.Fragment>
  );
};
