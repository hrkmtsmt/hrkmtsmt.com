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
  const width = 640;
  const height = 960;
  const quality = 100;
  const loader = () => {
    return `${props.image}?w=${width}&q=${quality || 75}`;
  };
  return (
    <Link href={props.path}>
      <a className={"c-vertical-card"}>
        <div className={"c-vertical-card-image"}>
          <Image
            loader={loader}
            src={props.image}
            alt={props.alt}
            width={width}
            height={height}
          />
        </div>
      </a>
    </Link>
  );
};
