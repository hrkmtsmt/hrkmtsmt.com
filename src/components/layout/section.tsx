import React from "react";
import { Grid, Full } from "./grid";
type Props = {
  id: string;
  title: string | undefined;
  caption: string | undefined;
  desc: string | undefined;
  children?: React.ReactNode;
};
export const Section = (props: Props) => {
  const SectionTitle = <h2 className={"p-section-title"}>{props.title}</h2>;
  const SectionDesc = <div className={"p-section-desc"}>{props.desc}</div>;
  const SectionCaption = (
    <div className={"p-section-caption"}>{props.caption}</div>
  );
  return (
    <section id={props.id}>
      <Grid>
        <Full>
          <div className={"p-section"}>
            {props.caption === undefined ? undefined : SectionCaption}
            {props.title === undefined ? undefined : SectionTitle}
            {props.desc === undefined ? undefined : SectionDesc}
          </div>
        </Full>
        {props.children}
      </Grid>
    </section>
  );
};
