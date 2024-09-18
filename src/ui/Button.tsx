import styled, { useTheme } from "styled-components";
import { ThemeName } from "../types";

const CustomButton = styled.button<{ $themeName: ThemeName }>`
  background: ${(props) => props.theme.colors.purple};
  border: 0;
  border-radius: 24px;
  color: ${(props) => props.theme.colors.white};
  cursor: pointer;
  font-size: ${(props) => props.theme.fontSize.headerS};
  line-height: 28px;
  outline: none;
  padding: 32px 64px;
  transition: all 200ms ease-in-out;
  &:hover {
    opacity: 0.5;
  }
  &:focus-visible {
    box-shadow: 0 16px 40px
      ${({ $themeName }) =>
        $themeName === "dark"
          ? "rgba(143, 160, 193, 0.54)"
          : "rgba(49, 62, 81, 0.54)"};
  }
  @media screen and (max-width: 750px) {
    border-radius: 12px;
    font-size: 18px;
    line-height: 20px;
    padding: 18px 24px;
    &:hover {
      opacity: 1;
    }
    &:active {
      opacity: 0.5;
    }
  }
`;

const Button = (
  props: React.ComponentPropsWithoutRef<"button">
): JSX.Element => {
  const { theme } = useTheme();
  return <CustomButton $themeName={theme} {...props} />;
};

export default Button;
