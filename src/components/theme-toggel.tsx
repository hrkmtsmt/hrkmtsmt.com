import React, { useState, useEffect } from "react";
import { setTheme } from "./theme";
export const ThemeToggle = () => {
  const [switchTheme, setSwitchTheme] = useState("dark");
  const clickThemeToggle = () => {
    if (localStorage.getItem("theme") === "is-theme-dark") {
      setTheme("is-theme-light");
      setSwitchTheme("light");
    } else {
      setTheme("is-theme-dark");
      setSwitchTheme("dark");
    }
  };
  useEffect(() => {
    let theme = localStorage.getItem("theme");
    if (localStorage.getItem("theme") === "is-theme-dark") {
      setSwitchTheme("dark");
    } else if (localStorage.getItem("theme") === "is-theme-light") {
      setSwitchTheme("light");
    }
  }, []);
  const sunMoon = () => {
    if (switchTheme === "light") {
      return "sun";
    } else {
      return "moon";
    }
  };
  return (
    <button
      id={"theme-toggle"}
      className={"c-toggle"}
      onClick={clickThemeToggle}
    >
      <div className={"c-toggle-circle"}>
        <i className={`c-toggle-icon ci-${sunMoon()}`}></i>
      </div>
    </button>
  );
};
