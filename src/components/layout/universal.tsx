import React from "react";
type Props = {
  children?: React.ReactNode;
};
export const Universal = (props: Props) => {
  return <div className={"l-universal"}>{props.children}</div>;
};
