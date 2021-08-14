import React, { useEffect } from "react";
import { FadeIn } from "./fade-in";
type Props = {
  id: string;
  title: string | undefined;
  caption: string | undefined;
  desc: string | undefined;
  animation: boolean;
  children?: React.ReactNode;
};
export const Section = (props: Props) => {
  const captionJSX = <span className={"c-section-caption"}>{props.caption}</span>;
  const titleJSX = <h2 className={"c-section-title"}>{props.title}</h2>;
  const descJSX = <p className={"c-section-desc"}>{props.desc}</p>;
  return (
    <FadeIn effect={"a-fade-in"}>
      <section id={props.id} className={"l-grid l-inner"}>
        <div className={"l-grid-full"}>
          <div className={"c-section"}>
            {props.caption === undefined ? undefined : captionJSX}
            {props.title === undefined ? undefined : titleJSX}
            {props.desc === undefined ? undefined : descJSX}
          </div>
        </div>
        {props.children}
      </section>
    </FadeIn>
  );
};
