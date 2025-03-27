import { toast } from "react-toastify";
import { useDebounce } from "./useDebouce";
import { Planets } from "../types/planets.types";
import { useState, useEffect, useCallback } from "react";
import { StartWarsService } from "../service/http/star.wars.service";

export const usePlanets = () => {
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const [totalPages, setTotalPages] = useState(0);
  const [planets, setPlanets] = useState<Planets[]>([]);

  const debouncedSearch = useDebounce(search, 500);

  const fetchData = useCallback(async () => {
    try {
      const response = debouncedSearch
        ? await StartWarsService.searchPlanets(search)
        : await StartWarsService.getPlanets({ page });

      setPlanets(response?.data.results || []);
      setTotalPages(Math.ceil(response?.data.count / 10));
    } catch (error: unknown) {
      toast.error(
        "Erro ao buscar planetas, tente novamente mais tarde",
        {
          autoClose: 5000,
        },
        error
      );
    } finally {
      setLoading(false);
    }
  }, [search, page, debouncedSearch]);

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
