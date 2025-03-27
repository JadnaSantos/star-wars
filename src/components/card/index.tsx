import * as S from "./styles";
import { useNavigate } from "react-router-dom";
import { FaStar, FaRegStar } from "react-icons/fa";
import { useFavorites } from "../../hooks/useFavorite";

export type CardProps = {
  id: string;
  title: string;
  details: {
    label: string;
    value?: string | React.ReactNode;
    link?: string;
  }[];
};

export const Card = ({ id, title, details }: CardProps) => {
  const navigate = useNavigate();

  const handleNavigation = (link: string | undefined) => {
    if (link) {
      navigate(link);
    }
  };
  return (
    <>
      <S.CardContainer>
        <S.CardContent>
          <S.CardTitle>{title}</S.CardTitle>
          <S.CardList key={id}>
            {details.map((detail) => (
              <S.CardListItem key={id}>
                <p>{detail.label}:</p>{" "}
                {detail.link ? (
                  <span onClick={() => handleNavigation(detail.link)}>
                    {detail.value}
                  </span>
                ) : (
                  detail.value
                )}
              </S.CardListItem>
            ))}
          </S.CardList>
        </S.CardContent>
      </S.CardContainer>
    </>
  );
};
