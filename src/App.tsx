import { ThemeProvider } from "styled-components";
import { useThemeStore } from "./store/useThemeStore";
import { AppTheme, GlobalStyle } from "./globalStyles";
import Container from "./ui/Container";
import Header from "./components/Header";
import Item from "./ui/Item";
import IconTitle from "./ui/IconTitle";

function App() {
  const { theme } = useThemeStore();

  return (
    <ThemeProvider theme={AppTheme}>
      <GlobalStyle $themeName={theme} />
      <Container>
        <Header />
        <div className="grid">
          <div className="item">
            <h1>
              Welcome to the <b>Frontend Quiz!</b>
            </h1>
            <p className="color-grey">
              <em>Pick a subject to get started.</em>
            </p>
          </div>
          <div className="item">
            <Item>
              <IconTitle title="HTML" />
            </Item>
            <Item>
              <IconTitle title="CSS" />
            </Item>
            <Item>
              <IconTitle title="Javascript" />
            </Item>
            <Item>
              <IconTitle title="Accessibility" />
            </Item>
          </div>
        </div>
      </Container>
    </ThemeProvider>
  );
}

export default App;
