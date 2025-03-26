import styled from "styled-components";
import { THEME_COLORS } from "../../styles/theme/colors";

export const Footer = styled.footer`
  position: relative;
  width: 100%;
  max-width: 1440px;
  margin: 3rem auto;
  padding: 1rem;
  border-radius: 18px;
  background-color: ${THEME_COLORS.AZUL_CLARO};
  box-shadow: ${THEME_COLORS.SHADOW};
  -webkit-box-shadow: ${THEME_COLORS.SHADOW};
  -o-box-shadow: ${THEME_COLORS.SHADOW};
  color: ${THEME_COLORS.SHADOW};
  text-align: center;
`;
