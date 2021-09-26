import React from "react";
import Ztext from "react-ztext";
import { LinkButton } from "../../src/components/link-button";
import { Grid, Full } from "../../src/components/layout/grid";
export const Hero = () => {
  return (
    <div className={"p-hero"}>
      <Grid>
        <Full>
          <div className={"p-hero-title"}>
            <Ztext
              depth="40px"
              direction="both"
              event="pointer"
              eventRotation="20deg"
              eventDirection="default"
              fade={false}
              layers={8}
              perspective="1600px"
            >
              Front End & Design
            </Ztext>
          </div>
        </Full>
        <Full>
          <LinkButton
            link={"https://github.com/hrkmtsmt"}
            cta={"View GitHub"}
          />
        </Full>
      </Grid>
      <div className={"p-hero-background"}></div>
    </div>
  );
};
