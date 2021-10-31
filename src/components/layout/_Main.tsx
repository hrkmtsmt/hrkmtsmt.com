import React from "react";
type Props = {
  children: React.ReactNode;
};
export const Main = (props: Props) => {
  return (
    <main className={"l-main"}>
      <div className={"l-universal"}>{props.children}</div>
    </main>
  );
};
