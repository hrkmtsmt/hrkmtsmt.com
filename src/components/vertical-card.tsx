import Link from "next/link";
import React from "react";
type Props = {
  title: string;
  category: string;
  path: string;
};
export const VerticalCard = (props: Props) => {
  return (
    <Link href={props.path}>
      <a className={"c-vertical-card"}>
        <div className={""}></div>
      </a>
    </Link>
  );
};
