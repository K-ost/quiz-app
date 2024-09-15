import { createGlobalStyle } from "styled-components";
import { ThemeName } from "./types";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      purple: string;
      dark: string;
      navy: string;
      grey: string;
      bluish: string;
      light: string;
      white: string;
      success: string;
      danger: string;
    };
    font: string;
    fontSize: {
      text: string;
    };
  }
}

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
