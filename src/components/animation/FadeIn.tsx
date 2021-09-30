import React, { useEffect } from "react";
import { startAnimateEntersScreen } from "../../utils/animation";

type Props = {
  effect: string;
  children?: React.ReactNode;
};

export const FadeIn = (props: Props) => {
  useEffect(() => {
    startAnimateEntersScreen(props.effect);
  }, []);
  return <div className={"a-target"}>{props.children}</div>;
};
