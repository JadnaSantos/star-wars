import * as S from "./styles";
import { useNavigate } from "react-router-dom";

export type CardProps = {
  id?: string;
  title: string;
  details: {
    label: string;
    value?: string;
    link?: string | string[]
  }[];
};

export const Card = ({ id, title, details }: CardProps) => {
  const navigate = useNavigate();

  const handleNavigation = (link: string) => {
    const match = link.match(/https:\/\/swapi.dev\/api\/(\w+)\/(\d+)\//);
    if (match) {
      const [, type, id] = match;

      navigate(`/details/${type}/${id}`);
    }
  };

  const renderLinkIntoCard = (link?: string | string[] ) => {
    if(!link) return

    const renderLink = (value: string) => (
      <S.CardLink key={id} onClick={() => handleNavigation(value)}>
        {value}
      </S.CardLink>
    )

    return Array.isArray(link)
      ? link.map((value) => renderLink(value))
      : renderLink(link)
  }

  return (
    <>
      <S.CardContainer>
        <S.CardContent>
          <S.CardTitle>{title}</S.CardTitle>
          <S.CardList key={id}>
            {details.map((item) => (
              <S.CardListItem key={id}>
                <S.CardListItens>
                  <p>{item.label}:</p>
                  <p>{item.value}</p>
                </S.CardListItens>
                {renderLinkIntoCard(item.link)}
              </S.CardListItem>
            ))}
          </S.CardList>
        </S.CardContent>
      </S.CardContainer>
    </>
  );
};
