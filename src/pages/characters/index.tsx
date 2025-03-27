import * as S from "./styles";
import { PATH } from "../../routes/path";
import { Card } from "../../components/card";
import { Search } from "../../components/search";
import { Loading } from "../../components/loading";
import { useCharacters } from "../../hooks/useCharacter";
import { Pagination } from "../../components/pagination";

export const Characters = () => {
  const { characters, totalPages, loading, page, setPage, search, setSearch } =
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
