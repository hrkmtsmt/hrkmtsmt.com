import React, { useEffect } from "react";
export const LoadingIndicator = () => {
  useEffect(() => {
    const loader = document.getElementById("loader")!;
    addEventListener("DOMContentLoaded", () => {
      loader.classList.add("is-loaded");
    });
  }, []);
  return (
    <div id={"loader"} className={"c-loader"}>
      <div className={"c-loader-container"}>
        <div className={"c-loader-dot"}></div>
        <div className={"c-loader-dot"}></div>
        <div className={"c-loader-dot"}></div>
      </div>
    </div>
  );
};
