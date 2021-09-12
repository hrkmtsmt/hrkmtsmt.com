import React from "react";
import { switchTheme } from "../../src/utils/theme";
export const ThemeToggle = () => {
  return (
    <button
      onClick={() => switchTheme()}
      id={"theme-toggle"}
      className={"c-toggle"}
    >
      <div className={"c-toggle-circle"}>
        <i className={"c-toggle-icon i-moon"}></i>
        <i className={"c-toggle-icon i-sun"}></i>
      </div>
    </button>
  );
};
