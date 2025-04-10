import { Characters } from "../types/characters.types";
import { useState, useEffect, useCallback } from "react";
import { StarWarsService } from "../service/http/star.wars.service";
import { ErrorLoadCharacters } from "./erros/ErrorLoadCharacters";

export const useCharacters = () => {
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const [totalPages, setTotalPages] = useState(0);
  const [characters, setCharacters] = useState<Characters[]>([]);

  const fetchData = useCallback(async () => {
    setLoading(true)
    try {
      const response = search
        ? await StarWarsService.searchCharacters(search)
        : await StarWarsService.getCharacters(page);

      setCharacters(response.results);
      setTotalPages(Math.ceil(response.count / 10));
    } catch (error) {
      throw new ErrorLoadCharacters('Erro ao carregar os personagens');
    } finally {
      setLoading(false);
    }
  }, [search, page]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const handleSearch = (value: string) => {
    setSearch(value);
    setPage(1);
  };

  return {
    page,
    search,
    loading,
    setPage,
    characters,
    totalPages,
    setSearch: handleSearch,
  };
};
