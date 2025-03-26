import { useNavigate } from "react-router-dom";
import * as S from "./styles";

export type CardProps = {
  id: string;
  title: string;
  details: {
    label: string;
    value?: string;
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
                <strong>{detail.label}:</strong>{" "}
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
