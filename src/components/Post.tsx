import React, { ReactNode } from "react";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";
import Image from "next/image";
import { Helmet } from "./_Helmet";
import { square } from "../config/image-size";

type Props = {
  title?: string;
  body?: HTMLElement;
  date?: string;
  tag?: React.ReactNode | string | any;
  desc?: string | any;
  category?: string | {};
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
    .format("YYYY.MM.DD");
  if (props.date !== undefined) {
    return <p className={"p-article-date"}>{date}</p>;
  }
  return null;
};

const PostTitle = (props: Props) => {
  if (props.title !== undefined) {
    return <h1 className="p-article-title">{props.title}</h1>;
  }
  return null;
};

const PostCategory = (props: Props) => {
  if (props.category !== undefined) {
    return <div className={"p-article-category"}>{props.category}</div>;
  }
  return null;
};

const PostThumbnail = (props: Props) => {
  if (props.image !== undefined) {
    return (
      <div className={"p-article-image"}>
        <Image
          src={props.image}
          alt={props.alt}
          width={square.width}
          height={square.height}
        />
      </div>
    );
  }
  return null;
};

export const PostTag = (props: Props) => {
  if (props.tag !== undefined) {
    return <div className={"p-article-tag"}>{props.tag}</div>;
  }
  return null;
};

export const Post = (props: Props) => {
  return (
    <React.Fragment>
      <Helmet title={props.title} desc={props.desc} image={props.image} />
      <div className={"p-article-header"}>
        <PostThumbnail image={props.image} />
        <PostCategory category={props.category} />
        <PostDate date={props.date} />
        <PostTitle title={props.title} />
        {props.tag}
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
