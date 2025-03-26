import { useEffect, useState } from "react";
import { StartWarsService } from "../../service/http/star.wars.service";
import { Card } from "../../components/card";
import * as S from "./styles";

export type Planets = {
  gravity: string;
  name: string;
  climate: string;
  residents: string[];
  orbital_period: string;
};
export const Planets = () => {
  const [loading, setLoading] = useState(true);
  const [planets, setPlanets] = useState<Planets[]>([]);

  const fetchPlanets = async () => {
    try {
      const response = await StartWarsService.getPlanets();
      setPlanets(response?.data.results);
      setLoading(false);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPlanets();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <S.GridPlanet>
      {planets.map((item) => (
        <Card
          id={item.gravity}
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
  );
};
