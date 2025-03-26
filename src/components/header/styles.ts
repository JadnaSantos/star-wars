import styled from "styled-components";
import { THEME_COLORS } from "../../styles/theme/colors";

export const Header = styled.header`
  position: relative;
  width: 100%;
  max-width: 1440px;
  margin: 3rem auto;
  padding: 1rem;
  border-radius: 18px;
  background-color: ${THEME_COLORS.AZUL_CLARO};
  color: ${THEME_COLORS.AZUL_ESCURO};
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Logo = styled.img`
  width: 100px;
  height: 100px;
  cursor: pointer;
`;

export const Content = styled.main`
  width: 100%;
  display: grid;
  max-width: 1440px;
  position: relative;
  margin: 3rem auto;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, auto);
`;

export const Title = styled.h1`
  font-size: 2.5rem;
`;

export const Nav = styled.nav`
  grid-column: 2 / 3;
  grid-row: 1 / 1;
  align-content: center;
  justify-self: right;
`;

export const NavItem = styled.button`
  padding: 0.5rem 1rem;
  margin-left: 8px;
  border: 1px solid ${THEME_COLORS.AZUL_CLARO};
  border-radius: 18px;
  background-color: ${THEME_COLORS.AZUL_CLARO};
  box-shadow: ${THEME_COLORS.SHADOW};
  font-weight: 600;
  font-size: 16px;
`;
