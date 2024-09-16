import styled from "styled-components";
import icon from "../assets/icon-error.svg";
import { ThemeName } from "../types";
import { useThemeStore } from "../store/useThemeStore";

type NotifyProps = {
  children: React.ReactNode;
  show?: boolean;
};

const NotifyBox = styled.div<{ $themeName: ThemeName }>`
  align-items: center;
  color: ${({ theme, $themeName }) =>
    $themeName === "dark" ? theme.colors.white : theme.colors.danger};
  display: flex;
  font-size: ${(props) => props.theme.fontSize.textS};
  justify-content: center;
  margin-top: 32px;
  img {
    display: block;
    margin-right: 8px;
  }
  @media screen and (max-width: 750px) {
    font-size: 18px;
    margin-top: 12px;
    img {
      width: 32px;
    }
  }
`;

const Notify = (props: NotifyProps): JSX.Element => {
  const { children, show } = props;
  const { theme } = useThemeStore();

  if (!show) return <></>;

  return (
    <NotifyBox $themeName={theme}>
      <img src={icon} alt="" />
      {children}
    </NotifyBox>
  );
};

export default Notify;
