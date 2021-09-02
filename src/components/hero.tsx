import React from "react";
import { LinkButton } from "../../src/components/link-button";
export const Hero = () => {
  return (
    <div className={"l-grid-full p-hero"}>
      <div className={"l-grid"}>
        <div className={"l-grid-full"}>
          <div className={"aaa "}>Front End is</div>
          <div className={"bbb"}>aaa</div>
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
