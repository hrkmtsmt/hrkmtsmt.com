const applyTheme = (themeName: string) => {
  sessionStorage.setItem("theme", themeName);
  document.documentElement.className = themeName;
};
const storageKeyVisited = (status: string) => {
  sessionStorage.setItem("visited", status);
};
const initialTheme = () => {
  const prefersColorSchemeDark = matchMedia("(prefers-color-scheme: dark)").matches;
  if (prefersColorSchemeDark === true) {
    applyTheme("is-theme-dark");
  } else {
    applyTheme("is-theme-light");
  }
};
const switchTheme = () => {
  const getStrageTheme = sessionStorage.getItem("theme");
  if (getStrageTheme === "is-theme-dark") {
    applyTheme("is-theme-dark");
  } else if (getStrageTheme === "is-theme-light") {
    applyTheme("is-theme-light");
  } else {
    applyTheme("is-theme-light");
  }
};
export const discriminationTheme = () => {
  const getStrageVisited = sessionStorage.getItem("visited");
  if (getStrageVisited == "visited") {
    switchTheme();
  } else {
    initialTheme();
    storageKeyVisited("visited");
  }
};
export const onClickSwitchTheme = () => {
  const getStrageTheme = sessionStorage.getItem("theme");
  if (getStrageTheme !== "is-theme-dark") {
    applyTheme("is-theme-dark");
  } else {
    applyTheme("is-theme-light");
  }
};
