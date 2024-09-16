import styled from "styled-components";
import { useThemeStore } from "../store/useThemeStore";
import { ThemeName } from "../types";

type ScoreScreenProps = {
  children: React.ReactNode;
};

const Box = styled.div<{ $themeName: ThemeName }>`
  background: ${({ theme, $themeName }) =>
    $themeName === "dark" ? theme.colors.navy : theme.colors.white};
  border-radius: 24px;
  box-shadow: 0 16px 40px
    ${({ $themeName }) =>
      $themeName === "light"
        ? "rgba(143, 160, 193, 0.14)"
        : "rgba(49, 62, 81, 0.14)"};
  margin: 0 0 32px;
  padding: 48px;
  text-align: center;
  h2 {
    font-size: ${(props) => props.theme.fontSize.header1};
    line-height: 140px;
    margin: 30px 0 20px;
  }
  p {
    color: ${({ theme, $themeName }) =>
      $themeName === "dark" ? theme.colors.bluish : theme.colors.grey};
    font-size: ${(props) => props.theme.fontSize.textM};
    margin: 0;
  }
  @media screen and (max-width: 750px) {
    margin: 0 0 12px;
    padding: 32px;
    h2 {
      font-size: 88px;
      line-height: 90px;
      margin: 20px 0;
    }
    p {
      font-size: 18px;
    }
  }
`;

const ScoreScreen = (props: ScoreScreenProps): JSX.Element => {
  const { children } = props;
  const { theme } = useThemeStore();

  return <Box $themeName={theme}>{children}</Box>;
};

export default ScoreScreen;
