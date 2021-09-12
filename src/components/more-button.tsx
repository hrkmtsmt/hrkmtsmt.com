import React from "react";
import Link from "next/link";
type Props = {
  link: string;
  cta: string;
};
export const MoreButton = (props: Props) => {
  return (
    <Link href={props.link}>
      <a className={"c-more-button"}>
        <div className={"c-more-button-container"}>
          <div className={"c-more-button-arrow"}>
            <i className={"i-arrow-right"}></i>
          </div>
          <div className={"c-more-button-cta"}>{props.cta}</div>
        </div>
      </a>
    </Link>
  );
};
