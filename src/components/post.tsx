import React from "react";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";
import { Helmet } from "./Helmet";
import { StickyNav } from "./StickyNav";
dayjs.extend(utc);
dayjs.extend(timezone);
type Props = {
  date: string | undefined;
  title: string | undefined;
  desc: string | undefined;
  image: string | undefined;
  category: string | undefined;
  body: HTMLElement | undefined;
  dir: string | undefined;
};
export const Post = (props: Props) => {
  const date: string = dayjs
    .utc(props.date)
    .tz("Asia/Tokyo")
    .format("YYYY/MM/DD");
  return (
    <React.Fragment>
      <Helmet title={props.title} desc={props.desc} image={props.image} />
      <div className={"l-grid l-inner"}>
        <div className="l-grid-full">
          <div className={"p-article-header"}>
            <p className={"p-article-category"}>{props.category}</p>
            <h1 className="p-article-title">{props.title}</h1>
            <p className={"p-article-date"}>{date}</p>
          </div>
        </div>
        <article className={"l-grid-article"}>
          <div className={"p-article-body"}>
            <div
              className=""
              dangerouslySetInnerHTML={{
                __html: `${props.body}`,
              }}
            ></div>
          </div>
        </article>
        <aside className={"l-grid-sidebar"}>
          <StickyNav />
        </aside>
      </div>
    </React.Fragment>
  );
};
