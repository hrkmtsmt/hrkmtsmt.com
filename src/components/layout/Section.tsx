import React from "react";
import { Grid, Full } from "./Grid";
type Props = {
  id?: string;
  title?: string;
  caption?: string;
  desc?: string;
  children?: React.ReactNode;
};

const Title = (props: Props) => {
  return <h2 className={"p-section-title"}>{props.title}</h2>;
};
const Desc = (props: Props) => {
  return <div className={"p-section-desc"}>{props.desc}</div>;
};
const Caption = (props: Props) => {
  return <div className={"p-section-caption"}>{props.caption}</div>;
};

export const Section = (props: Props) => {
  return (
    <section id={props.id}>
      <Grid>
        <Full>
          <div className={"p-section"}>
            {props.caption === undefined ? undefined : (
              <Caption caption={props.caption} />
            )}
            {props.title === undefined ? undefined : (
              <Title title={props.title} />
            )}
            {props.desc === undefined ? undefined : <Desc desc={props.desc} />}
          </div>
        </Full>
        {props.children}
      </Grid>
    </section>
  );
};
