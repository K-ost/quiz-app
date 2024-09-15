import { ThemeProvider } from "styled-components";
import { useThemeStore } from "./store/useThemeStore";
import { AppTheme, GlobalStyle } from "./globalStyles";
import Button from "./ui/Button";
import Container from "./ui/Container";
import Header from "./components/Header";

function App() {
  const { theme } = useThemeStore();

  return (
    <ThemeProvider theme={AppTheme}>
      <GlobalStyle $themeName={theme} />
      <Container>
        <Header />
        <p>
          Click on the Vite and React logos to learn more Lorem ipsum dolor sit
          amet, consectetuer adipiscing elit. Phasellus hendrerit. Pellentesque
          aliquet nibh nec urna. In nisi neque, aliquet vel, dapibus id, mattis
          vel, nisi. Sed pretium, ligula sollicitudin laoreet viverra, tortor
          libero sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis.
          Ut justo. Suspendisse potenti.
        </p>
        <Button>Button</Button>
      </Container>
    </ThemeProvider>
  );
}

export default App;
