import { useState } from "react";
import { ThemeProvider } from "styled-components";
import { useThemeStore } from "./store/useThemeStore";
import { AppTheme, GlobalStyle } from "./globalStyles";
import Container from "./ui/Container";
import Header from "./components/Header";
import Subjects from "./components/Subjects";
import Quiz from "./components/Quiz";

function App() {
  const { theme } = useThemeStore();
  const [subject, setSubject] = useState<string>("");

  return (
    <ThemeProvider theme={AppTheme}>
      <GlobalStyle $themeName={theme} />
      <Container>
        <Header subject={subject} />
        <Subjects subject={subject} setSubject={setSubject} />
        <Quiz subject={subject} />
      </Container>
    </ThemeProvider>
  );
}

export default App;
