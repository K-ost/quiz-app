import { ThemeProvider } from "styled-components";
import { useThemeStore } from "./store/useThemeStore";
import Switcher from "./ui/Switcher";
import { AppTheme, GlobalStyle } from "./globalStyles";

function App() {
  const { theme } = useThemeStore();

  return (
    <ThemeProvider theme={AppTheme}>
      <GlobalStyle $themeName={theme} />
      <Switcher />
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </ThemeProvider>
  );
}

export default App;
