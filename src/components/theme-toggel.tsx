import React, { useState, useEffect } from "react";
import { applyTheme } from "../../src/utils/theme";
export const ThemeToggle = () => {
  const [dark, setDark] = useState("is-dark");
  const [sunMoon, setSunMoon] = useState("moon");
  const onClickToggle = () => {
    const elementHasIsDark = document.documentElement.classList.contains("is-theme-dark");
    if (elementHasIsDark === false) {
      applyTheme("is-theme-dark");
      setDark("is-dark");
      setSunMoon("moon");
    } else {
      applyTheme("");
      setDark("");
      setSunMoon("sun");
    }
    console.log("seikou");
  };
  return (
    <button onClick={() => onClickToggle()} id={"theme-toggle"} className={`c-toggle ${dark}`}>
      <div className={"c-toggle-circle"}>
        <i className={`c-toggle-icon ci-${sunMoon}`}></i>
      </div>
    </button>
  );
};
