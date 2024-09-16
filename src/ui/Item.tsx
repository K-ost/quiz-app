import styled from "styled-components";
import { useThemeStore } from "../store/useThemeStore";
import { ThemeName } from "../types";
import { Icon } from "./IconTitle";
import iconSuccess from "../assets/icon-correct.svg";
import iconWrong from "../assets/icon-incorrect.svg";

type ItemProps = React.ComponentPropsWithoutRef<"div"> & {
  children: React.ReactNode;
  option?: "true" | "false";
};

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
  min-height: 96px;
  align-items: center;
  display: flex;
  margin: 0 0 24px;
  padding: 14px 68px 14px 20px;
  position: relative;
  &:last-child {
    margin: 0;
  }
  .stateMark {
    display: none;
    position: absolute;
    right: 20px;
    top: 50%;
    margin-top: -20px;
  }
  &:hover ${Icon} {
    background: #f6e7ff;
    color: ${({ theme }) => theme.colors.purple};
  }
  &.active {
    border-color: ${({ theme }) => theme.colors.purple};
  }
  &.success {
    border-color: ${({ theme }) => theme.colors.success};
    .stateMark-correct {
      display: block;
    }
  }
  &.correct {
    .stateMark-correct {
      display: block;
    }
  }
  &.wrong {
    border-color: ${({ theme }) => theme.colors.danger};
    .stateMark-wrong {
      display: block;
    }
  }
  &.active ${Icon} {
    background: ${({ theme }) => theme.colors.purple};
    color: ${({ theme }) => theme.colors.white};
  }
  &.success ${Icon} {
    background: ${({ theme }) => theme.colors.success};
    color: ${({ theme }) => theme.colors.white};
  }
  &.wrong ${Icon} {
    background: ${({ theme }) => theme.colors.danger};
    color: ${({ theme }) => theme.colors.white};
  }
  @media screen and (max-width: 750px) {
    border-radius: 12px;
    margin: 0 0 12px;
    min-height: 64px;
    padding: 12px;
    .stateMark {
      width: 32px;
      right: 12px;
      margin-top: -16px;
    }
  }
`;

const Item = (props: ItemProps): JSX.Element => {
  const { children, option } = props;
  const { theme } = useThemeStore();

  return (
    <ItemDiv $themeName={theme} {...props}>
      {children}
      {option && (
        <>
          <img
            src={iconSuccess}
            alt=""
            className="stateMark stateMark-correct"
          />
          <img src={iconWrong} alt="" className="stateMark stateMark-wrong" />
        </>
      )}
    </ItemDiv>
  );
};

export default Item;
