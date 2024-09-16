import { useState } from "react";
import { ThemeProvider } from "styled-components";
import { useThemeStore } from "./store/useThemeStore";
import { AppTheme, GlobalStyle } from "./globalStyles";
import Container from "./ui/Container";
import Header from "./components/Header";
import Subjects from "./components/Subjects";
import Quiz from "./components/Quiz";
import Score from "./components/Score";

function App() {
  const { theme } = useThemeStore();
  const [subject, setSubject] = useState<string>("");
  const [showScore, setShowScore] = useState<boolean>(false);
  const [score, setScore] = useState<number>(0);

  return (
    <ThemeProvider theme={AppTheme}>
      <GlobalStyle $themeName={theme} />
      <Container>
        <Header subject={subject} />
        <Subjects subject={subject} show={showScore} setSubject={setSubject} />
        <Quiz
          subject={subject}
          setScore={setScore}
          hide={showScore}
          setShowScore={setShowScore}
        />
        <Score
          subject={subject}
          score={score}
          show={showScore}
          setShowScore={setShowScore}
        />
      </Container>
    </ThemeProvider>
  );
}

export default App;
