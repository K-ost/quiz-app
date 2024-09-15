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
    text: "12px",
    header1: "144px",
    headerL: "64px",
    headerM: "36px",
    headerS: "28px",
  },
};

export const GlobalStyle = createGlobalStyle<{ $themeName: ThemeName }>`
  body {
    background: ${({ $themeName, theme }) =>
      $themeName === "dark" ? theme.colors.light : theme.colors.dark};
    color: ${({ $themeName, theme }) =>
      $themeName === "dark" ? theme.colors.dark : theme.colors.white};
    font-family: ${(props) => props.theme.font};
    margin: 0;
  }
`;
