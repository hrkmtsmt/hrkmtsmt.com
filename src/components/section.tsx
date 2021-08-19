import React, { useEffect } from "react";
type Props = {
  id: string;
  title: string | undefined;
  caption: string | undefined;
  desc: string | undefined;
  children?: React.ReactNode;
};
export const Section = (props: Props) => {
  const captionJSX = (
    <span className={"p-section-caption"}>{props.caption}</span>
  );
  const titleJSX = <h2 className={"p-section-title"}>{props.title}</h2>;
  const descJSX = <p className={"p-section-desc"}>{props.desc}</p>;
  return (
    <section id={props.id} className={"l-grid"}>
      <div className={"l-grid-full"}>
        <div className={"p-section"}>
          {props.caption === undefined ? undefined : captionJSX}
          {props.title === undefined ? undefined : titleJSX}
          {props.desc === undefined ? undefined : descJSX}
        </div>
      </div>
      {props.children}
    </section>
  );
};
