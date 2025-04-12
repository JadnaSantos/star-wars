import * as S from "./styles";
import { PATH } from "../../routes/path";
import { useNavigate } from "react-router-dom";
import starWars from "../../assets/star-wars.svg";

export const Header = () => {
  const navigate = useNavigate();
  return (
    <>
      <S.Header>
        <S.Logo src={starWars} alt="Logo soldado de assalto" />

        <S.Content>
          <S.Nav>
            <S.NavItem onClick={() => navigate(PATH.CHARACTERS)}>
              Characters
            </S.NavItem>
            <S.NavItem onClick={() => navigate(PATH.PLANETS)}>
              Planets
            </S.NavItem>
            <S.NavItem onClick={() => navigate(PATH.FAVORITES)}>
              Favorites
            </S.NavItem>
          </S.Nav>
        </S.Content>
      </S.Header>
    </>
  );
};
