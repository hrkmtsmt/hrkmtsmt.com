import React, { useState } from "react";
import Ztext from "react-ztext";
import { LinkButton } from "./Button";
import { Grid, Full } from "./layout/Grid";

const HeroTitle = () => {
  const [isZtext, setIsZtext] = useState(true);
  if (isZtext === false) {
    return (
      <div onClick={() => setIsZtext(!isZtext)} className={"p-hero-title"}>
        Front End & Design
      </div>
    );
  } else if (isZtext === true) {
    return (
      <div onClick={() => setIsZtext(!isZtext)} className={"p-hero-title"}>
        <Ztext depth="40px" direction="both" event="pointer" eventRotation="30deg" eventDirection="default" fade={false} layers={10} perspective="2400px">
          Hello!
        </Ztext>
      </div>
    );
  }
};

export const Hero = () => {
  return (
    <div className={"p-hero"}>
      <Grid>
        <Full>
          <HeroTitle />
        </Full>
        <Full>
          <LinkButton link={"https://github.com/hrkmtsmt"} cta={"View GitHub"} />
        </Full>
      </Grid>
      <div className={"p-hero-background"}></div>
    </div>
  );
};
