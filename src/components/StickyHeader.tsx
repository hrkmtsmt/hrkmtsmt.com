import React, { useEffect } from "react";
import Link from "next/link";
import { ThemeToggle } from "./ThemeToggel";
import {
  addClassNameOnScroll,
  animateInOrderOnAddClassName,
} from "../utils/hamburger";
export const StickyHeader = () => {
  useEffect(() => {
    addClassNameOnScroll("sticky-header", "is-scroll", 160);
  }, []);
  return (
    <React.Fragment>
      <nav id={"menu"} className={"c-menu"}>
        <ul className={"c-menu-inner"}>
          <li className={"c-menu-item"}>
            <Link href={"/about"}>
              <a className={"c-menu-link"}>About</a>
            </Link>
          </li>
          <li className={"c-menu-item"}>
            <Link href={"/blog"}>
              <a className={"c-menu-link"}>Blog</a>
            </Link>
          </li>
          <li className={"c-menu-item"}></li>
        </ul>
        <div className={"c-menu-background-primary"}></div>
        <div className={"c-menu-background-base"}></div>
      </nav>
      <div id="sticky-header" className={"c-sticky-header"}>
        <div className={"c-sticky-header-inner"}>
          <ThemeToggle />
          <button
            onClick={() => animateInOrderOnAddClassName()}
            id={"hamburger-button"}
            className={"c-hamburger-button"}
          >
            <i
              id={"hamburger-open"}
              className={"c-hamburger-button-icon is-visible i-menu"}
            ></i>
            <i
              id={"hamburger-close"}
              className={"c-hamburger-button-icon i-close"}
            ></i>
          </button>
        </div>
      </div>
    </React.Fragment>
  );
};
