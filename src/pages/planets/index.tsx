import { useEffect, useState } from "react";
import { StartWarsService } from "../../service/http/star.wars.service";
import { Card } from "../../components/card";
import * as S from "./styles";
import { Loading } from "../../components/loading";
import { Pagination } from "../../components/pagination";

export type Planets = {
  id: string;
  name: string;
  climate: string;
  residents: string[];
  orbital_period: string;
};
export const Planets = () => {
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [totalPages, setTotalPages] = useState(0);
  const [planets, setPlanets] = useState<Planets[]>([]);

  const fetchPlanets = async (page: number) => {
    try {
      const response = await StartWarsService.getPlanets({ page });
      setPlanets(response?.data.results);
      setTotalPages(Math.ceil(response?.data.count / 10));
      setLoading(false);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPlanets(page);
  }, [page]);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <>
          <S.GridPlanet>
            {planets?.map((item) => (
              <Card
                id={item.id}
                key={item.name}
                title={item.name}
                details={[
                  { label: "Orbital Rotation", value: item.orbital_period },
                  { label: "Climate", value: item.climate },
                  {
                    label: "Homeworld",
                    value: "iAOAOAO",
                    link: "AOAOAO",
                  },
                ]}
              />
            ))}
          </S.GridPlanet>
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
