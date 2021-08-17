import React, { useEffect } from "react";
import Link from "next/link";
import { ThemeToggle } from "../../src/components/theme-toggel";
import { headerScroll, slideNavAnimation } from "../utils/hamburger";
export const Header = () => {
  useEffect(() => {
    headerScroll();
  }, []);
  return (
    <header id={"header"} className={"l-header"}>
      <div className={"l-header-inner"}>
        <nav className={"c-header-nav"}>
          <h1 id={"header-logo"} className={"c-logo"}>
            <Link href={"/"}>
              <a className={"c-logo"}>hrkmtsmt</a>
            </Link>
          </h1>
          <ul className={"c-header-nav-list"}>
            <li className={"c-header-nav-item"}>
              <Link href={"/works"}>
                <a className={"c-header-nav-link"}>Works</a>
              </Link>
            </li>
            <li className={"c-header-nav-item"}>
              <Link href={"/blog"}>
                <a className={"c-header-nav-link"}>Blog</a>
              </Link>
            </li>
            <li className={"c-header-nav-item"}>
              <Link href={"/contact"}>
                <a className={"c-header-nav-link"}>Contact</a>
              </Link>
            </li>
          </ul>
        </nav>
        <ThemeToggle />
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
    </header>
  );
};
