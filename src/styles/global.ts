import { createGlobalStyle } from "styled-components";
import { THEME_COLORS } from "./theme/colors";
export const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  body {
    height: 100dvh;
    background-size: cover;
    background-repeat: no-repeat;
    -webkit-font-smoothing: antialiased;
    background: ${THEME_COLORS.AZUL_MAGENTA};
  }

  body, input, button {
    font-family: 'Roboto', sans-serif;
    font-size: 16px;

    font-weight: normal;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 500;
  }

  button {
    cursor: pointer
  }

  ::-webkit-scrollbar {
    width: 0.6rem;
  }

`;
