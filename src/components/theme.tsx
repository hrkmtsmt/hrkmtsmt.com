export const setTheme = (themeName: string) => {
  localStorage.setItem("theme", themeName);
  document.documentElement.className = themeName;
};
export const keepTheme = () => {
  const localTheme =
    localStorage.getItem("theme") && localStorage.getItem("theme");
  if (localTheme === "is-theme-dark") {
    setTheme("is-theme-dark");
  } else if (localTheme === "is-theme-light") {
    setTheme("is-theme-light");
  } else {
    setTheme("is-theme-light");
  }
};
