import React from "react";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";
import Image from "next/image";
import { Helmet } from "../../src/components/helmet";
import { Full, Grid, Article, Sidebar } from "./layout/grid";
import { StickyNav } from "../../src/components/sticky-nav";
dayjs.extend(utc);
dayjs.extend(timezone);
type Props = {
  date?: string;
  title?: string;
  desc?: string;
  category?: string;
  body?: HTMLElement;
  dir?: string;
  image?: any;
  alt?: string;
};
export const Post = (props: Props) => {
  const date: string = dayjs
    .utc(props.date)
    .tz("Asia/Tokyo")
    .format("YYYY/MM/DD");
  const DateElement = <p className={"p-article-date"}>{date}</p>;
  const TitleElement = <h1 className="p-article-title">{props.title}</h1>;
  const CategoryElement = (
    <p className={"p-article-category"}>{props.category}</p>
  );
  const ThumbnailElement = (
    <div className={"p-article-thumbnail"}>
      <Image
        className={"p-article-image"}
        src={props.image}
        alt={props.alt}
        width={1200}
        height={630}
      />
    </div>
  );
  return (
    <React.Fragment>
      <Helmet title={props.title} desc={props.desc} image={props.image} />
      <div className={"p-article-header"}>
        {props.image === undefined ? undefined : ThumbnailElement}
        <div className={"p-article-header-inner"}>
          {props.category === undefined ? undefined : CategoryElement}
          {props.title === undefined ? undefined : TitleElement}
          {date === undefined ? undefined : DateElement}
        </div>
      </div>
      <div
        className={"p-article-body"}
        dangerouslySetInnerHTML={{
          __html: `${props.body}`,
        }}
      />
    </React.Fragment>
  );
};
