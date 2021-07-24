import React, { useEffect } from "react";
import Link from "next/link";
import { LinkButton } from "../components/link-button";
export const Header = () => {
    useEffect(() => {
        addEventListener("scroll", function () {
            const scroll = window.pageYOffset;
            const headerBackgound = this.document.getElementById("header");
            if (scroll > 400) {
                headerBackgound.classList.add("is-scroll");
            } else {
                headerBackgound.classList.remove("is-scroll");
            }
        });
        const mobileNav = document.getElementById("mobile-nav");
        const hamburgerButton = document.getElementById("hamburger-button");
        const navItems = document.querySelectorAll(".c-mobile-nav-item");
        hamburgerButton.addEventListener("click", () => {
            mobileNav.classList.toggle("is-active");
            navItems.forEach((item, index) => {
                const order = index + 1;
                const delay = order * 200;
                setTimeout(() => {
                    item.classList.toggle("is-order");
                }, delay);
            });
        });
    }, []);
    return (
        <header id={"header"} className={"l-header"}>
            <div className={"l-header-inner"}>
                <h1 id={"header-logo"} className={"c-logo"}>
                    <Link href={"/"}>
                        <a className={"c-logo"}>hrkmtsmt</a>
                    </Link>
                </h1>
                <nav className={"c-header-nav"}>
                    <div className={"c-header-nav-desktop"}>
                        <ul className={"c-nav-horizonal"}>
                            <li className={"c-nav-item"}>
                                <Link href={"sdf"}>
                                    <a className={"c-nav-link"}>aaa</a>
                                </Link>
                            </li>
                        </ul>
                        <LinkButton link={"/"} cta={"a"} />
                    </div>
                    <div className={"c-header-nav-mobile"}>
                        <button
                            id={"hamburger-button"}
                            className={"c-hamburger-button"}
                        >
                            <i className={"ci-menu_alt_01"}></i>
                        </button>
                        <ul id={"mobile-nav"} className={"c-mobile-nav"}>
                            <li className={"c-mobile-nav-item"}>
                                <Link href={"sdf"}>
                                    <a className={"c-mobile-nav-link"}>aaa</a>
                                </Link>
                            </li>
                            <li className={"c-mobile-nav-item"}>
                                <Link href={"sdf"}>
                                    <a className={"c-mobile-nav-link"}>aaa</a>
                                </Link>
                            </li>
                            <li className={"c-mobile-nav-item"}>
                                <Link href={"sdf"}>
                                    <a className={"c-mobile-nav-link"}>aaa</a>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        </header>
    );
};
