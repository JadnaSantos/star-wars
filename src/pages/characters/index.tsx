import * as S from "./styles";
import { PATH } from "../../routes/path";
import { useEffect, useState } from "react";
import { Card } from "../../components/card";
import { useNavigate } from "react-router-dom";
import { StartWarsService } from "../../service/http/star.wars.service";
import { Loading } from "../../components/loading";
import { Pagination } from "../../components/pagination";

export type Character = {
  id: string;
  name: string;
  height: string;
  birth_year: string;
  url: string;
};

export const Characters = () => {
  // const navigate = useNavigate();
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [totalPages, setTotalPages] = useState(0);
  const [characters, setCharacters] = useState<Character[]>([]);

  const fetchCharacters = async (page: number) => {
    setLoading(true);
    try {
      const response = await StartWarsService.getCharacters({ page });
      setCharacters(response?.data.results);
      setTotalPages(Math.ceil(response?.data.count / 10));
      setLoading(false);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCharacters(page);
  }, [page]);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <>
          <S.Grid>
            {characters?.map((item) => (
              <Card
                id={item.id}
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
          <Pagination
            currentPage={page}
            totalPages={totalPages}
            onPageChange={(page) => setPage(page)}
          />
        </>
      )}
    </>
  );
};
