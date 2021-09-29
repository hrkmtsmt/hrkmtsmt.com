import React, { useEffect } from "react";
import { switchTheme } from "../utils/theme";
import { discriminationTheme } from "../utils/theme";
export const ThemeToggle = () => {
  useEffect(() => {
    discriminationTheme();
  }, []);
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
