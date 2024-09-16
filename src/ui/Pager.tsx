import styled from "styled-components";
import { ThemeName } from "../types";
import { useThemeStore } from "../store/useThemeStore";

const PagerBox = styled.div<{ $themeName: ThemeName }>`
  color: ${({ theme, $themeName }) =>
    $themeName === "dark" ? theme.colors.bluish : theme.colors.grey};
  font-style: italic;
  font-size: ${(props) => props.theme.fontSize.textS};
  margin: 0 0 27px;
  @media screen and (max-width: 750px) {
    font-size: 14px;
    margin: 0 0 12px;
  }
`;

const Pager = (props: React.ComponentPropsWithoutRef<"div">): JSX.Element => {
  const { theme } = useThemeStore();
  return <PagerBox $themeName={theme} {...props} />;
};

export default Pager;
