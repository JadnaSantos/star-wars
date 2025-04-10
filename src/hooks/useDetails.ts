import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { StarWarsService } from "../service/http/star.wars.service";
import { Details } from "../types/details.type";
import { ErrorLoadDetails } from "./erros/ErrosDetails";

export const useDetails = () => {
  const { type, id } = useParams();
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState<Details[]>([]);

  const featchDetails = async (type: string, id: string) => {
    try {
      const {data} = await StarWarsService.getDetails(type, id);

      setData(data);
    } catch (error) {
      throw new ErrorLoadDetails('Erro ao carregar os detalhes');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (type && id) {
      featchDetails(type, id);
    }
  }, [type, id]);

  return {
    id,
    type,
    data,
    setData,
    loading,
  };
};
