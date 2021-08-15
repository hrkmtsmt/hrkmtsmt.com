import React, { useState, useEffect } from "react";
import { onClickSwitchTheme } from "../../src/utils/theme";
export const ThemeToggle = () => {
  return (
    <button onClick={() => onClickSwitchTheme()} id={"theme-toggle"} className={"c-toggle"}>
      <div className={"c-toggle-circle"}>
        <i className={"c-toggle-icon ci-moon"}></i>
        <i className={"c-toggle-icon ci-sun"}></i>
      </div>
    </button>
  );
};
