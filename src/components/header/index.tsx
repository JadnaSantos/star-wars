import * as S from "./styles";
import starWars from "../../assets/star-wars.svg";
import { useNavigate } from "react-router-dom";
import { Search } from "../search";
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
              Favarites
            </S.NavItem>
          </S.Nav>
        </S.Content>
      </S.Header>

      <Search
        placeholder="Search for characters or planets"
        onClick={() => console.log("busca")}
      />
    </>
  );
};
