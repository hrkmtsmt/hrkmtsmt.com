import React from "react";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";
import { Helmet } from "../../src/components/helmet";
import { Full, Grid, Article, Sidebar } from "./layout/grid";
import { StickyNav } from "../../src/components/sticky-nav";
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
  const dateJSX = <p className={"p-article-date"}>{date}</p>;
  return (
    <React.Fragment>
      <Helmet title={props.title} desc={props.desc} image={props.image} />
      <Grid>
        <Full>
          <div className={"p-article-header"}>
            <p className={"p-article-category"}>{props.category}</p>
            <h1 className="p-article-title">{props.title}</h1>
            {props.date === undefined ? undefined : dateJSX}
          </div>
        </Full>
        <Article>
          <div className={"p-article-body"}>
            <div
              className=""
              dangerouslySetInnerHTML={{
                __html: `${props.body}`,
              }}
            ></div>
          </div>
        </Article>
        <Sidebar>
          <StickyNav />
        </Sidebar>
      </Grid>
    </React.Fragment>
  );
};
