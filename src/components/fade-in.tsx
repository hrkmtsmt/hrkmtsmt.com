import React, { useEffect } from "react";
import { scrollIntersectionAnimation } from "../utils/animation";
type Props = {
  effect: string;
  children?: React.ReactNode;
};
export const FadeIn = (props: Props) => {
  useEffect(() => {
    scrollIntersectionAnimation(props.effect);
  }, []);
  return <div className={"a-target"}>{props.children}</div>;
};
