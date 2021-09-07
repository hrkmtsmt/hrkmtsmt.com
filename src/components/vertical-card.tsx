import React from "react";
import Link from "next/link";
import Image from "next/image";
type Props = {
  title?: string;
  category?: string;
  path: string;
  image?: any;
  alt?: string;
};
export const VerticalCard = (props: Props) => {
  return (
    <Link href={props.path}>
      <a className={"c-vertical-card"}>
        <div className={"c-vertical-card-image"}>
          <Image src={props.image} alt={props.alt} width={640} height={960} />
        </div>
      </a>
    </Link>
  );
};
