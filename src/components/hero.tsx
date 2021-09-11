import React from "react";
import { LinkButton } from "../../src/components/link-button";
import { Grid, Full } from "../../src/components/layout/grid";
export const Hero = () => {
  return (
    <div className={"p-hero"}>
      <Grid>
        <Full>
          <div className={"p-hero-title"}>Front End & Design</div>
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
