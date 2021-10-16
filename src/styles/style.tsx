import { createGlobalStyle } from "styled-components";

const globalStyle = createGlobalStyle`
  @font-face {
    font-family: "QualionRound";
    src: url("../fonts/qualion-round.woff") format("woff");
    src: url("../fonts/qualion-round.woff2") format("woff2");
    font-weight: 400;
    font-style: normal;
    font-display: swap;
  }
  @font-face {
    font-family: "QualionRound";
    src: url("../fonts/qualion-round-bold.woff") format("woff");
    src: url("../fonts/qualion-round-bold.woff2") format("woff2");
    font-weight: 400;
    font-style: normal;
    font-display: swap;
  }
  :root {
    --max-width: 1080px;
    --sans-serif: "QualionRound", "QualionRound-Regular", "游ゴシック体", YuGothic, "游ゴシック Medium", "Yu Gothic Medium", "游ゴシック", "Yu Gothic",
      "Helvetica Neue", Arial, "Hiragino Kaku Gothic ProN", "Hiragino Sans", Meiryo, sans-serif;
    --monospace: "Courier", "游ゴシック体", YuGothic, "游ゴシック Medium", "Yu Gothic Medium", "游ゴシック", "Yu Gothic", "メイリオ", sans-serif;
  }
  :root,
  .is-theme-light {
    --base-color: #ffffff;
    --background-color: #f7faff;
    --primary-color: #2f76e6;
    --primary-color-light: #d1e2ff;
    --primary-color-dark: #02368a;
    --secondary-color: #ce127f;
    --secondary-color-light: #ffccea;
    --font-color: #202020;
    --font-color-sub: #808080;
    --color-black: #202020;
    --color-white: #fff;
    --color-gray: #eeeeee;
    --color-pink-light: #ffa1bc;
    --color-pink: #ff2266;
    --shadow-color-hover: drop-shadow(0 0 16px rgba(47, 118, 230, 0.2));
  }
  .is-theme-dark {
    --base-color: #111111;
    --background-color: #202020;
    --primary-color: #3477eb;
    --primary-color-light: #273957;
    --primary-color-dark: #5a98fc;
    --font-color: #dddddd;
    --font-color-sub: #aaaaaa;
    --color-black: #111111;
    --color-gray: #404040;
    --color-light-pink: #4e1021;
    --color-pink: #ff5b8c;
    --glass-base: rgba(32, 32, 32, 0.6);
    --shadow-color-hover: drop-shadow(0 0 16px rgba(0, 0, 0, 0.3));
  }
  @mixin selection {
    ::-moz-selection {
      @content;
    }
    ::selection {
      @content;
    }
  }
  @include selection {
    background: var(--primary-color);
    color: var(--base-color);
  }
  html {
    scroll-behavior: smooth;
    overflow-y: scroll;
    font-size: 16px;
  }
  ::-webkit-scrollbar {
    width: 8px;
  }
  .section::-webkit-scrollbar-track {
    background: var(--background-color);
  }
  ::-webkit-scrollbar-thumb {
    background: var(--primary-color);
    border-radius: 8px;
  }
  body {
    font-size: 16px;
    line-height: 32px;
    font-family: var(--sans-serif);
    font-weight: 400;
    font-display: swap;
    width: 100%;
    color: var(--font-color);
    background: var(--background-color);
  }
  input,
  button,
  select {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    background: transparent;
    border: none;
    border-radius: 0;
    font: inherit;
    outline: none;
  }
  textarea {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    background: transparent;
    border: none;
    border-radius: 0;
    font: inherit;
    outline: none;
    resize: vertical;
  }
  input {
    &[type="checkbox"],
    &[type="radio"] {
      display: none;
    }
    &[type="submit"],
    &[type="button"] {
      cursor: pointer;
    }
  }
  a,
  label,
  button {
    cursor: pointer;
  }
  select {
    cursor: pointer;

    &::-ms-expand {
      display: none;
    }
  }
`;

export const mediaQuery = {
  mobile: "@media screen and (max-width: 576px)",
  tablet: "@media screen and (max-width: 768px)",
  desktop: "@media screen and (max-width: 992px)",
  wide: "@media screen and (max-width: 1154px)",
};

export const color = {
  baseColor: "--base-color",
  backgroundColor: "--background-color",
  primaryColor: "--primary-color",
  primaryColorLight: "--primary-color-light",
  primaryColorDark: "--primary-color-dark",
  secondaryColor: "--secondary-color",
  secondaryColorLight: "--secondary-color-light",
  secondaryColorDark: "--secondary-color-dark",
  fontColor: "--font-color",
  fonstColorSub: "--font-color-sub",
  black: "--color-black",
  white: "--color-white",
  gray: "--color-gray",
  pink: "--color-pink",
  pinkLight: "--color-pink-light",
  shadowColor: "--shadow-color",
};

export const size = {};
