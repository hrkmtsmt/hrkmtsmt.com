import React from "react";
import { switchTheme } from "../utils/theme";
export const ThemeToggle = () => {
  return (
    <button
      onClick={() => switchTheme()}
      id={"theme-toggle"}
      className={"c-toggle"}
    >
      <div className={"c-toggle-circle"}>
        <i className={"c-toggle-icon ci-moon"}></i>
        <i className={"c-toggle-icon ci-sun"}></i>
      </div>
    </button>
  );
};
