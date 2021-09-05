import React from "react";
import Link from "next/link";
type Props = {
  title: string;
  path: string;
};
export const PostCardMedia = (props: Props) => {
  const cta = "More";
  return (
    <Link href={props.path}>
      <a className={"c-post-card"}>
        <div className={"c-post-card-image"}></div>
        <div className={"c-post-card-body"}>
          <h3 className={"c-post-card-title"}>{props.title}</h3>
          <div className={"c-post-card-link"}>{cta}</div>
        </div>
      </a>
    </Link>
  );
};
