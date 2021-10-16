import React, { useState } from "react";
import Ztext from "react-ztext";
import { LinkButton } from "@src/_components/LinkButton";
import { Grid, Full } from "./layout/Grid";

const HeroTitle = () => {
  return <span>Front End & Design</span>;
};
const HeroTitleZtext = () => {
  return (
    <Ztext depth="40px" direction="both" event="pointer" eventRotation="30deg" eventDirection="default" fade={false} layers={10} perspective="2400px">
      Hello!
    </Ztext>
  );
};

export const Hero = () => {
  const [isZtext, setIsZtext] = useState(true);
  return (
    <div className={"p-hero"}>
      <Grid>
        <Full>
          <div onClick={() => setIsZtext(!isZtext)} className={"p-hero-title"}>
            {isZtext === true ? <HeroTitle /> : <HeroTitleZtext />}
          </div>
        </Full>
        <Full>
          <LinkButton link={"https://github.com/hrkmtsmt"} cta={"View GitHub"} />
        </Full>
      </Grid>
      <div className={"p-hero-background"}></div>
    </div>
  );
};
