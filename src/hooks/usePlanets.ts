import { Planets } from "../types/planets.types";
import { useState, useEffect, useCallback } from "react";
import { StarWarsService } from "../service/http/star.wars.service";
import { ErrorLoadPlanets } from "./erros/ErrorLoadPlanets";

export const usePlanets = () => {
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const [totalPages, setTotalPages] = useState(0);
  const [planets, setPlanets] = useState<Planets[]>([]);

  const fetchData = useCallback(async () => {
    try {
      const response = search
        ? await StarWarsService.searchPlanets(search)
        : await StarWarsService.getPlanets(page);

      setPlanets(response.results);
      setTotalPages(Math.ceil(response.count / 10));
    } catch (error) {
      throw new ErrorLoadPlanets('Erro ao carregar os planetas');
    } finally {
      setLoading(false);
    }
  }, [search, page]);

  useEffect(() => {
    fetchData();
  }, [search, page, fetchData]);

  const handleSearch = (value: string) => {
    setSearch(value);
    setPage(1);
  };

  return {
    page,
    search,
    loading,
    setPage,
    planets,
    totalPages,
    setSearch: handleSearch,
  };
};
