import styled from "styled-components";
import { useThemeStore } from "../store/useThemeStore";
import { ThemeName } from "../types";

const ItemDiv = styled.div<{ $themeName: ThemeName }>`
  background: ${({ $themeName, theme }) =>
    $themeName === "light" ? theme.colors.white : theme.colors.navy};
  border-radius: 24px;
  border-width: 3px;
  border-style: solid;
  border-color: transparent;
  box-shadow: 0 16px 40px
    ${({ $themeName }) =>
      $themeName === "light"
        ? "rgba(143, 160, 193, 0.14)"
        : "rgba(49, 62, 81, 0.14)"};
  box-sizing: border-box;
  cursor: pointer;
  min-height: 92px;
  margin: 0 0 24px;
  padding: 20px;
  position: relative;
  &:hover .iconBox {
    background: #f6e7ff;
    color: ${({ theme }) => theme.colors.purple};
  }
  &.active {
    border-color: ${({ theme }) => theme.colors.purple};
  }
  &.active .iconBox {
    background: ${({ theme }) => theme.colors.purple};
    color: ${({ theme }) => theme.colors.white};
  }
  @media screen and (max-width: 750px) {
    border-radius: 12px;
    margin: 0 0 12px;
    min-height: 64px;
    padding: 12px;
  }
`;

const Item = (props: React.ComponentPropsWithoutRef<"div">): JSX.Element => {
  const { theme } = useThemeStore();

  return <ItemDiv $themeName={theme} {...props} />;
};

export default Item;
