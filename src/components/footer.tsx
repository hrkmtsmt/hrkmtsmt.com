import React from "react";
import { NavHorizonal, NavItem, NavIcon } from "./navigation";
import json from "../pulic/index.json";

export const Footer = () => {
  return (
    <footer className={"l-footer"}>
      <div className={"l-footer-inner"}>
        <nav className={"l-footer-nav"}>
          <NavHorizonal>
            {json.socialMedia.map((data) => (
              <NavItem key={data.id} link={data.link}>
                <NavIcon className={`i-${data.id}`} />
              </NavItem>
            ))}
          </NavHorizonal>
        </nav>
        <p className={"c-copyright"}>2021 hrkmtsmt</p>
      </div>
    </footer>
  );
};
