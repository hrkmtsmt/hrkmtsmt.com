import React from "react";
import Link from "next/link";
type Props = {
  title: string;
  category: string;
  slug: string;
};
export const PostCard = (props: Props) => {
  const cta = "More";
  return (
    <Link href={props.slug}>
      <a className={"c-post-card"}>
        <div className={"c-post-card-body"}>
          <p className={"c-post-card-category"}>{props.category}</p>
          <h3 className={"c-post-card-title"}>{props.title}</h3>
          <div className={"c-post-card-button"}>{cta}</div>
        </div>
      </a>
    </Link>
  );
};
