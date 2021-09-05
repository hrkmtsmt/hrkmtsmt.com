import React from "react";
type Props = {
  children: React.ReactNode;
};
export const Grid = (props: Props) => {
  return <div className={"l-grid"}>{props.children}</div>;
};
export const Full = (props: Props) => {
  return <div className={"l-grid-full"}>{props.children}</div>;
};
export const ExtraLarge = (props: Props) => {
  return <div className={"l-grid-extra-large"}>{props.children}</div>;
};
export const Large = (props: Props) => {
  return <div className={"l-grid-large"}>{props.children}</div>;
};
export const Medium = (props: Props) => {
  return <div className={"l-grid-medium"}>{props.children}</div>;
};
export const Small = (props: Props) => {
  return <div className={"l-grid-small"}>{props.children}</div>;
};
export const ExtraSmall = (props: Props) => {
  return <div className={"l-grid-extra-small"}>{props.children}</div>;
};
export const Article = (props: Props) => {
  return <article className={"l-grid-article"}>{props.children}</article>;
};
export const Sidebar = (props: Props) => {
  return <aside className={"l-grid-sidebar"}>{props.children}</aside>;
};
