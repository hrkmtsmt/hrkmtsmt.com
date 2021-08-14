import React, { useEffect } from "react";
import Link from "next/link";
import { ThemeToggle } from "../../src/components/theme-toggel";
export const Header = () => {
  useEffect(() => {
    const slideNav = document.getElementById("slide-nav")!;
    const hamburgerButton = document.getElementById("hamburger-button")!;
    const slideNavItem = document.querySelectorAll(".c-slide-nav-item")!;
    const mediaQuery = matchMedia("(max-width: 768px)").matches;
    addEventListener("scroll", function () {
      const scroll = window.pageYOffset;
      if (scroll > 160) {
        hamburgerButton.classList.add("is-scroll")!;
      } else {
        hamburgerButton.classList.remove("is-scroll")!;
      }
    });
    hamburgerButton.addEventListener("click", () => {
      slideNav.classList.toggle("is-active");
      slideNavItem.forEach((item, index) => {
        const order = index + 1;
        const delay = order * 200;
        setTimeout(() => {
          item.classList.toggle("is-order");
        }, delay);
      });
      const slideNavIsActive = slideNav.classList.contains("is-active")!;
      const hamburgerOpen = document.getElementById("hamburger-open")!;
      const hamburgerClose = document.getElementById("hamburger-close")!;
      if (slideNavIsActive === false) {
        hamburgerOpen.classList.add("is-visible");
        hamburgerClose.classList.remove("is-visible");
      } else {
        hamburgerOpen.classList.remove("is-visible");
        hamburgerClose.classList.add("is-visible");
      }
    });
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
        <button id={"hamburger-button"} className={"c-hamburger-button"}>
          <i id={"hamburger-open"} className={"c-hamburger-button-icon is-visible ci-menu_alt_01"}></i>
          <i id={"hamburger-close"} className={"c-hamburger-button-icon ci-close_big"}></i>
        </button>
      </div>
    </header>
  );
};
