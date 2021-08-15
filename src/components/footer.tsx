import React from "react";
export const Footer = () => {
  return (
    <footer className={"l-footer"}>
      <div className={"l-footer-inner"}>
        <nav className={"l-footer-nav"}>
          <ul className={"c-nav-horizonal"}>
            <li className={"c-nav-item"}>
              <a href={""} className={"c-nav-link"}>
                <i className={"c-nav-icon ci-twitter"}></i>
              </a>
            </li>
            <li className={"c-nav-item"}>
              <a href={""} className={"c-nav-link"}>
                <i className={"c-nav-icon ci-instagram"}></i>
              </a>
            </li>
            <li className={"c-nav-item"}>
              <a href={""} className={"c-nav-link"}>
                <i className={"c-nav-icon ci-behance"}></i>
              </a>
            </li>
            <li className={"c-nav-item"}>
              <a href={""} className={"c-nav-link"}>
                <i className={"c-nav-icon ci-dribbble"}></i>
              </a>
            </li>
            <li className={"c-nav-item"}>
              <a href={""} className={"c-nav-link"}>
                <i className={"c-nav-icon ci-github"}></i>
              </a>
            </li>
          </ul>
        </nav>
        <p className={"c-copyright"}>2021 hrkmtsmt</p>
      </div>
    </footer>
  );
};
