import styled from "styled-components";
import { DEVICES } from "../../styles/theme/devices";
import { THEME_COLORS } from "../../styles/theme/colors";

export const NotItens = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: ${THEME_COLORS.AZUL_CLARO};
  border-radius: 4px;
  margin-bottom: 50px;

  @media (max-width: ${DEVICES.MOBILE}) {
    padding-left: 16px;
    padding-right: 16px;
    margin: 0 auto;
    margin-bottom: 50px;
    width: 82%;
    height: 516px;
  }
`;

export const TextMessage = styled.p`
  color: ${THEME_COLORS.PRETO};
  font-weight: 700;
  font-size: 20px;
  margin-bottom: 24px;
  text-align: center;
  width: 70%;
`;
export const ContainerButton = styled.div`
  padding: 24px;
  width: 173px;
`;

export const Button = styled.button`
  font-size: 16px;
  font-weight: 600;
  margin-left: 8px;
  border-radius: 18px;
  padding: 0.5rem 1rem;
  box-shadow: ${THEME_COLORS.SHADOW};
  background-color: ${THEME_COLORS.AZUL_CLARO};
  border: 1px solid ${THEME_COLORS.AZUL_CLARO};
`;
