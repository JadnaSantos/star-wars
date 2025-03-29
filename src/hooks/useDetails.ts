import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { StartWarsService } from "../service/http/star.wars.service";
import { Details } from "../types/details.type";
import { ErrorLoadPlanets } from "./erros/ErrorLoadPlanets";

export const useDetails = () => {
  const { type, id } = useParams();
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState<Details[]>([]);

  const featchDetails = async (type: string, id: string) => {
    try {
      const response = await StartWarsService.getDetails(type, id);
      setData(response.data);
    } catch (error) {
      new ErrorLoadPlanets(error as Error);
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
