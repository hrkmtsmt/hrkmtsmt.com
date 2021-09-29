import React, { useEffect } from "react";
import Link from "next/link";
import { ThemeToggle } from "./ThemeToggel";
import { headerScroll, slideNavAnimation } from "../utils/hamburger";
export const StickyHeader = () => {
  useEffect(() => {
    headerScroll("sticky-header");
  }, []);
  return (
    <React.Fragment>
      <nav id={"slide-nav"} className={"c-slide-nav"}>
        <ul className={"c-slide-nav-inner"}>
          <li className={"c-slide-nav-item"}>
            <Link href={"/about"}>
              <a className={"c-slide-nav-link"}>About</a>
            </Link>
          </li>
          <li className={"c-slide-nav-item"}>
            <Link href={"/blog"}>
              <a className={"c-slide-nav-link"}>Blog</a>
            </Link>
          </li>
          <li className={"c-slide-nav-item"}></li>
        </ul>
        <div className={"c-slide-nav-background-primary"}></div>
        <div className={"c-slide-nav-background-base"}></div>
      </nav>
      <div id="sticky-header" className={"c-sticky-header"}>
        <div className={"c-sticky-header-inner"}>
          <ThemeToggle />
          <button
            onClick={() => slideNavAnimation()}
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
