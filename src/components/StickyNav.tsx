import React from "react";
type Props = {
  children?: React.ReactNode;
};
export const StickyNav = (props: Props) => {
  return (
    <div id={"sticky-nav"} className={"c-sticky-nav"}>
      {props.children}
    </div>
  );
};
