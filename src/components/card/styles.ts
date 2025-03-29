import styled from "styled-components";
import { DEVICES } from "../../styles/theme/devices";
import { THEME_COLORS } from "../../styles/theme/colors";

export const CardContainer = styled.div`
  padding: 20px;
  margin: 20px;
  cursor: pointer;
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
  gap: 1rem;
  display: flex;
  flex-direction: column;
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
  display: flex;
  flex-direction: column;
  gap: 9px;
`;

export const CardListItens = styled.div`
  display: flex;
  gap: 10px;

  p {
    font-weight: 600;
  }
`;

export const CardLink = styled.a`
  text-decoration: underline;

  &:hover {
    text-decoration: none;
  }
`;

// export const FavoriteIcon = styled.div<{ favorited: boolean }>`
//   top: 8px;
//   right: 8px;
//   cursor: pointer;
//   font-size: 1.4rem;

//   color: ${(props) =>
//     props.favorited ? `${THEME_COLORS.AMARELO}` : `${THEME_COLORS.CINZA}`};

//   &:hover {
//     transform: scale(1.2);
//   }

//   transition: transform 0.2s ease;
// `;
