import { PATH } from "../../routes/path";
import * as S from "./styles";
import { useNavigate } from "react-router-dom";

export type CardProps = {
  id?: string;
  title: string;
  details: {
    label: string;
    value?: string;
    link?: string | Array<string>;
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

  return (
    <>
      <S.CardContainer>
        <S.CardContent>
          <S.CardTitle>{title}</S.CardTitle>
          <S.CardList key={id}>
            {details.map((detail) => (
              <S.CardListItem key={id}>
                <S.CardListItens>
                  <p>{detail.label}:</p>
                  <p>{detail.value}</p>
                </S.CardListItens>
                {Array.isArray(detail.link) ? (
                  <>
                    {detail.link.map((multiploLink) => (
                      <S.CardLink
                        onClick={() => handleNavigation(multiploLink)}
                      >
                        {multiploLink}
                      </S.CardLink>
                    ))}
                  </>
                ) : typeof detail.link === "string" ? (
                  <S.CardLink
                    onClick={() => handleNavigation(detail.link as string)}
                  >
                    {detail.link}
                  </S.CardLink>
                ) : null}
              </S.CardListItem>
            ))}
          </S.CardList>
        </S.CardContent>
      </S.CardContainer>
    </>
  );
};
