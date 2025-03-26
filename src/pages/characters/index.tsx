import * as S from "./styles";
import { PATH } from "../../routes/path";
import { useEffect, useState } from "react";
import { Card } from "../../components/card";
import { StartWarsService } from "../../service/http/star.wars.service";
import { useNavigate } from "react-router-dom";

export type Character = {
  mass: string;
  name: string;
  height: string;
  birth_year: string;
  url: string;
};

export const Characters = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [characters, setCharacters] = useState<Character[]>([]);

  const fetchCharacters = async () => {
    try {
      const response = await StartWarsService.getCharacters();
      setCharacters(response?.data.results);
      setLoading(false);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCharacters();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <S.Grid>
      {characters.map((item) => (
        <Card
          id={item.mass}
          key={item.name}
          title={item.name}
          details={[
            { label: "Height", value: item.height },
            { label: "BirthYear", value: item.birth_year },
            {
              label: "Homeworld",
              value: item.url,
              link: `${PATH.DETAILS}/${item.url.split("/")[5]}`,
            },
          ]}
        />
      ))}
    </S.Grid>
  );
};
