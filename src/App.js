// views
import Home from "./views/Home/Home";

// theme
import { CssBaseline, ThemeProvider } from "@mui/material";
import dark from "./assets/theme/dark";

const App = () => {
  return (
    <ThemeProvider theme={dark}>
      <CssBaseline />
      <Home />
    </ThemeProvider>
  );
};

export default App;
