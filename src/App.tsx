import { ThemeProvider } from "styled-components";
import { useThemeStore } from "./store/useThemeStore";
import { AppTheme, GlobalStyle } from "./globalStyles";
import Container from "./ui/Container";
import Header from "./components/Header";
import Item from "./ui/Item";
import IconTitle from "./ui/IconTitle";
import Grid from "./ui/Grid";
import ProgressBar from "./ui/ProgressBar";

function App() {
  const { theme } = useThemeStore();

  return (
    <ThemeProvider theme={AppTheme}>
      <GlobalStyle $themeName={theme} />
      <Container>
        <Header />
        <Grid cols={2} sm={1}>
          <div>
            <h1>
              Welcome to the <b>Frontend Quiz!</b>
            </h1>
            <p className="color-grey">
              <em>Pick a subject to get started.</em>
            </p>
            <ProgressBar progress={5} />
          </div>
          <div>
            <Item>
              <IconTitle title="HTML" icon />
            </Item>
            <Item>
              <IconTitle title="CSS" icon />
            </Item>
            <Item>
              <IconTitle title="Javascript" icon />
            </Item>
            <Item>
              <IconTitle title="Accessibility" icon />
            </Item>
            <Item className="active">
              <IconTitle title="4.5 : 1" letter="A" />
            </Item>
            <Item>
              <IconTitle title="4.5 : 2" letter="B" />
            </Item>
          </div>
        </Grid>
      </Container>
    </ThemeProvider>
  );
}

export default App;
