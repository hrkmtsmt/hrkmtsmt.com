import React from "react";
import { LinkButton } from "../../src/components/link-button";
export const Hero = () => {
  return (
    <div className={"l-grid-full p-hero"}>
      <div className={"l-grid"}>
        <div className={"l-grid-large"}>
          <div className={"aaa "}>
            React, JavaScript, CSS, SCSS, HTML, TypeScipt
          </div>
          <div className={"bbb"}>
            WordPress, PHP, Adobe XD, Illustrator, Photoshop, something…
          </div>
        </div>
        <div className={"l-grid-large aaa"}></div>
        <div className={"l-grid-full"}>
          <LinkButton
            link={"https://github.com/hrkmtsmt"}
            cta={"View GitHub"}
          />
        </div>
      </div>
      <div className={"p-hero-background"}></div>
    </div>
  );
};
