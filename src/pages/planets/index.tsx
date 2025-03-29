import * as S from "./styles";
import { Card } from "../../components/card";
import { Search } from "../../components/search";
import { Loading } from "../../components/loading";
import { usePlanets } from "../../hooks/usePlanets";
import { Pagination } from "../../components/pagination";

export const Planets = () => {
  const { planets, loading, totalPages, page, setPage, search, setSearch } =
    usePlanets();

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <>
          <Search
            value={search}
            onClick={() => setPage(1)}
            placeholder="Search planets..."
            onChange={(e) => setSearch(e.target.value)}
          />
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
                    label: "Residents",
                    value: item.residents.length ? undefined : "No residents",
                    link: item.residents.length ? item.residents : undefined,
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
