import { routes } from "./routes";
import { THEME_COLORS } from "./styles/theme/colors";
import { GlobalStyle } from "./styles/global";
import { ThemeProvider } from "styled-components";
import { RouterProvider } from "react-router-dom";

export const App = () => {
  return (
    <ThemeProvider theme={THEME_COLORS}>
      <GlobalStyle />
      <RouterProvider router={routes} />
    </ThemeProvider>
  );
};
