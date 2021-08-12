export const applyTheme = (themeName: string) => {
  document.documentElement.className = themeName;
};
export const discriminationTheme = () => {
  const prefersColorSchemeDark = matchMedia("(prefers-color-scheme: dark)").matches;
  if (prefersColorSchemeDark === true) {
    applyTheme("is-theme-dark");
  } else {
    applyTheme("");
  }
  console.log("AAAAA");
};
