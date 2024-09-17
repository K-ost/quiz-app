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

  const resetTest = () => {
    setSubject("");
    setShowScore(false);
    setScore(0);
  };

  return (
    <ThemeProvider theme={AppTheme}>
      <GlobalStyle $themeName={theme} />
      <Container>
        <Header subject={subject} />

        {!subject.length && !showScore && <Subjects setSubject={setSubject} />}

        {!!subject.length && !showScore && (
          <Quiz
            subject={subject}
            setScore={setScore}
            setShowScore={setShowScore}
          />
        )}

        {showScore && (
          <Score subject={subject} score={score} reset={resetTest} />
        )}
      </Container>
    </ThemeProvider>
  );
}

export default App;
