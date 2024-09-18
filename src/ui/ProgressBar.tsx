import styled from "styled-components";
import { useThemeStore } from "../store/useThemeStore";
import { ThemeName } from "../types";

type ProgressBarProps = {
  all: number;
  progress: number;
};

const Bar = styled.div<{ $themeName: ThemeName }>`
  background: ${({ $themeName, theme }) =>
    $themeName === "light" ? theme.colors.white : theme.colors.navy};
  border-radius: 16px;
  box-sizing: border-box;
  height: 16px;
  padding: 4px;
`;

const Range = styled.div<{ $progress: number }>`
  background: ${(props) => props.theme.colors.purple};
  border-radius: 8px;
  height: 8px;
  transition: all 200ms ease-in-out;
  width: ${({ $progress }) => $progress}%;
`;

const ProgressBar = (props: ProgressBarProps): JSX.Element => {
  const { all, progress } = props;
  const { theme } = useThemeStore();

  return (
    <Bar $themeName={theme}>
      <Range $progress={(100 * progress) / all} />
    </Bar>
  );
};

export default ProgressBar;
