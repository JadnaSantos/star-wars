import * as S from "./styles";
import { Card } from "../../components/card";
import { Search } from "../../components/search";
import { Loading } from "../../components/loading";
import { useCharacters } from "../../hooks/useCharacters";
import { Pagination } from "../../components/pagination";

export const Characters = () => {
  const { characters, loading, totalPages, page, setPage, search, setSearch } =
    useCharacters();

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <>
          <Search
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search character..."
            onClick={() => setPage(1)}
          />
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
                    link: item.homeworld,
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
