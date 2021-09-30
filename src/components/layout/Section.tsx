import React from "react";
import { Grid, Full } from "./Grid";
type Props = {
  id: string;
  title: string;
  caption?: string;
  desc?: string;
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
            {props.caption === null ? null : SectionCaption}
            {props.title === null ? null : SectionTitle}
            {props.desc === null ? null : SectionDesc}
          </div>
        </Full>
        {props.children}
      </Grid>
    </section>
  );
};
