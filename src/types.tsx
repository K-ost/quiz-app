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
      header1: string;
      headerL: string;
      headerM: string;
      headerS: string;
    };
  }
}

export type ThemeName = "light" | "dark";

export type IconTitleType = "HTML" | "CSS" | "Javascript" | "Accessibility";
