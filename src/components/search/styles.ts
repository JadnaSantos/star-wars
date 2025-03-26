import styled from "styled-components";
import { CiSearch } from "react-icons/ci";
import { DEVICES } from "../../styles/theme/devices";
import { THEME_COLORS } from "../../styles/theme/colors";

export const Icon = styled(CiSearch)`
  margin: 10px;
  position: absolute;
  color: ${THEME_COLORS.PRETO};

  @media (max-width: ${DEVICES.MOBILE}) {
    right: 28px;
  }
`;

export const Container = styled.form`
  display: flex;
  padding: 1rem;
  max-width: 1440px;
  margin: 3rem auto;
  align-items: center;
  justify-content: flex-end;

  &:focus-within ${Icon} {
    color: ${THEME_COLORS.PRETO};
  }
`;

export const Input = styled.input`
  width: 50%;
  border-radius: 18px;
  padding: 0.5rem 1rem;
  box-shadow: ${THEME_COLORS.SHADOW};
  border: 1px solid ${THEME_COLORS.AZUL_CLARO};
  background-color: ${THEME_COLORS.AZUL_CLARO};

  ::placeholder {
    color: ${THEME_COLORS.PRETO};
  }

  @media (max-width: ${DEVICES.MOBILE}) {
    margin: 0 16px;
    width: 100%;
  }
`;
