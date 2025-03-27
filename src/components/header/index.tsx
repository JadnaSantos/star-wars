import * as S from "./styles";
import starWars from "../../assets/star-wars.svg";
import { useNavigate } from "react-router-dom";
export const Header = () => {
  const navigate = useNavigate();
  return (
    <>
      <S.Header>
        <S.Logo src={starWars} alt="Logo soldado de assalto" />

        <S.Content>
          <S.Nav>
            <S.NavItem onClick={() => navigate("/")}>Characters</S.NavItem>
            <S.NavItem onClick={() => navigate("/planets")}>Planets</S.NavItem>
            <S.NavItem onClick={() => navigate("/favorties")}>
              Favorites
            </S.NavItem>
          </S.Nav>
        </S.Content>
      </S.Header>
    </>
  );
};
