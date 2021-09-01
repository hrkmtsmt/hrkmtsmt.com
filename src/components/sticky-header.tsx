import React, { useEffect } from "react";
import Link from "next/link";
import { ThemeToggle } from "../../src/components/theme-toggel";
import { headerScroll, slideNavAnimation } from "../../src/utils/hamburger";
export const StickyHeader = () => {
  useEffect(() => {
    headerScroll("sticky-header");
  }, []);
  return (
    <React.Fragment>
      <nav id={"slide-nav"} className={"c-slide-nav"}>
        <ul className={"c-slide-nav-inner"}>
          <li className={"c-slide-nav-item"}>
            <Link href={"sdf"}>
              <a className={"c-slide-nav-link"}>aaa</a>
            </Link>
          </li>
          <li className={"c-slide-nav-item"}>
            <Link href={"sdf"}>
              <a className={"c-slide-nav-link"}>aaa</a>
            </Link>
          </li>
          <li className={"c-slide-nav-item"}></li>
        </ul>
      </nav>
      <div className={"c-slide-nav-background-primary"}></div>
      <div className={"c-slide-nav-background-base"}></div>
      <div id="sticky-header" className={"c-sticky-header"}>
        <ThemeToggle />
        <button
          onClick={() => slideNavAnimation()}
          id={"hamburger-button"}
          className={"c-hamburger-button"}
        >
          <i
            id={"hamburger-open"}
            className={"c-hamburger-button-icon is-visible ci-menu_alt_01"}
          ></i>
          <i
            id={"hamburger-close"}
            className={"c-hamburger-button-icon ci-close_big"}
          ></i>
        </button>
      </div>
    </React.Fragment>
  );
};
