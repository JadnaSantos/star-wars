import { Card } from "../../components/card";
import { Loading } from "../../components/loading";
import { useDetails } from "../../hooks/useDetails";
import { Details } from "../../types/details.type";
import * as S from "./styles";
export const DetailsPage = () => {
  const { data, loading, type } = useDetails() as {
    data: Details | Details[];
    loading: boolean;
    type: string;
  };

  const hasResidents = (item: Details) => {
    return Array.isArray(item.residents) && item.residents.length > 0;
  };

  const getDetailsByType = (item: Details, type: string) => {
    if (type === "people") {
      return [
        { label: "Height", value: item.height },
        { label: "BirthYear", value: item.birth_year },
        { label: "Homeworld", link: item.homeworld },
      ];
    }

    if (type === "planets") {
      return [
        { label: "Climate", value: item.climate },
        { label: "Terrain", value: item.terrain },
        {
          label: "Residents",
          value: hasResidents(item) ? undefined : "No residents",
          link: hasResidents(item) ? item.residents : undefined,
        },
      ];
    }

    return [];
  };

  return (
    <>
      {loading && <Loading />}
      {!loading && (
        <S.Grid>
          {Array.isArray(data) ? (
            data.map((item: Details) => (
              <Card
                key={item.url}
                title={item.name}
                details={getDetailsByType(item, type)}
              />
            ))
          ) : (
            <Card
              key={data.url}
              title={data.name}
              details={getDetailsByType(data, type)}
            />
          )}
        </S.Grid>
      )}
    </>
  );
};
