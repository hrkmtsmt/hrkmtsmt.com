import React from "react";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";
import Image from "next/image";
import { Helmet } from "./Helmet";

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

const PostDate = (props: Props) => {
  dayjs.extend(utc);
  dayjs.extend(timezone);
  const date: string = dayjs
    .utc(props.date)
    .tz("Asia/Tokyo")
    .format("YYYY/MM/DD");
  return <p className={"p-article-date"}>{date}</p>;
};

const PostTitle = (props: Props) => {
  return <h1 className="p-article-title">{props.title}</h1>;
};

const PostCategory = (props: Props) => {
  return <p className={"p-article-category"}>{props.category}</p>;
};

const PostThumbnail = (props: Props) => {
  return (
    <div className={"p-article-image"}>
      <Image src={props.image} alt={props.alt} width={1200} height={630} />
    </div>
  );
};

export const Post = (props: Props) => {
  return (
    <React.Fragment>
      <Helmet title={props.title} desc={props.desc} image={props.image} />
      <div className={"p-article-header"}>
        {props.image === undefined ? undefined : (
          <PostThumbnail image={props.image} />
        )}
        <div className={"p-article-header-inner"}>
          {props.category === undefined ? undefined : <PostCategory />}
          {props.title === undefined ? undefined : <PostTitle />}
          {props.date === undefined ? undefined : <PostDate />}
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
