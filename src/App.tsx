import { ThemeProvider } from "styled-components";
import { useThemeStore } from "./store/useThemeStore";
import { AppTheme, GlobalStyle } from "./globalStyles";
import Container from "./ui/Container";
import Header from "./components/Header";
import Subjects from "./components/Subjects";
import QuizScreen from "./components/QuizScreen";
import Score from "./components/Score";
import { useAppStore } from "./store/useAppStore";
import data from "../data.json";

function App() {
  const { theme } = useThemeStore();
  const { screen, subject } = useAppStore();
  const currentQuiz = data.quizzes.find((quiz) => quiz.title === subject);

  return (
    <ThemeProvider theme={AppTheme}>
      <GlobalStyle $themeName={theme} />
      <Container>
        <Header />
        {screen === "subjects" && <Subjects quizzes={data.quizzes} />}
        {screen === "quiz" && currentQuiz && <QuizScreen quiz={currentQuiz} />}
        {screen === "score" && <Score />}
      </Container>
    </ThemeProvider>
  );
}

export default App;
