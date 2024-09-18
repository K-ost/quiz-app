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
      textXS: string;
      textS: string;
      textM: string;
      header1: string;
      headerL: string;
      headerM: string;
      headerS: string;
    };
  }
}

export type ThemeName = "light" | "dark";

export type ItemState = "active" | "wrong" | "correct" | "success";

export type ScreenType = "subjects" | "quiz" | "score";

export type Question = {
  question: string;
  options: string[];
  answer: string;
};

export type Quiz = {
  title: string;
  icon: string;
  questions: Question[];
};
