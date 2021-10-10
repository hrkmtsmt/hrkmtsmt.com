import React from "react";

type Props = {
  title?: string;
  desc?: string;
  image?: string | HTMLElement;
};

export const FeatureBox = (props: Props) => {
  return (
    <div className={"c-feature-box"}>
      <div className={"c-feature-box-emoji"}>{props.image}</div>
      <h3 className={"c-feature-box-title"}>{props.title}</h3>
      <div className={"c-feature-box-desc"}>{props.desc}</div>
    </div>
  );
};
