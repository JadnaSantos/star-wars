import styled from "styled-components";
import { THEME_COLORS } from "../../styles/theme/colors";

export const Pagination = styled.div`
  gap: 30px;
  display: flex;
  margin-top: 1rem;
  align-items: center;
  justify-content: center;

  margin-bottom: 1rem;
  padding: 2rem;
`;

export const Button = styled.button`
  background-color: ${THEME_COLORS.AZUL_ESCURO};
  border: none;
  cursor: pointer;
  border-radius: 1rem;
  color: white;
  padding: 0.5rem 1rem;
  margin-top: 1rem;
  font-size: 100%;
  transition: all 0.3s;
`;
