import { ThemeProvider } from "styled-components";
import { useThemeStore } from "./store/useThemeStore";
import { AppTheme, GlobalStyle } from "./globalStyles";
import Container from "./ui/Container";
import Header from "./components/Header";
import Item from "./ui/Item";
import IconTitle from "./ui/IconTitle";
import Grid from "./ui/Grid";
import ProgressBar from "./ui/ProgressBar";
import Button from "./ui/Button";
import Notify from "./ui/Notify";

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
            <Item option="true" className="active">
              <IconTitle title="4.5 : 1" letter="A" />
            </Item>
            <Item option="true" className="success">
              <IconTitle title="3 : 1" letter="B" />
            </Item>
            <Item option="true" className="wrong">
              <IconTitle title="2.5 : 1" letter="C" />
            </Item>
            <Item option="true" className="correct">
              <IconTitle title="5 : 1" letter="D" />
            </Item>
            <Item option="true">
              <IconTitle title="5 : 1" letter="E" />
            </Item>

            <Button style={{ width: "100%" }}>Submit Answer</Button>
            <Notify>Please select an answer</Notify>
          </div>
        </Grid>
      </Container>
    </ThemeProvider>
  );
}

export default App;
