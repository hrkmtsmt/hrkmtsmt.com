import React from "react";
export const Footer = () => {
  return (
    <footer className={"l-footer"}>
      <div className={"l-footer-inner"}>
        <nav className={"l-footer-nav"}>
          <ul className={"c-nav-horizonal"}>
            <li className={"c-nav-item"}>
              <a href={"https://twitter.com/hrkmtsmt"} className={"c-nav-link"}>
                <i className={"c-nav-icon i-twitter"}></i>
              </a>
            </li>
            <li className={"c-nav-item"}>
              <a href={"https://zenn.dev/hrkmtsmt"} className={"c-nav-link"}>
                <i className={"c-nav-icon i-zenn"}></i>
              </a>
            </li>
            <li className={"c-nav-item"}>
              <a
                href={"https://www.instagram.com/hrkmtsmt/"}
                className={"c-nav-link"}
              >
                <i className={"c-nav-icon i-instagram"}></i>
              </a>
            </li>
            <li className={"c-nav-item"}>
              <a
                href={"https://www.behance.net/hrkmtsmt"}
                className={"c-nav-link"}
              >
                <i className={"c-nav-icon i-behance"}></i>
              </a>
            </li>
            <li className={"c-nav-item"}>
              <a href={""} className={"c-nav-link"}>
                <i className={"c-nav-icon i-dribbble"}></i>
              </a>
            </li>
            <li className={"c-nav-item"}>
              <a
                href={"https://dribbble.com/hrkmtsmt"}
                className={"c-nav-link"}
              >
                <i className={"c-nav-icon i-github"}></i>
              </a>
            </li>
          </ul>
        </nav>
        <p className={"c-copyright"}>2021 hrkmtsmt</p>
      </div>
    </footer>
  );
};
