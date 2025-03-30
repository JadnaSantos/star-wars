import { Characters } from "../types/characters.types";
import { useState, useEffect, useCallback } from "react";
import { StartWarsService } from "../service/http/star.wars.service";
import { ErrorLoadCharacters } from "./erros/ErrorLoadCharacters";

export const useCharacters = () => {
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const [totalPages, setTotalPages] = useState(0);
  const [characters, setCharacters] = useState<Characters[]>([]);

  const fetchData = useCallback(async () => {
    try {
      const response = search
        ? await StartWarsService.searchCharacters(search)
        : await StartWarsService.getCharacters({ page });

      setCharacters(response?.data.results || []);
      setTotalPages(Math.ceil(response?.data.count / 10));
    } catch (error) {
      throw new ErrorLoadCharacters(error as Error);
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
    characters,
    totalPages,
    setSearch: handleSearch,
  };
};
