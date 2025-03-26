import styled from "styled-components";
import { DEVICES } from "../../styles/theme/devices";
import { THEME_COLORS } from "../../styles/theme/colors";

export const CardContainer = styled.div`
  display: flex;
  padding: 20px;
  margin: 20px;
  cursor: pointer;
  border: 1px solid #ddd;
  align-items: center;
  border-radius: 18px;
  flex-direction: column;
  background-color: ${THEME_COLORS.AZUL_CLARO};

  @media (max-width: ${DEVICES.MOBILE}) {
    width: 100%;
    margin: 10px;
  }
`;

export const Logo = styled.h1`
  width: 50px;
  height: 50px;
  margin-bottom: 10px;
`;

export const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const CardTitle = styled.h2`
  font-size: 18px;
  font-weight: 700;
  color: ${THEME_COLORS.AZUL_ESCURO};
`;

export const CardList = styled.ul`
  list-style: none;
  padding: 0;
`;

export const CardListItem = styled.li`
  margin-bottom: 8px;
  font-size: 1rem;
  color: ${THEME_COLORS.PRETO};

  p {
    color: ${THEME_COLORS.AZUL_ESCURO};
    font-size: 16px;
    font-weight: 400;
  }

  span {
    color: blue;
    cursor: pointer;
    text-decoration: underline;

    &:hover {
      color: ${THEME_COLORS.PRETO};
    }
  }
`;
