import { createGlobalStyle } from "styled-components";
import { ThemeName } from "./types";

export const AppTheme = {
  colors: {
    purple: "#A729F5",
    dark: "#313E51",
    navy: "#3B4D66",
    grey: "#626C7F",
    bluish: "#ABC1E1",
    light: "#F4F6FA",
    white: "#FFFFFF",
    success: "#26D782",
    danger: "#EE5454",
  },
  font: '"Rubik", sans-serif',
  fontSize: {
    textXS: "14px",
    textS: "20px",
    textM: "24px",
    header1: "144px",
    headerL: "64px",
    headerM: "36px",
    headerS: "28px",
  },
};

export const GlobalStyle = createGlobalStyle<{ $themeName: ThemeName }>`
  body {
    background-color: ${({ $themeName, theme }) =>
      $themeName === "light" ? theme.colors.light : theme.colors.dark};
    background-image: url(${({ $themeName }) =>
      $themeName === "dark"
        ? "./assets/pattern-background-desktop-dark.svg"
        : "./assets/pattern-background-desktop-light.svg"});
    background-position: center 0;
    background-repeat: no-repeat;
    background-size: cover;
    color: ${({ $themeName, theme }) =>
      $themeName === "light" ? theme.colors.dark : theme.colors.white};
    font-family: ${(props) => props.theme.font};
    font-size: ${(props) => props.theme.fontSize.textS};
    margin: 0;
  }
  b {
    font-weight: 700;
  }
  .color-grey {
    color: ${({ theme, $themeName }) =>
      $themeName === "dark" ? theme.colors.bluish : theme.colors.grey};
  }
  h1 {
    font-size: ${(props) => props.theme.fontSize.headerL};
    font-weight: 300;
    line-height: 68px;
    margin: 0 0 48px;
    &:last-child {
      margin: 0;
    }
  }
  h2 {
    font-size: ${(props) => props.theme.fontSize.headerM};
    font-weight: 500;
    line-height: 40px;
    margin: 0 0 24px;
  }
  @media screen and (max-width: 1020px) {
    body: {
      background-image: url(${({ $themeName }) =>
        $themeName === "dark"
          ? "./assets/pattern-background-tablet-dark.svg"
          : "./assets/pattern-background-tablet-light.svg"});
        }
  }
  @media screen and (max-width: 750px) {
    body {
      font-size: ${(props) => props.theme.fontSize.textXS};
      background-image: url(${({ $themeName }) =>
        $themeName === "dark"
          ? "./assets/pattern-background-mobile-dark.svg"
          : "./assets/pattern-background-mobile-light.svg"});
    }
    h1 {
      font-size: 40px;
      font-weight: 300;
      line-height: 44px;
      margin: 0 0 18px;
    }
    h2 {
      font-size: 20px;
      line-height: 24px;
    }
  }
`;
