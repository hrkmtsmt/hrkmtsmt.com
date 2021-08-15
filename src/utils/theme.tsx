const applyTheme = (themeName: string) => {
  sessionStorage.setItem("theme", themeName);
  document.documentElement.className = themeName;
};
const applyVisited = (status: string) => {
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
const getStorageTheme = () => {
  const storageTheme = sessionStorage.getItem("theme");
  if (storageTheme === "is-theme-dark") {
    applyTheme("is-theme-dark");
  } else if (storageTheme === "is-theme-light") {
    applyTheme("is-theme-light");
  }
};
export const discriminationTheme = () => {
  const getStrageVisited = sessionStorage.getItem("visited");
  if (getStrageVisited == "visited") {
    getStorageTheme();
  } else {
    initialTheme();
    applyVisited("visited");
  }
};
export const switchTheme = () => {
  const getStrageTheme = sessionStorage.getItem("theme");
  if (getStrageTheme !== "is-theme-dark") {
    applyTheme("is-theme-dark");
  } else {
    applyTheme("is-theme-light");
  }
};
